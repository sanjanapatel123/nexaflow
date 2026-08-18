"use client";
export default function CTA() {
  return (
    <section
      id="contact"
      className="mx-4 mt-18 w-auto overflow-hidden rounded-[34px] hero-gradient px-5 py-10 sm:mx-6 sm:px-8 sm:py-12 lg:mx-10 lg:px-10 lg:py-[52px]"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
        <h2 className="max-w-[950px] text-[42px] font-bold leading-[1.12] tracking-[-0.035em] text-[var(--white)] sm:text-[45px] lg:text-[46px]">
          Ready to simplify the way
          <br className="hidden sm:block" />
          your team works?
        </h2>

        <p className="mt-7 text-[20px] leading-[1.4] text-[var(--purple-pale)] sm:text-[20px]">
          See what NexaFlow can do for your organization.
        </p>

        <a
          href="#"
          className="group relative mt-12 flex h-[72px] w-full max-w-[270px] items-center justify-center overflow-hidden rounded-full bg-[var(--white)] text-[20px] font-bold text-[var(--heading)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.20)] sm:mt-14"
        >
          <span className="relative z-10">Book a Demo</span>

          {/* Premium shine */}
          <span className="absolute -left-[70%] top-0 h-full w-[40%] skew-x-[-20deg] bg-[var(--purple-pale)]/60 transition-all duration-700 ease-out group-hover:left-[125%]" />
        </a>
      </div>
    </section>
  );
}
