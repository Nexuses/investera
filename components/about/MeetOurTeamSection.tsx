"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamRowOne = [
  {
    name: "Diana Sabaa",
    role: "General Manager",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/1787072738254__1__1788419180709_bvho.jpg",
  },
  {
    name: "Himanshu Suryawanshi",
    role: "Product Manager",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Himanshu_1788419240473_ikmm.jpeg",
  },
  {
    name: "Akram Tawabty",
    role: "Sales Executive",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Akram_1788419294659_9mie.jpeg",
  },
];

const teamRowTwo = [
  {
    name: "Sureshkumar Natarajan",
    role: "Engineering Lead",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Suresh_1789459764005_pt48.png",
  },
  {
    name: "Ramprakash Kalyanasundaram",
    role: "Full Stack Developer",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Ram.jpg_1_1789459745243_i2jt.png",
  },
  {
    name: "Harisundar Shanmugasundaram",
    role: "Software Engineer",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Hari_1_1789459715374_wjc6.png",
  },
  {
    name: "Sheikha Obaidullah",
    role: "Operations & Project Implementation Specialist",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Sheikha_1_1789459795289_8x2z.png",
  },
  {
    name: "Amany Sulaiman",
    role: "UI/UX Designer",
    image:
      "https://investera.s3.us-east-2.amazonaws.com/Amany_1_1789459780306_l91d.png",
  },
];

function TeamMemberCard({
  member,
  index,
}: {
  member: (typeof teamRowOne)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: 0.08 + index * 0.08,
      }}
      className="flex w-[140px] flex-col items-center text-center sm:w-[160px]"
    >
      <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full shadow-[0_8px_24px_rgba(12,45,87,0.12)] sm:h-[140px] sm:w-[140px]">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>
      <h3 className="mt-5 text-[15px] font-bold leading-[1.25] tracking-[-0.01em] text-[#111111] sm:text-[16px]">
        {member.name.split(" ").map((part, partIndex, parts) => (
          <span key={`${part}-${partIndex}`}>
            {part}
            {partIndex < parts.length - 1 ? <br /> : null}
          </span>
        ))}
      </h3>
      <p className="mt-1.5 text-[14px] font-normal text-[#111111] sm:text-[15px]">
        {member.role}
      </p>
    </motion.article>
  );
}

export default function MeetOurTeamSection() {
  return (
    <section className="bg-[#EEF4FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center text-[34px] leading-[1.2] tracking-[-0.02em] sm:text-[40px]"
        >
          <span className="font-normal text-[#1a1a1a]">Meet </span>
          <span className="heading-accent text-[#0c2d57]">Our Team</span>
        </motion.h2>

        <div className="mt-12 flex flex-col gap-y-12 sm:mt-14 lg:mt-16">
          <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-12 sm:gap-x-14 lg:gap-x-20 xl:gap-x-24">
            {teamRowOne.map((member, index) => (
              <TeamMemberCard
                key={`${member.image}-${index}`}
                member={member}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-12 sm:gap-x-10 lg:gap-x-14 xl:gap-x-16">
            {teamRowTwo.map((member, index) => (
              <TeamMemberCard
                key={`${member.image}-${index}`}
                member={member}
                index={index + teamRowOne.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
