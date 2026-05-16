import Link from "next/link";

export type InlineTextLink = {
  label: string;
  href: string;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function InlineTextLinks({
  text,
  links,
}: {
  text: string;
  links?: InlineTextLink[];
}) {
  if (!links || links.length === 0) {
    return <>{text}</>;
  }

  const sortedLinks = [...links].sort((a, b) => b.label.length - a.label.length);
  const pattern = new RegExp(
    `(${sortedLinks.map((link) => escapeRegExp(link.label)).join("|")})`,
    "g",
  );

  return (
    <>
      {text.split(pattern).map((part, index) => {
        const link = sortedLinks.find((item) => item.label === part);
        if (!link) {
          return part;
        }
        const className =
          "font-medium text-[#243828] underline decoration-[#9ab09a] underline-offset-4 transition hover:decoration-[#243828]";
        if (link.href.startsWith("/")) {
          return (
            <Link key={`${part}-${index}`} href={link.href} className={className}>
              {part}
            </Link>
          );
        }
        return (
          <a
            key={`${part}-${index}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {part}
          </a>
        );
      })}
    </>
  );
}
