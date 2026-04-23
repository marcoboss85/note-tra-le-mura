/**
 * Sincronizza su Vercel (production, preview, development) le variabili lette da `.env.local`.
 * Prerequisiti: `npx vercel login` e `npx vercel link` (cartella `.vercel/`).
 * Uso: node scripts/vercel-sync-env.cjs
 * Opz.: VERCEL_ORG_ID / project già in .vercel
 */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.join(__dirname, "..");
const envPath = path.join(root, ".env.local");

function parseEnvFile(content) {
  const env = {};
  for (const line of content.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    if (k && v) env[k] = v;
  }
  return env;
}

/** Nome, sensibile = crittato in dashboard */
const VARS = [
  { name: "NEXT_PUBLIC_AIRBNB_LISTING_URL", sensitive: false },
  { name: "AIRBNB_ICAL_URL", sensitive: true },
  { name: "NEXT_PUBLIC_SITE_URL", sensitive: false },
  { name: "NEXT_PUBLIC_CIN", sensitive: false },
  { name: "NEXT_PUBLIC_CIR", sensitive: false },
  { name: "NEXT_PUBLIC_PROPERTY_ADDRESS", sensitive: false },
  { name: "NEXT_PUBLIC_OPERATOR_NAME", sensitive: false },
  { name: "NEXT_PUBLIC_OPERATOR_VAT_OR_CF", sensitive: false },
  { name: "NEXT_PUBLIC_HOME_COMICS_BANNER", sensitive: false },
  { name: "NEXT_PUBLIC_FACEBOOK_URL", sensitive: false },
  { name: "NEXT_PUBLIC_INSTAGRAM_URL", sensitive: false },
];

const targetsAll = ["production", "preview", "development"];
/** Per sensitive, Vercel non ammette l’ambiente `development` (regola piattaforma). */
const targetsSensitive = ["production", "preview"];

const vercelEntry = path.join(
  root,
  "node_modules",
  "vercel",
  "dist",
  "vc.js",
);

function vercel(args, stdin) {
  if (!fs.existsSync(vercelEntry)) {
    console.error("Esegui: npm install (manca la CLI Vercel in devDependencies).");
    return false;
  }
  const r = spawnSync(process.execPath, [vercelEntry, ...args], {
    cwd: root,
    input: stdin,
    stdio: stdin != null ? ["pipe", "inherit", "inherit"] : "inherit",
    env: process.env,
  });
  if (r.error) {
    console.error(r.error.message);
    return false;
  }
  return r.status === 0;
}

if (!fs.existsSync(path.join(root, ".vercel", "project.json"))) {
  console.error(
    "Manca la cartella .vercel (progetto non collegato). Esegui in questa directory:\n" +
    "  npm run vercel:login    (una volta)\n" +
    "  npm run vercel:link     (collega a un progetto Vercel o creane uno nuovo)\n" +
    "  npm run vercel:sync-env (copia le variabili da .env.local su Vercel)\n" +
    "  npm run vercel:deploy  \n",
  );
  process.exit(1);
}

if (!fs.existsSync(envPath)) {
  console.error("Manca .env.local — crea almeno le variabili necessarie.\n");
  process.exit(1);
}

const env = parseEnvFile(fs.readFileSync(envPath, "utf8"));
let n = 0;
for (const { name, sensitive } of VARS) {
  const value = env[name];
  if (!value) continue;
  const targets = sensitive ? targetsSensitive : targetsAll;
  for (const t of targets) {
    /** CLI 48+ non usa più `--value`; il valore va passato su stdin. */
    const base = ["env", "add", name, t, "--force"];
    if (sensitive) base.push("--sensitive");
    console.log(`\n→`, name, t);
    if (!vercel(base, value)) {
      process.exit(1);
    }
    n += 1;
  }
}
console.log(
  `\nSincronizzate ${n} coppie ambiente/variabile. Prossimo: npm run vercel:deploy\n`,
);
