import type { ServiceAmenityIconId } from "@/i18n/dictionaries";

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg" as const,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6 shrink-0 text-[#2f4a38]",
  "aria-hidden": true as const,
};

/**
 * Icone lineari per l’elenco Servizi in home (stile coerente con il verde del sito).
 */
export function ServiceAmenityIcon({ id }: { id: ServiceAmenityIconId }) {
  switch (id) {
    case "checkIn":
      return (
        <svg {...svgProps}>
          {/* Chiave inclinata: arco + foro, asta e taglio (stile “icon” moderno) */}
          <g transform="translate(12 12) rotate(-36) translate(-12 -12)">
            <circle cx="9.35" cy="12" r="3.2" />
            <circle cx="9.35" cy="12" r="1.1" />
            <path d="M12.45 12h6.35" />
            <path d="M18.8 11.35h3.55v.8h-1.4v.7h1.4v.8h-3.55v-2.3z" />
          </g>
        </svg>
      );
    case "wifi":
      return (
        <svg {...svgProps}>
          <path d="M5 12.55a11 11 0 0114.08 0" />
          <path d="M8.53 16.11a6 6 0 016.95 0" />
          <path d="M12 20h.01" />
        </svg>
      );
    case "tv":
      return (
        <svg {...svgProps}>
          <path d="M6 4.5h12A2.25 2.25 0 0120.25 6.75v7.5A2.25 2.25 0 0118 16.5H6a2.25 2.25 0 01-2.25-2.25v-7.5A2.25 2.25 0 016 4.5z" />
          <path d="M9 19.5h6M12 16.5v3" />
        </svg>
      );
    case "plates":
      return (
        <svg {...svgProps}>
          {/* Un piatto (vista dall’alto) con forchetta e cucchiaio */}
          <circle cx="12" cy="12" r="4.05" />
          <path d="M5.1 18.25V11.25M3.8 8.5l1.3 2.75M5.1 11.25V8.35M6.4 8.5l-1.3 2.75" />
          <ellipse cx="18.45" cy="8.2" rx="1.35" ry="1.6" />
          <path d="M18.45 9.75V18.25" />
        </svg>
      );
    case "oven":
      return (
        <svg {...svgProps}>
          {/* Forno elettrico: comandi, sportello, vetro, maniglia */}
          <path d="M5.5 5.25h13V19H5.5V5.25z" />
          <path d="M5.5 9.15h13" />
          <path d="M7.35 7.1h2.15M11.2 7.1h2.15M15.05 7.1h2.15" />
          <path d="M7.15 10.65h9.7v7.9h-9.7v-7.9z" />
          <path d="M8.2 11.65h7.6v5.9h-7.6v-5.9z" />
          <path d="M7.15 16.35h9.7" />
        </svg>
      );
    case "dishwasher":
      return (
        <svg {...svgProps}>
          {/* Frontale con pannello comandi e sportello / griglie */}
          <path d="M6 5.25h12V19H6V5.25z" />
          <path d="M6 8.35h12" />
          <path d="M7.75 10.4h8.5v7.35h-8.5V10.4z" />
          <path d="M9 13h6M9 15.75h6" />
          <path d="M15.25 6.35h2M15.25 7.35h2" />
        </svg>
      );
    case "washer":
      return (
        <svg {...svgProps}>
          {/* Lavatrice: oblò + manopole */}
          <path d="M5.5 5h13V19H5.5V5z" />
          <path d="M5.5 8.35h13" />
          <circle cx="12" cy="14.5" r="3.35" />
          <circle cx="8.35" cy="6.75" r="0.85" />
          <path d="M10.5 6.75h4.5" />
        </svg>
      );
    case "dryer":
      return (
        <svg {...svgProps}>
          {/* Asciugatrice: oblò + onde calore */}
          <path d="M5.5 5h13V19H5.5V5z" />
          <path d="M5.5 8.35h13" />
          <circle cx="12" cy="14.5" r="3.35" />
          <path d="M16.75 5.6q.45.65.9 0t.9 0M16.75 7.1q.45.65.9 0t.9 0M16.75 8.6q.45.65.9 0t.9 0" />
        </svg>
      );
    case "rooms":
      return (
        <svg {...svgProps}>
          {/* Letto in profilo: testiera, cuscino, materasso, piedini */}
          <path d="M3.75 6.75V18.5" />
          <path d="M5.5 10.5q3-1.35 6.25 0v3.5H5.5v-3.5z" />
          <path d="M3.75 14h15.75v4.25H3.75V14z" />
          <path d="M5.25 20.25V18.5M18 20.25V18.5" />
        </svg>
      );
    case "stairs":
      return (
        <svg {...svgProps}>
          <path d="M4 20h4v-4h4v-4h4V8h4V4" />
        </svg>
      );
    case "linens":
      return (
        <svg {...svgProps}>
          {/* Asciugamano: astina, corpo con piega in alto, frangia */}
          <path d="M6 8.75h12" />
          <path d="M7.5 9.5Q12 8.25 16.5 9.5V17.25a1.25 1.25 0 01-1.25 1.25H8.75a1.25 1.25 0 01-1.25-1.25V9.5z" />
          <path d="M8.15 18.5v1.2M9.9 18.5v1.2M11.65 18.5v1.2M13.4 18.5v1.2M15.15 18.5v1.2" />
        </svg>
      );
    case "tips":
      return (
        <svg {...svgProps}>
          {/* Vino ~metà coppa (sotto al tratto del vetro) */}
          <path
            fill="currentColor"
            fillOpacity={0.38}
            stroke="none"
            d="M10.15 8.45Q12 8.18 13.85 8.45L12 11.28 10.15 8.45z"
          />
          {/* Calice: bordo, coppa, stelo, piede */}
          <path d="M8.5 5.25h7c0 4.05-1.45 6.05-3.5 6.1-2.05-.05-3.5-2.05-3.5-6.1z" />
          <path d="M12 11.35V17.6" />
          <path d="M8.75 18.35q3.25 1 6.5 0" />
        </svg>
      );
    case "support":
      return (
        <svg {...svgProps}>
          <path d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337L5.05 21l1.3-3.72A8.22 8.22 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      );
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}
