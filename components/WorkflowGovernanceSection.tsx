"use client";

import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";

type WorkflowGovernanceSectionProps = {
  image?: string;
};

export default function WorkflowGovernanceSection({
  image = "/images/workflow-governance/dashboard.png",
}: WorkflowGovernanceSectionProps) {
  return (
    <section className="bg-white pt-5 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-auto overflow-hidden rounded-[18px] border border-[#F1E6D5] bg-gradient-to-r from-[#FFF3DF] to-white shadow-[0_15px_40px_rgba(0,0,0,0.05)] lg:h-[260px]"
        >
          <div className="grid h-full grid-cols-1 lg:grid-cols-[38%_62%] lg:justify-between">
            {/* Left content */}
            <div className="flex flex-col justify-center px-6 pt-6 pb-4 sm:px-8 sm:pt-8 lg:pb-0">
              <h3 className="text-[34px] font-normal leading-[1.15] text-[#1e293b]">
                Workflow &
                <br />
                <span className="font-bold text-[#0c2d57]">Governance Controls</span>
              </h3>
              <p className="mt-4 max-w-[560px] text-[16px] leading-[1.3] text-[#333333] lg:mt-5">
                Streamline investment processes with configurable workflows, approval
                controls, and governance frameworks that improve consistency, oversight,
                and operational control.
              </p>
            </div>

            {/* Right dashboard preview */}
            <div className="relative lg:min-h-0 lg:flex-1">
              <div className="relative px-4 pt-1 sm:px-6 lg:absolute lg:inset-0 lg:px-0 lg:pt-0">
                <DashboardPreview
                  src={image}
                  alt="Consolidated dashboard with asset allocation charts and investment metrics"
                  delay={0.15}
                  className="relative -mb-1 mx-auto w-full translate-y-4 sm:translate-y-5 lg:absolute lg:bottom-0 lg:right-0 lg:mb-0 lg:w-[84%] lg:translate-y-[8%]"
                  imageClassName="h-auto w-full rounded-t-xl rounded-b-none lg:rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
