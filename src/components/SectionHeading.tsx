type Props = {
  title: string;
  subtitle?: string;
};

/**
 * Titolo di sezione centrato con sottotitolo e lineetta decorativa (prima proposta).
 */
export function SectionHeading({ title, subtitle }: Props) {
  return (
    <header className="mb-12 text-center md:mb-14">
      <h2 className="font-[var(--font-section)] text-[2.1rem] font-light uppercase tracking-[0.02em] text-[color:var(--brand-green-text)] md:text-[2.55rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-xl px-2 font-[var(--font-serif)] text-[17px] font-normal leading-snug tracking-normal text-[#534a42] md:text-lg">
          {subtitle}
        </p>
      ) : null}
      <div
        className="mx-auto mt-6 flex items-center justify-center gap-2.5"
        aria-hidden
      >
        <span className="h-px w-10 bg-[color:var(--brand-green-line)] md:w-14" />
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-green)] ring-2 ring-[color:var(--brand-green-line)]/50" />
        <span className="h-px w-10 bg-[color:var(--brand-green-line)] md:w-14" />
      </div>
    </header>
  );
}
