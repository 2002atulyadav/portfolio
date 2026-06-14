export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-wrap flex-wrap justify-between gap-4 border-t border-line px-[var(--pad)] py-10 text-[0.88rem] text-inkfaint">
      <span className="font-display text-[1.1rem]">AY</span>
      <span>© {new Date().getFullYear()} Atul Yadav — Built in Pune, India</span>
      <span>Designed for scale.</span>
    </footer>
  );
}
