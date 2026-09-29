import FeatureCard from "./FeatureCard";

export default function InvestmentFeatureSection() {
  return (
    <section className="bg-white pt-5 pb-0 lg:pb-0">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <FeatureCard
            delay={0}
            imageDelay={0.15}
            background="/images/features/card-bg-1.webp"
            title={
              <>
                Portfolio &
                <br />
                <span className="heading-accent text-[#0c2d57]">Deal Management</span>
              </>
            }
            description="Centralize deal management, portfolio tracking, and valuations. Gain unified visibility across investments and investors."
            image="https://investera.s3.us-east-2.amazonaws.com/Portfolio__1__1790064144621_fxw8.png"
            imageAlt="Portfolio and deal management interface with investment dashboards"
            imageClassName="h-auto w-full translate-y-[20px] object-cover object-top"
          />

          <FeatureCard
            delay={0.2}
            imageDelay={0.15}
            background="/images/features/card-bg-2.webp"
            title={
              <>
                Secure
                <br />
                <span className="heading-accent text-[#0c2d57]">Document Management</span>
              </>
            }
            description="Centralize investment documents in a secure repository with controlled access, structured storage, and easy retrieval across portfolios and transactions."
            image="https://investera.s3.us-east-2.amazonaws.com/Secure_Document_Management__1__1790064189314_sj5f.png"
            imageAlt="Document management analytics with charts and portfolio metrics"
            imageClassName="h-auto w-full translate-y-[20px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
