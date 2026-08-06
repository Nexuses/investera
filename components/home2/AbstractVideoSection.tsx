export default function AbstractVideoSection() {
  return (
    <section className="bg-white">
      <div className="w-full overflow-hidden">
        <video
          className="h-[400px] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://investera.s3.us-east-2.amazonaws.com/0_Abstract_Background_1920x1080__1__1786022135083_asj6.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
