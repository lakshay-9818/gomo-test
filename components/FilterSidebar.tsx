'use client'
import { useState } from 'react'
export interface SubFilter {
  label: string
  checked?: boolean
}

export interface Category {
  name: string
  subFilters?: SubFilter[]
}

function ChevronDown() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
      <path d="M1.5 1.5L8 8.5L14.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <div
      className={`w-3 h-3 border rounded-[2px] shrink-0 flex items-center justify-center ${
        checked ? 'bg-[#1E2E31] border-[#1E2E31]' : 'border-[rgba(30,46,49,0.3)]'
      }`}
    >
      {checked && (
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
          <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  )
}

interface FilterSidebarProps {
  categories: Category[]
  selectedCategories: string[]
  onToggleCategory: (name: string) => void
}

export function FilterSidebar({ categories, selectedCategories, onToggleCategory }: FilterSidebarProps) {
  // Accordion open/close state is purely UI (which panel is expanded),
  // separate from which categories are actually selected as filters.
  const [openCategory, setOpenCategory] = useState<string>('')

  const toggleOpen = (name: string) => {
    setOpenCategory((prev) => (prev === name ? '' : name))
  }

  return (
    <aside className="w-[293px] min-w-[293px] rounded-[5px]">
      <div className="flex items-center px-5 py-6 bg-[#F2EBE2] border border-[rgba(30,46,49,0.15)] rounded-t-[5px]">
        <span className="font-['Inter'] text-base font-normal text-[#1E2E31]">All categories</span>
      </div>

      {categories.map((cat, i) => {
        const isOpen = openCategory === cat.name
        const isLast = i === categories.length - 1
        const hasSubFilters = !!cat.subFilters?.length
        const isSelected = selectedCategories.includes(cat.name)

        const row = (
          <div
            className={`flex items-center justify-between px-5 py-5 bg-[#F2EBE2] border-[rgba(30,46,49,0.15)] border-x border-b min-h-[60px]${
              isLast && !isOpen ? ' rounded-b-[5px]' : ''
            }`}
          >
            <label className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer">
              <Checkbox checked={isSelected} />
              <input
                type="checkbox"
                className="sr-only"
                checked={isSelected}
                onChange={() => onToggleCategory(cat.name)}
              />
              <span
                className={`font-['Inter'] text-sm font-normal text-[#1E2E31] leading-5 flex-1 overflow-hidden text-ellipsis ${
                  isSelected || isOpen ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {cat.name}
              </span>
            </label>

            {hasSubFilters && (
              <button
                type="button"
                onClick={() => toggleOpen(cat.name)}
                className={`shrink-0 text-[#1E2E31] flex items-center justify-center ${
                  isOpen ? 'opacity-100 rotate-180' : 'opacity-70'
                }`}
                aria-label={isOpen ? 'Collapse' : 'Expand'}
              >
                <ChevronDown />
              </button>
            )}
          </div>
        )

        if (isOpen && cat.subFilters) {
          return (
            <div
              key={cat.name}
              className={`bg-[#F2EBE2] border-[rgba(30,46,49,0.15)] border-x border-b flex flex-col gap-4 px-5 py-5${
                isLast ? ' rounded-b-[5px]' : ''
              }`}
            >
              <div className="border-none p-0 min-h-auto w-full">{row}</div>
              <div className="w-[260px] bg-white border border-[rgba(30,46,49,0.15)] rounded-[5px] overflow-hidden">
                {cat.subFilters.map((sf, si) =>
                  si === 0 ? (
                    <div
                      key={sf.label}
                      className="px-5 py-3 font-['Inter'] text-xs font-normal text-[#1E2E31] leading-5 border-b border-[rgba(30,46,49,0.15)]"
                    >
                      {sf.label}
                    </div>
                  ) : (
                    <div
                      key={sf.label}
                      className="flex items-center gap-2.5 px-5 py-[13px] cursor-pointer border-b border-[rgba(30,46,49,0.15)] last:border-b-0 hover:bg-[rgba(30,46,49,0.03)] transition-colors"
                    >
                      <Checkbox checked={!!sf.checked} />
                      <span className="font-['Inter'] text-xs font-normal text-[#1E2E31] leading-5">{sf.label}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          )
        }

        return <div key={cat.name}>{row}</div>
      })}
    </aside>
  )
}