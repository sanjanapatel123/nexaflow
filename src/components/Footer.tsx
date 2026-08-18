"use client";
const footerColumns = [
  {
    title: "PRODUCT",
    links: ["Platform", "Solutions", "Pricing"],
  },
  {
    title: "COMPANY",
    links: ["About", "Careers", "Contact"],
  },
  {
    title: "RESOURCES",
    links: ["Blog", "Guides", "Help Center"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--darkest)] mt-18 px-4 pt-16 pb-14 sm:px-6 sm:pt-16 lg:px-[15px] lg:pt-16 lg:pb-[58px]">
      {/* Main Footer */}
      <div className="grid grid-cols-1 gap-y-12 pb-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:pb-28">
        {/* Brand */}
        <div>
          <h2 className="text-[30px] font-bold leading-none tracking-[-0.035em] text-[var(--white)]">
            NEXAFLOW
          </h2>

          <p className="mt-8 text-[16px] leading-[1.4] text-[var(--text-muted)]">
            The operating layer for modern teams.
          </p>
        </div>

        {footerColumns.map((column, index) => (
          <div key={column.title} className={index === 0 ? "lg:ml-14" : ""}>
            <h3 className="text-[17px] font-bold leading-none text-[var(--white)]">
              {column.title}
            </h3>

            <nav className="mt-8 flex flex-col gap-6">
              {column.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="w-fit text-[16px] leading-none text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--white)]"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-5 border-t border-[var(--gray-dark)] py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[15px] text-[var(--text-muted)]">
          © 2026 NexaFlow. Design exercise.
        </p>

        <div className="flex items-center gap-2 text-[15px] text-[var(--text-muted)]">
          <a
            href="#"
            className="transition-colors duration-300 hover:text-[var(--white)]"
          >
            Privacy
          </a>

          <span>·</span>

          <a
            href="#"
            className="transition-colors duration-300 hover:text-[var(--white)]"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
