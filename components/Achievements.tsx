import Reveal from "./Reveal";
import { achievements } from "@/data/content";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="wrap split">
        <Reveal className="rail">
          <div className="eyebrow">Recognition</div>
          <h2 className="font-display">
            Beyond the
            <br />
            résumé
          </h2>
          <p>
            Competitive programming, scholarships, and a record of being a consistent top
            performer.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <div
                key={i}
                className={`flex items-baseline gap-[1.2rem] border-t border-line py-[1.6rem] ${
                  i % 2 === 0 ? "sm:border-r sm:pr-10" : "sm:pl-10"
                }`}
              >
                <span className="min-w-fit font-display text-[1.7rem] leading-none text-rust">
                  {a.big}
                </span>
                <span>
                  <strong className="block font-semibold">{a.title}</strong>
                  <span className="text-[0.95rem] text-inksoft">{a.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
