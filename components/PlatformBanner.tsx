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
          <h2 className="text-[40px] font-normal leading-[1.1]">
            One Platform.
            <span className="mt-1 block font-bold">
              Complete Investment
              <br />
              Control
            </span>
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
                <h4 className="text-[28px] font-bold leading-tight">
                  {column.title[0]}
                  <br />
                  {column.title[1]}
                </h4>
                <p className="mt-2 max-w-[220px] text-[18px] font-normal leading-snug text-white/90">
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
