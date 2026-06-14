import Reveal from "./Reveal";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" className="pb-[clamp(3rem,7vw,6rem)] pt-[clamp(2rem,6vw,4.5rem)]">
      <div className="wrap">
        {profile.openToWork && (
          <Reveal className="flex justify-end">
            <div className="text-right">
              <span className="inline-flex items-center gap-2 text-[0.95rem] text-ink">
                <span className="dot relative h-2 w-2 rounded-full bg-green" />
                <span className="font-medium text-green">Open</span>&nbsp;to opportunities
              </span>
              <div className="mt-1 text-[0.92rem] text-inkfaint">{profile.location}</div>
            </div>
          </Reveal>
        )}

        <Reveal
          as="h1"
          className="mt-[clamp(1.5rem,4vw,2.5rem)] font-display text-[clamp(4rem,13.5vw,12rem)] font-normal italic leading-[0.9] tracking-[-0.01em]"
        >
          <span className="block">{profile.name.first}</span>
          <span className="block">{profile.name.last}</span>
        </Reveal>

        <Reveal className="mt-[clamp(2rem,4vw,3rem)] flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[34ch]">
            <div className="eyebrow mb-4">{profile.role}</div>
            <p className="font-display text-[clamp(1.3rem,2.2vw,1.7rem)] italic leading-[1.35] text-ink">
              {profile.tagline}
            </p>
          </div>
          <div className="flex gap-[1.6rem] text-base">
            <a className="text-inksoft transition-colors hover:text-rust" href={profile.links.github} target="_blank" rel="noopener">GitHub</a>
            <a className="text-inksoft transition-colors hover:text-rust" href={profile.links.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            <a className="text-inksoft transition-colors hover:text-rust" href={`mailto:${profile.email}`}>Email</a>
            <a className="text-inksoft transition-colors hover:text-rust" href={profile.links.twitter} target="_blank" rel="noopener">Twitter</a>
          </div>
        </Reveal>
      </div>
      <style>{`
        .dot { box-shadow: 0 0 0 0 rgba(63,143,91,.45); animation: pulse 2.4s infinite; }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(63,143,91,.45); }
          70% { box-shadow: 0 0 0 7px rgba(63,143,91,0); }
          100% { box-shadow: 0 0 0 0 rgba(63,143,91,0); }
        }
        @media (prefers-reduced-motion: reduce) { .dot { animation: none; } }
      `}</style>
    </section>
  );
}
