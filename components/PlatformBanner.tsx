const columns = [
  {
    title: ["Core Investment", "Categories"],
    subtitle: "Private, Public & Cash",
  },
  {
    title: ["Portfolio", "Management"],
    subtitle: "Manage diverse investments in one place",
  },
  {
    title: ["Investment", "Lifecycle"],
    subtitle: "From opportunities to reporting",
  },
];

export default function PlatformBanner() {
  return (
    <section className="bg-[#1a4570]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:gap-12 lg:px-16 lg:py-14">
        {/* Left heading */}
        <div className="shrink-0 text-white lg:w-[34%] lg:pr-4">
          <p className="text-[28px] font-normal leading-[1.1] sm:text-[32px] lg:text-[36px]">
            One Platform.
          </p>
          <h2 className="mt-1 text-[28px] font-bold leading-[1.1] sm:text-[32px] lg:text-[36px]">
            Complete Investment
            <br />
            Control
          </h2>
        </div>

        {/* Feature columns */}
        <div className="flex flex-1 flex-col gap-8 sm:flex-row sm:items-stretch sm:gap-0">
          {columns.map((column, index) => (
            <div key={column.title.join(" ")} className="flex flex-1 items-stretch">
              {index > 0 && (
                <div
                  className="mr-8 hidden w-px shrink-0 self-stretch bg-white/35 sm:mr-10 sm:block lg:mr-12"
                  aria-hidden="true"
                />
              )}
              <div className="text-white">
                <h3 className="text-[18px] font-bold leading-tight sm:text-[19px] lg:text-[20px]">
                  {column.title[0]}
                  <br />
                  {column.title[1]}
                </h3>
                <p className="mt-2 max-w-[220px] text-[13px] font-normal leading-snug text-white/90 sm:text-[14px]">
                  {column.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
