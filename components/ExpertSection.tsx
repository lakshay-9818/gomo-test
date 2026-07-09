import TeamMembers, { type TeamMember } from './TeamMembers'

const teamMembers: TeamMember[] = [
  {
    id: 'emma-johnson',
    name: 'Emma Johnson',
    role: 'Senior Design Consultant',
    description: 'Emma brings over 12 years of experience in hospitality interior design, specialising in creating functional yet inspiring commercial kitchen and dining spaces.',
    phone: '+46 70 123 45 67',
    email: 'emma.johnson@gomo.se',
    linkedin: 'linkedin.com/in/emma-johnson',
    imageSrc: '/team/emma-johnson.jpg',
  },
  {
    id: 'lucas-andersson',
    name: 'Lucas Andersson',
    role: 'Project Manager',
    description: 'Lucas ensures every project runs on time and on budget. With a background in construction management, he coordinates seamlessly between clients, architects, and contractors.',
    phone: '+46 70 234 56 78',
    email: 'lucas.andersson@gomo.se',
    imageSrc: '/team/lucas-andersson.jpg',
  },
  {
    id: 'sofia-lundberg',
    name: 'Sofia Lundberg',
    role: 'Sustainability Lead',
    description: 'Sofia drives our sustainability initiatives, advising clients on energy-efficient equipment, material sourcing, and circular design principles that reduce environmental impact.',
    linkedin: 'linkedin.com/in/sofia-lundberg',
    imageSrc: '/team/sofia-lundberg.jpg',
  },
]

export function ExpertSection() {
  return (
    <section className="max-w-[1284px] mx-auto pt-[60px] pb-20 text-center">
      <span className="font-larken text-base font-light text-[#1E2E31] leading-[20.56px] block mb-3">Talk to our team of experts</span>
      <h2 className="font-['Inter'] text-4xl font-normal text-[#1E2E31] leading-[48px] mx-auto mb-12 max-w-[920px]">Let&rsquo;s explore how we can support you</h2>

      <div className="flex gap-[60px] items-start text-left">
        <div className="flex-1 flex flex-col gap-4 max-w-[500px]">
          <div className="w-full">
            <input type="text" placeholder="Full name" className="w-full px-5 py-3.5 border border-[rgba(30,46,49,0.2)] rounded-lg font-['Inter'] text-sm text-[#1E2E31] bg-white outline-none resize-y placeholder:text-[rgba(30,46,49,0.4)]" />
          </div>
          <div className="w-full">
            <input type="email" placeholder="Email address" className="w-full px-5 py-3.5 border border-[rgba(30,46,49,0.2)] rounded-lg font-['Inter'] text-sm text-[#1E2E31] bg-white outline-none resize-y placeholder:text-[rgba(30,46,49,0.4)]" />
          </div>
          <div className="w-full">
            <input type="text" placeholder="Company name" className="w-full px-5 py-3.5 border border-[rgba(30,46,49,0.2)] rounded-lg font-['Inter'] text-sm text-[#1E2E31] bg-white outline-none resize-y placeholder:text-[rgba(30,46,49,0.4)]" />
          </div>
          <div className="w-full">
            <textarea placeholder="How can we help you?" rows={4} className="w-full px-5 py-3.5 border border-[rgba(30,46,49,0.2)] rounded-lg font-['Inter'] text-sm text-[#1E2E31] bg-white outline-none resize-y placeholder:text-[rgba(30,46,49,0.4)]" />
          </div>
          <div className="inline-flex items-center px-9 py-3.5 bg-[#1E2E31] rounded-[50px] cursor-pointer self-start">
            <span className="font-['Inter'] text-base font-normal text-white leading-5 whitespace-nowrap">Send message</span>
          </div>
        </div>

        <div className="flex-1 max-w-[632px]">
          <TeamMembers members={teamMembers} />
        </div>
      </div>
    </section>
  );
}
