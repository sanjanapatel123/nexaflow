const features = [
  {
    number: "01",
    title: "Connect your tools",
    description:
      "Integrate the systems your team already uses without rebuilding your technology stack.",
  },
  {
    number: "02",
    title: "Automate repetitive work",
    description:
      "Replace manual handoffs with reliable workflows and intelligent decision support.",
  },
  {
    number: "03",
    title: "Measure what matters",
    description:
      "See performance, bottlenecks and opportunities from a single operational view.",
  },
];

export default function Workflow() {
  return (
    <section
      id="about"
      className="w-full bg-[var(--background)] px-6 py-20 sm:px-8 lg:px-9 lg:py-[68px]"
    >
      <div className="mx-auto max-w-[1840px]">
        {/* Section Heading */}
        <div>
          <p className="text-[19px] font-bold uppercase tracking-[-0.02em] text-[var(--purple)] sm:text-[19px]">
            Why Nexaflow
          </p>

          <h2 className="mt-4 max-w-[1250px] text-[35px] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--heading)] sm:text-[30px] lg:text-[20px] xl:text-[50px]">
            One platform. Less operational friction.
          </h2>

          <p className="mt-4 text-[23px] leading-[1.45] tracking-[-0.01em] text-[var(--text)] sm:text-[20px]">
            Bring fragmented workflows into one intelligent operating layer.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[75px] grid grid-cols-1 gap-7 md:grid-cols-3 lg:gap-[48px]">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group relative min-h-[255px] overflow-hidden rounded-[28px] bg-[var(--white)] px-[40px] py-[30px] shadow-[0_20px_45px_rgba(17,24,39,0.10)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(17,24,39,0.16)]"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--purple-pale)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60" />

              {/* Animated top line */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--purple)] transition-all duration-500 ease-out group-hover:w-full" />

              <div className="relative z-10">
                {/* Number */}
                <span className="block text-[35px] font-normal leading-none tracking-[-0.04em] text-[var(--purple)] transition-transform duration-500 group-hover:translate-x-1">
                  {feature.number}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-[24px] font-bold leading-[1.15] tracking-[-0.025em] text-[var(--heading)] transition-colors duration-300 group-hover:text-[var(--purple-dark)]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[430px] text-[18px] leading-[1.48] tracking-[-0.01em] text-[var(--text)]">
                  {feature.description}
                </p>
              </div>

              {/* Bottom hover accent */}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--purple-light)] transition-all duration-700 ease-out group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
