"use client";

import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";

type WorkflowGovernanceSectionProps = {
  description?: string;
  image?: string;
};

export default function WorkflowGovernanceSection({
  description = "Streamline investment processes with configurable workflows, approval controls, and governance frameworks that improve consistency, oversight, and operational control.",
  image = "/images/workflow-governance/dashboard.png",
}: WorkflowGovernanceSectionProps) {
  return (
    <section className="bg-white pt-5 pb-14 lg:pb-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-auto overflow-hidden rounded-[18px] border border-[#F1E6D5] bg-gradient-to-r from-[#FFF3DF] to-white shadow-[0_15px_40px_rgba(0,0,0,0.05)] lg:h-[260px]"
        >
          <div className="grid h-full grid-cols-1 lg:grid-cols-[38%_62%] lg:justify-between">
            {/* Left content */}
            <div className="flex flex-col justify-center px-8 pt-8 pb-8 lg:pb-0">
              <h3 className="text-[28px] font-normal leading-[1.15] text-[#1e293b] sm:text-[32px] lg:text-[36px]">
                Workflow &
                <br />
                <span className="font-bold text-[#0c2d57]">Governance Controls</span>
              </h3>
              <p className="mt-4 max-w-[320px] text-[13px] leading-[1.5] text-[#333333] lg:mt-5">
                {description}
              </p>
            </div>

            {/* Right dashboard preview */}
            <div className="relative min-h-[200px] lg:min-h-0">
              <div className="relative px-6 pb-6 pt-2 lg:absolute lg:inset-0 lg:px-0 lg:pb-0 lg:pt-0">
                <DashboardPreview
                  src={image}
                  alt="Consolidated dashboard with asset allocation charts and investment metrics"
                  delay={0.15}
                  className="relative mx-auto w-full lg:absolute lg:bottom-0 lg:right-0 lg:w-[84%] lg:translate-y-[8%]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
