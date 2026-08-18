'use client'
const platformFeatures = [
  {
    title: "Workflow automation",
    description:
      "Build repeatable workflows with triggers, conditions and actions.",
    type: "workflow",
  },
  {
    title: "Intelligent insights",
    description:
      "Turn operational data into clear actions with real-time dashboards.",
    type: "insights",
  },
];

export default function Features() {
  return (
    <section
      id="services"
      className="w-full overflow-hidden bg-[var(--darkest)] px-5 py-16 sm:px-7 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-[1840px]">
        {/* Heading */}
        <div>
          <p className="text-[18px] font-bold uppercase tracking-[-0.02em] text-[var(--purple-light)]">
            The Platform
          </p>

          <h2 className="mt-5 max-w-[1150px] text-[40px] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--white)] sm:text-[48px] lg:text-[50px]">
            Designed for teams that move fast.
          </h2>

          <p className="mt-5 text-[19px] leading-[1.45] tracking-[-0.01em] text-[var(--text-muted)] sm:text-[21px]">
            Everything you need to orchestrate modern operations.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {platformFeatures.map((feature) => (
            <article
              key={feature.title}
              className="group relative min-h-[330px] overflow-hidden rounded-[30px] bg-[var(--dark-card)] px-8 py-9 transition-transform duration-500 ease-out hover:-translate-y-1 sm:px-10 sm:py-10 lg:min-h-[330px]"
            >
              {/* Subtle card glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[var(--purple)] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-15" />

              <div className="relative z-10">
                <h3 className="text-[27px] font-bold leading-[1.15] tracking-[-0.025em] text-[var(--white)] sm:text-[29px]">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-[590px] text-[18px] leading-[1.5] tracking-[-0.01em] text-[var(--text-muted)] sm:text-[19px]">
                  {feature.description}
                </p>

                {/* Visual */}
                {feature.type === "workflow" ? (
                  <div className="mt-8 flex h-[120px] items-center rounded-[17px] bg-[var(--darkest)] px-8 sm:mt-12 sm:px-10">
                    <div className="flex w-full items-center justify-between">
                      <WorkflowNode className="bg-[var(--purple-light)]" />

                      <WorkflowLine />

                      <WorkflowNode className="bg-[var(--blue)]" />

                      <WorkflowLine />

                      <WorkflowNode className="bg-[var(--green)]" />

                      <WorkflowLine />

                      <WorkflowNode className="bg-[var(--yellow)]" />
                    </div>
                  </div>
                ) : (
                  <div className="mt-14 flex h-[120px] items-center rounded-[17px] bg-[var(--darkest)] px-8 sm:mt-12 sm:px-10">
                    <div className="flex w-full items-end gap-5 sm:gap-6">
                      <InsightBar height="32px" delay="0s" />
                      <InsightBar height="52px" delay="0.12s" />
                      <InsightBar height="73px" delay="0.24s" />
                      <InsightBar height="102px" delay="0.36s" />

                      <span className="ml-4 whitespace-nowrap text-[16px] font-medium text-[var(--white)] sm:ml-7 sm:text-[17px]">
                        +28% efficiency
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .workflow-node {
          animation: workflow-pulse 3s ease-in-out infinite;
        }

        .workflow-line {
          animation: workflow-line 3s ease-in-out infinite;
        }

        @keyframes workflow-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.9;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes workflow-line {
          0%,
          100% {
            opacity: 0.55;
          }

          50% {
            opacity: 1;
          }
        }

        .insight-bar {
          transform-origin: bottom;
          animation: insight-grow 3s ease-in-out infinite;
        }

        @keyframes insight-grow {
          0%,
          100% {
            transform: scaleY(0.94);
          }

          50% {
            transform: scaleY(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .workflow-node,
          .workflow-line,
          .insight-bar {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

function WorkflowNode({ className }: { className: string }) {
  return (
    <span
      className={`workflow-node block h-[34px] w-[34px] shrink-0 rounded-full ${className}`}
    />
  );
}

function WorkflowLine() {
  return (
    <span className="workflow-line mx-3 h-[4px] flex-1 bg-[var(--gray-dark)] sm:mx-5" />
  );
}

function InsightBar({
  height,
  delay,
}: {
  height: string;
  delay: string;
}) {
  return (
    <span
      className="insight-bar block w-[34px] shrink-0 rounded-[4px] bg-[var(--purple-light)]"
      style={{
        height,
        animationDelay: delay,
      }}
    />
  );
}