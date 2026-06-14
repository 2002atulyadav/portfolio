import Image from "next/image";
import Reveal from "./Reveal";
import { stats, about, profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap split">
        <Reveal className="rail">
          <div className="eyebrow">About</div>
          <h2 className="max-w-[18ch] font-display text-[clamp(2rem,4.4vw,3.5rem)] font-normal leading-[1.06] tracking-[-0.01em]">
            I architect, build and scale distributed backend systems for global{" "}
            <span className="text-rust">enterprises.</span>
          </h2>
          <div className="mt-11 grid max-w-[30rem] grid-cols-2 gap-x-10 gap-y-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[clamp(2.4rem,4.5vw,3.4rem)] font-normal leading-none">
                  {s.num}
                </div>
                <div className="mt-2 font-medium">{s.label}</div>
                <div className="text-[0.88rem] text-inkfaint">{s.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-7">
          <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-md shadow-sm">
            <Image
              src={profile.photo}
              alt={`${profile.name.first} ${profile.name.last}`}
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
          </div>
          <div>
            {about.map((p, i) => (
              <p key={i} className="mb-[1.1rem] text-[1.06rem] text-inksoft">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
