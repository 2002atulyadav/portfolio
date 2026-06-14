import Reveal from "./Reveal";
import { skillGroups, languages } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap split">
        <Reveal className="rail">
          <div className="eyebrow">Stack Topology</div>
          <h2 className="font-display">
            Technical
            <br />
            Architecture
          </h2>
          <p>
            Backend depth across the full path — from API surface to event streams, caches,
            and the infrastructure underneath.
          </p>
          <div className="micro-label">Languages</div>
          <div className="chips">
            {languages.map((l) => (
              <span key={l} className="chip" style={{ fontSize: "0.9rem" }}>
                {l}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          {skillGroups.map((g) => (
            <div key={g.name} className="mb-[2.4rem]">
              <div className="mb-4 flex items-center gap-[0.6rem]">
                <span
                  className="h-[11px] w-[11px] rounded-[3px]"
                  style={{ background: g.color }}
                />
                <span className="text-[1.05rem] font-semibold">{g.name}</span>
                <span className="h-px flex-1 bg-line" />
                <span className="text-[0.85rem] text-inkfaint">{g.items.length}</span>
              </div>
              <div className="chips">
                {g.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
