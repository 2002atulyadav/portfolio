import Reveal from "./Reveal";
import { jobs } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap split">
        <Reveal className="rail">
          <div className="eyebrow">Experience</div>
          <h2 className="font-display">
            Where I&apos;ve
            <br />
            Built
          </h2>
          <p>
            From enterprise platform engineering to the distributed systems behind global
            deployments.
          </p>
        </Reveal>

        <Reveal>
          <div className="timeline">
            {jobs.map((job, i) => (
              <div key={i} className={`job ${job.current ? "current" : ""}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-normal">
                      {job.company}
                    </h3>
                    <div className="mt-0.5 text-inksoft">{job.role}</div>
                  </div>
                  <div className="text-right text-[0.92rem] text-inkfaint">
                    {job.meta.map((m, j) => (
                      <div key={j}>{m}</div>
                    ))}
                    {job.current && (
                      <span className="mt-1.5 inline-block rounded-full border border-green/40 px-[0.6rem] py-[0.15rem] text-[0.7rem] uppercase tracking-[0.14em] text-green">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <ul className="bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="chips">
                  {job.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
