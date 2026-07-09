import Link from 'next/link'

interface CtaBannerProps {
  cta: {
    heading: string
    ctaLabel: string
    ctaHref: string
  }
}

export default function CtaBanner({ cta }: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#7c6c53] to-[#332c22] text-center sm:h-48">
        <div className="relative px-6">
          <p className="text-lg font-medium text-white sm:text-xl">{cta.heading}</p>
          {cta.ctaLabel && (
            <Link href={cta.ctaHref} className="mt-4 inline-flex items-center rounded-full bg-white/20 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
              {cta.ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
