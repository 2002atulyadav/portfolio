import Reveal from "./Reveal";
import { profile, competitiveProfiles } from "@/data/content";

const rows = [
  { lab: "Email", val: profile.email, href: `mailto:${profile.email}`, ext: false },
  { lab: "LinkedIn", val: "linkedin.com/in/atulyadav2002", href: profile.links.linkedin, ext: true },
  { lab: "GitHub", val: "github.com/2002atulyadav", href: profile.links.github, ext: true },
  { lab: "Twitter", val: "x.com/yAtulX", href: profile.links.twitter, ext: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow mb-6">Get in touch</div>
          <h2 className="font-display text-[clamp(3rem,9vw,7rem)] font-normal leading-[0.98] tracking-[-0.015em]">
            Let&apos;s build
            <br />
            something{" "}
            <em className="italic">
              meaningful<span className="text-rust">.</span>
            </em>
          </h2>
          <p className="my-8 max-w-[42ch] text-[1.1rem] text-inksoft">
            The fastest way to reach me is email or LinkedIn — I reply quickly. I&apos;m open to
            senior backend, platform, and distributed-systems roles.
          </p>
        </Reveal>

        <Reveal className="border-t border-line">
          {rows.map((r) => (
            <a
              key={r.lab}
              className="crow"
              href={r.href}
              {...(r.ext ? { target: "_blank", rel: "noopener" } : {})}
            >
              <span className="lab">{r.lab}</span>
              <span className="val">{r.val}</span>
              <span className="ar">↗</span>
            </a>
          ))}
        </Reveal>

        <Reveal>
          <div className="eyebrow my-[1.2rem] mt-14">Competitive Profiles</div>
          <div className="flex flex-wrap gap-[0.7rem]">
            {competitiveProfiles.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener"
                className="rounded-[10px] border border-line px-[1.1rem] py-[0.7rem] text-[0.92rem] text-inksoft transition-colors hover:border-rust"
              >
                <b className="font-semibold text-ink">{c.name}</b> · {c.detail}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
