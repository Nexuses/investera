"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
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

        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-10 gap-y-12 sm:mt-14 sm:gap-x-14 lg:mt-16 lg:gap-x-20 xl:gap-x-24">
          {team.map((member, index) => (
            <motion.article
              key={`${member.image}-${index}`}
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
              <h3 className="mt-5 text-[15px] font-bold uppercase leading-[1.25] tracking-[0.04em] text-[#111111] sm:text-[16px]">
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
          ))}
        </div>
      </div>
    </section>
  );
}
