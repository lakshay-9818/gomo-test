import Image from 'next/image'

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  description: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  imageSrc: string;
};

type TeamMembersProps = {
  members: TeamMember[];
};

function ContactRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-600 text-sm">
      <span>{label}</span>
      <span className="text-base text-gray-400">→</span>
    </div>
  );
}

export default function TeamMembers({ members }: TeamMembersProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
      {members.map((member) => (
        <article
          key={member.id}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
        >
          <div className="flex flex-col items-center text-center mb-5">
            <div className="relative w-[120px] h-[120px] rounded-[22px] overflow-hidden mb-[18px]">
              <Image
                src={member.imageSrc}
                alt={member.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <h2 className="m-0 text-lg font-semibold text-gray-900">{member.name}</h2>
              <p className="mt-2 text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
          <div className="grid gap-3">
            {member.phone && <ContactRow label={member.phone} />}
            {member.email && <ContactRow label={member.email} />}
            {member.linkedin && <ContactRow label={member.linkedin} />}
          </div>
        </article>
      ))}
    </div>
  );
}
