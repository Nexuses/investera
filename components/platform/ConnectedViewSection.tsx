const BG_VIDEO =
  "https://investera.s3.us-east-2.amazonaws.com/Untitled_design_1786616764409_9m9f.mp4";

export default function ConnectedViewSection() {
  return (
    <section className="relative flex aspect-[16/9] min-h-[480px] w-full items-start justify-center overflow-hidden bg-[#050B1F] sm:min-h-[560px] lg:min-h-[720px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={BG_VIDEO} type="video/mp4" />
      </video>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#050B1F]/25" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-[120px] lg:px-16">
        <h2 className="text-center text-[32px] leading-tight tracking-[-0.02em] text-white sm:text-[40px]">
          <span className="font-bold">One Connected View</span>{" "}
          <span className="font-normal">of Your Investments</span>
        </h2>
      </div>
    </section>
  );
}
