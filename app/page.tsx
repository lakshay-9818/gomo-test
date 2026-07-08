import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
// import Features from '@/components/Features'
// import Testimonials from '@/components/Testimonials'
// import NewsletterForm from '@/components/NewsletterForm'
import Portfolio from '@/components/Portfolio'
import ErrorState from '@/components/ErrorState'
import { getHomepage, getSolutionCategories, getAllFeatureItems, getAllInsights } from '@/lib/content'
import LogoMarquee from '@/components/LogoMarquee'
import Categories from '@/components/Categories'
import FeaturesSection from '@/components/FeaturesSection'
import Insights from '@/components/Insights'

// Revalidate this page's cached data every 60s (ISR) — a lightweight
// caching/revalidation strategy so content edits in Sanity show up
// without a full redeploy (Bonus: caching/revalidation strategy).
export const revalidate = 60

export default async function HomePage() {
  const { data: homepage } = await getHomepage()
  const solutionCategories   = await getSolutionCategories();
  const features = await getAllFeatureItems(); 
  const insights = await getAllInsights(); // Fetch insights data
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
      <LogoMarquee brandsServed={homepage.brandsServed} />
      <Categories categories={solutionCategories?.data} />
      <FeaturesSection features={features?.data} />
      <Insights insights={insights?.data} />
      {/* <Portfolio projects={homepage.projects ?? []} /> */}
      {/* <Features features={homepage.features} /> */}
      {/* <Testimonials testimonials={homepage.testimonials} /> */}
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        {/* <NewsletterForm /> */}
      </section>
    </>
  )
}
