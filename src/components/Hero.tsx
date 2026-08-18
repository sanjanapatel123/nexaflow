"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient relative isolate min-h-screen pt-14 pb-28 overflow-hidden"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[280px] bottom-[-320px] z-0 h-[760px] w-[760px] rounded-full bg-[var(--purple)] opacity-20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[220px] -top-[260px] z-0 h-[700px] w-[700px] rounded-full bg-[var(--purple-light)] opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1320px] items-center px-6 pb-16 pt-28 sm:px-8 lg:px-10">
        <div className="grid w-full items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left Content */}
          <div className="max-w-[650px]">
            {/* Eyebrow */}
            <div className="hero-eyebrow mb-6 flex items-center gap-3">
              <span className="font-[var(--font-family)] text-sm font-bold uppercase tracking-[0.14em] text-[var(--purple-soft)]">
                AI-POWERED OPERATIONS PLATFORM
              </span>
            </div>

            {/* Heading */}
            <h1 className="hero-title max-w-[650px] font-[var(--font-family)] text-5xl font-bold leading-[1.04] tracking-[-0.04em] text-[var(--white)] sm:text-6xl lg:text-[60px]">
              Turn complex work
              <br />
              into simple growth.
            </h1>

            {/* Description */}
            <p className="hero-description mt-7 max-w-[560px] font-[var(--font-family)] text-lg leading-[1.65] text-[var(--purple-pale)] sm:text-xl">
              NexaFlow connects your teams, data and workflows so your business
              can move faster with less effort.
            </p>

            {/* Actions */}
            <div className="hero-actions mt-9 flex flex-col gap-4 sm:flex-row">
              {/* Primary */}
              <Link
                href="#contact"
                className="group relative flex h-[54px] w-full items-center justify-center overflow-hidden rounded-full bg-[var(--white)] px-8 font-[var(--font-family)] text-[15px] font-semibold text-[var(--heading)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[170px]"
              >
                <span className="relative z-10">Start Free</span>

                {/* Shine */}
                <span className="pointer-events-none absolute -left-[120%] top-0 h-full w-[65%] skew-x-[-20deg] bg-[var(--purple-pale)]/70 transition-all duration-700 ease-out group-hover:left-[130%]" />
              </Link>

              {/* Secondary */}
              <Link
                href="#about"
                className="group flex h-[54px] w-full items-center justify-center whitespace-nowrap rounded-full border border-[var(--purple-soft)] px-8 font-[var(--font-family)] text-[15px] font-semibold text-[var(--white)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--white)] hover:bg-[var(--white)]/10 sm:w-[210px]"
              >
                See How It Works
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Product Preview */}
          <div className="hero-visual relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="overflow-hidden rounded-[30px] bg-[var(--white)] shadow-2xl">
              {/* Browser Top Bar */}
              <div className="flex h-[54px] items-center rounded-t-[30px] bg-[var(--gray-soft)] px-7">
                <div className="flex items-center gap-2.5">
                  <span className="h-[18px] w-[18px] rounded-full bg-[var(--text-muted)]/40" />
                  <span className="h-[18px] w-[18px] rounded-full bg-[var(--text-muted)]/40" />
                  <span className="h-[18px] w-[18px] rounded-full bg-[var(--text-muted)]/40" />
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="px-7 pb-3 pt-5 sm:px-8">
                {/* Header */}
                <div>
                  <h3 className="font-[var(--font-family)] text-[17px] font-bold leading-tight text-[var(--heading)]">
                    Operations Overview
                  </h3>

                  <p className="mt-2.5 font-[var(--font-family)] text-[14px] text-[var(--text)]">
                    Monday, August 17
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-7 grid grid-cols-3 gap-3">
                  {/* Active Workflows */}
                  <div className="rounded-[18px] bg-[var(--purple-pale)]/30 px-4 py-4">
                    <p className="font-[var(--font-family)] text-[14px] text-[var(--text)]">
                      Active workflows
                    </p>

                    <p className="mt-2.5 font-[var(--font-family)] text-[42px] font-bold leading-none tracking-tight text-[var(--purple-dark)]">
                      128
                    </p>
                  </div>

                  {/* Time Saved */}
                  <div className="rounded-[18px] bg-[var(--blue-soft)] px-4 py-4">
                    <p className="font-[var(--font-family)] text-[14px] text-[var(--text)]">
                      Time saved
                    </p>

                    <p className="mt-2.5 font-[var(--font-family)] text-[42px] font-bold leading-none tracking-tight text-[var(--blue-dark)]">
                      42%
                    </p>
                  </div>

                  {/* Tasks Automated */}
                  <div className="rounded-[18px] bg-[var(--green-soft)] px-4 py-4">
                    <p className="font-[var(--font-family)] text-[14px] text-[var(--text)]">
                      Tasks automated
                    </p>

                    <p className="mt-2.5 font-[var(--font-family)] text-[42px] font-bold leading-none tracking-tight text-[var(--green-dark)]">
                      3.8k
                    </p>
                  </div>
                </div>

                {/* Weekly Activity */}
                <div className="mt-7">
                  <h4 className="font-[var(--font-family)] text-[16px] font-bold text-[var(--heading)]">
                    Weekly activity
                  </h4>

                  {/* Chart */}
                  <div className="relative mt-3 h-[165px] w-full">
                    <svg
                      viewBox="0 0 520 190"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full overflow-visible"
                      aria-hidden="true"
                    >
                      <polyline
                        points="
            10,165
            58,125
            108,148
            158,58
            208,102
            258,18
            308,46
            358,0
            408,25
            458,-10
            510,8
          "
                        fill="none"
                        stroke="var(--purple)"
                        strokeWidth="5"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                      />
                    </svg>

                    <div className="absolute bottom-0 left-0 h-px w-full bg-[var(--border)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
