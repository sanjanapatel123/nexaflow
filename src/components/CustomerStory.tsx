'use client'

export default function CustomerStory() {
  return (
    <section
      id="customer-story"
      className="w-full overflow-hidden bg-[var(--purple-extralight)] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[72px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
        {/* Label */}
        <p className="text-[18px] font-bold uppercase tracking-[-0.0em] text-[var(--purple)] sm:text-[19px]">
          Customer Story
        </p>

        {/* Quote */}
        <blockquote className="mt-8 max-w-[950px] text-[30px] font-bold leading-[1.2] tracking-[-0.035em] text-[var(--heading)] transition-transform duration-500 hover:scale-[1.01] sm:text-[40px] lg:text-[42px]">
          “We reduced operational overhead
          <br className="hidden sm:block" />
          and finally got one source of truth.”
        </blockquote>

        {/* Author */}
        <p className="mt-8 text-[18px] leading-[1.4] text-[var(--text)] sm:text-[17px]">
          Sarah Chen · COO, Northstar
        </p>

        {/* Stat */}
        <div className="mt-8">
          <p className="text-[60px] font-bold leading-none tracking-[-0.04em] text-[var(--purple)] sm:text-[68px]">
            41%
          </p>

          <p className="mt-4 text-[17px] leading-[1.4] text-[var(--text)] sm:text-[16px]">
            less time spent on manual processes
          </p>
        </div>
      </div>
    </section>
  );
}
