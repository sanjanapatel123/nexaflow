'use client'

const companies = [
  "vertex",
  "northstar",
  "Axiom",
  "MOTION",
  "LUMEN",
];

export default function TruetedBy() {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* Heading */}
      <div className="pt-13 text-center sm:pt-18">
        <h2 className="text-[19px] font-semibold uppercase tracking-[-0.02em] text-[#98A1B2] sm:text-[18px]">
          Trusted by modern teams
        </h2>
      </div>

      {/* Moving Logos */}
      <div className="relative mt-10 overflow-hidden pb-16 sm:mt-10 sm:pb-20">
        <div className="trusted-marquee flex w-max items-center">
          {/* First set */}
          <div className="flex shrink-0 items-center gap-32 px-16 sm:gap-44 sm:px-20 lg:gap-[220px] lg:px-24">
            {companies.map((company) => (
              <div
                key={`first-${company}`}
                className="shrink-0 whitespace-nowrap text-[30px] font-semibold tracking-[-0.03em] text-[#30415F] sm:text-[30px] lg:text-[28px]"
              >
                {company}
              </div>
            ))}
          </div>

          {/* Duplicate set for infinite loop */}
          <div
            aria-hidden="true"
            className="flex shrink-0 items-center gap-32 px-16 sm:gap-44 sm:px-20 lg:gap-[220px] lg:px-24"
          >
            {companies.map((company) => (
              <div
                key={`second-${company}`}
                className="shrink-0 whitespace-nowrap text-[30px] font-semibold tracking-[-0.03em] text-[#30415F] sm:text-[30px] lg:text-[28px]"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .trusted-marquee {
          animation: trusted-scroll 24s linear infinite;
        }

        .trusted-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes trusted-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .trusted-marquee {
            animation-duration: 18s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trusted-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}