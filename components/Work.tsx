import Reveal from "./Reveal";
import { projects, sideProjects, type DiagramRow } from "@/data/content";

const ARROWS = new Set(["→", "↓", "·", "←", "↑"]);

function Diagram({ label, rows }: { label: string; rows: DiagramRow[] }) {
  return (
    <div className="diagram">
      <div className="dlabel">{label}</div>
      {rows.map((row, i) => (
        <div key={i} className="drow">
          {row.nodes.map((n, j) =>
            ARROWS.has(n.label) ? (
              <span key={j} className="arrow">
                {n.label}
              </span>
            ) : (
              <span key={j} className={`node ${n.hl ? "hl" : ""}`}>
                {n.label}
              </span>
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow mb-3">Selected Work</div>
            <h2 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] font-normal leading-none">
              Systems &amp; Projects
            </h2>
          </div>
          <div className="font-display text-[1.1rem] text-inkfaint">
            Case studies from production
          </div>
        </Reveal>

        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            className="grid grid-cols-1 items-center gap-[clamp(1.6rem,4vw,3.5rem)] border-t border-line py-[clamp(2rem,4vw,3.2rem)] md:grid-cols-2"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              {p.media ? (
                <div className="overflow-hidden rounded-[14px] shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.media}
                    alt={`${p.title} — architecture workflow`}
                    className="block w-full"
                    loading="lazy"
                  />
                </div>
              ) : (
                <Diagram label={p.diagramLabel} rows={p.diagram} />
              )}
            </div>
            <div>
              <div className="eyebrow mb-[0.9rem]">{p.kind}</div>
              <h3 className="font-display text-[clamp(1.7rem,3.2vw,2.6rem)] font-normal leading-[1.05]">
                {p.title}
              </h3>
              <p className="my-[1rem] text-[1.04rem] text-inksoft">{p.description}</p>
              <div className="mb-[1.2rem] flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-rust/[0.09] px-[0.8rem] py-[0.32rem] text-[0.82rem] font-medium text-rust"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="chips mb-[1.3rem]">
                {p.tech.map((t) => (
                  <span key={t} className="chip" style={{ fontSize: "0.82rem" }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-[0.95rem] italic text-inkfaint">{p.context}</div>
            </div>
          </Reveal>
        ))}

        <Reveal className="mt-12 grid grid-cols-1 gap-[1.4rem] md:grid-cols-2">
          {sideProjects.map((s) => (
            <div
              key={s.title}
              className="rounded-[14px] border border-line bg-card p-[1.6rem] transition-transform duration-300 hover:-translate-y-[3px] hover:shadow-lg"
            >
              <div className="eyebrow" style={{ fontSize: "0.66rem" }}>
                {s.kind}
              </div>
              <h4 className="my-[0.55rem] font-display text-[1.45rem] font-normal">
                {s.title}
              </h4>
              <p className="mb-4 text-[0.96rem] text-inksoft">{s.description}</p>
              <div className="flex items-center justify-between">
                <span className="chip">{s.tag}</span>
                <a
                  className="text-[0.9rem] text-rust"
                  href={s.repo}
                  target="_blank"
                  rel="noopener"
                >
                  View repo ↗
                </a>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
