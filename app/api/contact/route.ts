import { NextResponse } from 'next/server'

interface ContactBody {
  name?: string
  phone?: string
  email?: string
  company?: string
  message?: string
}

interface ValidationError {
  field: string
  message: string
}

function validate(body: ContactBody): ValidationError[] {
  const errors: ValidationError[] = []

  if (!body.name || body.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Name is required' })
  }

  if (!body.phone || body.phone.trim().length === 0) {
    errors.push({ field: 'phone', message: 'Phone is required' })
  }

  if (!body.email || body.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' })
  }

  if (!body.company || body.company.trim().length === 0) {
    errors.push({ field: 'company', message: 'Company is required' })
  }

  return errors
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json()

    const errors = validate(body)

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 },
      )
    }

    console.log('Contact form submission:', {
      name: body.name?.trim(),
      phone: body.phone?.trim(),
      email: body.email?.trim(),
      company: body.company?.trim(),
      message: body.message?.trim() || null,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 },
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unexpected error'
    console.error('Contact form error:', message)
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 },
    )
  }
}
