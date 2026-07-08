import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
// import Features from '@/components/Features'
// import Testimonials from '@/components/Testimonials'
// import NewsletterForm from '@/components/NewsletterForm'
import Portfolio from '@/components/Portfolio'
import ErrorState from '@/components/ErrorState'
import { getHomepage } from '@/lib/content'

// Revalidate this page's cached data every 60s (ISR) — a lightweight
// caching/revalidation strategy so content edits in Sanity show up
// without a full redeploy (Bonus: caching/revalidation strategy).
export const revalidate = 60

export default async function HomePage() {
  const { data: homepage } = await getHomepage()

  if (!homepage) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center px-4">
        <ErrorState
          title="Homepage content unavailable"
          message="We couldn't load homepage content right now. Please try again shortly."
        />
      </div>
    )
  }

  return (
    <>
      <Hero hero={homepage.hero} />
      <Intro intro={homepage.intro}/>
      {/* <Portfolio projects={homepage.projects ?? []} /> */}
      {/* <Features features={homepage.features} /> */}
      {/* <Testimonials testimonials={homepage.testimonials} /> */}
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        {/* <NewsletterForm /> */}
      </section>
    </>
  )
}
