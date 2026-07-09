'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  phone: string
  email: string
  company: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '', company: '', message: '',
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setFieldErrors({})
    setServerError('')

    const errors: FieldErrors = {}
    if (!form.name.trim()) errors.name = 'Name is required'
    if (!form.phone.trim()) errors.phone = 'Phone is required'
    if (!form.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Invalid email format'
    }
    if (!form.company.trim()) errors.company = 'Company is required'

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
        setServerError(data.errors?.[0]?.message || data.error || 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setServerError('Network error. Please try again.')
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-transparent border-b pb-2 font-sans text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors ${
      fieldErrors[field] ? 'border-red-400' : 'border-white/20'
    }`

  if (status === 'success') {
    return (
      <div className="lg:col-span-6 bg-[#1E2E31] text-white rounded-xl p-8 md:p-12 flex flex-col items-center justify-center shadow-sm min-h-[400px]">
        <p className="text-xl font-light mb-2">Message sent</p>
        <p className="text-sm text-gray-400">We&rsquo;ll get back to you shortly.</p>
      </div>
    )
  }

  return (
    <div className="lg:col-span-6 bg-[#1E2E31] text-white rounded-xl p-8 md:p-12 flex flex-col justify-between shadow-sm">
      <div>
        <h3 className="font-serif text-2xl md:text-3xl font-light mb-10">Contact us</h3>

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <input
                type="text"
                id="name"
                required
                placeholder="Name*"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={inputClass('name')}
              />
              {fieldErrors.name && <p className="text-red-400 text-xs mt-1">{fieldErrors.name}</p>}
            </div>
            <div className="flex flex-col">
              <input
                type="tel"
                id="phone"
                required
                placeholder="Phone*"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={inputClass('phone')}
              />
              {fieldErrors.phone && <p className="text-red-400 text-xs mt-1">{fieldErrors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                required
                placeholder="Email*"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={inputClass('email')}
              />
              {fieldErrors.email && <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                id="company"
                required
                placeholder="Company name*"
                value={form.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className={inputClass('company')}
              />
              {fieldErrors.company && <p className="text-red-400 text-xs mt-1">{fieldErrors.company}</p>}
            </div>
          </div>

          <div className="flex flex-col pt-4">
            <textarea
              id="message"
              rows={3}
              placeholder="Write a message"
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="w-full bg-transparent border-b border-white/20 pb-2 font-sans text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          {serverError && (
            <p className="text-red-400 text-sm">{serverError}</p>
          )}

          <div className="mt-12">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-white text-[#1E2E31] rounded-full text-sm font-medium hover:bg-gray-100 active:scale-[0.99] transition-all cursor-pointer inline-flex items-center justify-center whitespace-nowrap shadow-sm disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Submit form'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
