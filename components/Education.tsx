import Reveal from "./Reveal";
import { education, schoolEducation } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap split">
        <Reveal className="rail">
          <div className="eyebrow">Education</div>
          <h2 className="font-display">
            Where I&apos;ve
            <br />
            Learned
          </h2>
          <p>
            Engineering fundamentals from one of India&apos;s premier institutions — the
            foundation for everything I build.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-[14px] border border-line bg-card p-[clamp(1.5rem,3vw,2.4rem)]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-normal">
                  {education.school}
                </h3>
                <div className="mt-1 text-inksoft">{education.degree}</div>
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                <span className="pill accent">{education.cgpa}</span>
                <span className="pill">{education.years}</span>
              </div>
            </div>

            <hr className="my-[1.6rem] border-0 bg-line" style={{ height: 1 }} />

            <ul className="bullets">
              {education.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>

            <div className="micro-label">Relevant Coursework</div>
            <div className="chips">
              {education.coursework.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

      </div>

      <div className="wrap mt-6">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {schoolEducation.map((s) => (
              <div
                key={s.level}
                className="rounded-[14px] border border-line bg-card p-[clamp(1.2rem,2.5vw,1.8rem)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="font-display text-[clamp(1.1rem,2vw,1.4rem)] font-normal">
                      {s.school}
                    </h4>
                    <div className="mt-1 text-sm text-inksoft">{s.location}</div>
                  </div>
                  <span className="pill accent">{s.score}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="chip">{s.level}</span>
                  <span className="chip">{s.board}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
