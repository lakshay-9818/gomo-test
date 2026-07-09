import TeamMembers from './TeamMembers'
import ContactForm from './ContactForm'
import { getTeamMembers } from '@/lib/content'

export default async function ContactSection() {
  const { data: teamMembers } = await getTeamMembers()

  return (
    <section id="contact" className="max-w-[1284px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] pb-20 text-center">
      <span className="font-sans text-sm md:text-base font-light text-[#1E2E31] tracking-wide block mb-3">
        Talk to our team of experts
      </span>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#1E2E31] leading-tight mx-auto mb-12 max-w-[920px]">
        Let&rsquo;s explore how we can support you
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
        <ContactForm />

        <div className="lg:col-span-6 bg-[#F5EDE3] rounded-xl border border-gray-200/50 p-6 md:p-8 flex flex-col justify-center">
          <TeamMembers members={teamMembers} />
        </div>
      </div>
    </section>
  );
}