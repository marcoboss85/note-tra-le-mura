# Checklist prima di andare online

**Apri questo file ogni volta che fai un deploy o pubblichi un nuovo sito.**

### Intanto (solo `*.vercel.app`, dominio dopo)

- Collega il repo su Vercel **oppure** da terminale: `npm run vercel:login` → `npm run vercel:link` → copia le variabili (o `vercel:sync-env` se usi `.env.local`) → `npm run vercel:deploy`.
- `NEXT_PUBLIC_SITE_URL`: **su Vercel non è obbligatorio** finché usi `*.vercel.app`: il codice usa già `VERCEL_URL` (Open Graph, `metadataBase`, sitemap, JSON-LD). Puoi comunque impostarla a mano se preferisci; con **dominio custom** conviene impostarla a `https://tuodominio.it` e rifare il deploy.
- **Google Search Console**: da fare quando l’URL pubblico è definitivo (dominio o scelta finale).

1. **Vercel** (o altro hosting) → *Project* → *Settings* → *Environment variables*  
   Copia da `.env.local` **le stesse** (stessi nomi, stessi valori):
   - `NEXT_PUBLIC_AIRBNB_LISTING_URL` — pulsante *Dicono di noi* / recensioni Airbnb
   - `AIRBNB_ICAL_URL` — calendario disponibilità (segreto, solo server)
   - `NEXT_PUBLIC_FACEBOOK_URL` — icona Facebook sotto la mappa (opzionale)
   - `NEXT_PUBLIC_INSTAGRAM_URL` — icona Instagram sotto la mappa (opzionale)

2. Seleziona almeno **Production** (e **Preview** se usi le anteprime). Salva.

3. **Rilancia il deploy** (o “Redeploy”): le variabili `NEXT_PUBLIC_*` entrano solo al *build*.

4. (Opzionale) `NEXT_PUBLIC_SITE_URL` = URL canonico pubblico (senza slash finale). Su Vercel senza questa variabile l’URL del deploy viene rilevato automaticamente; con dominio proprio impostala qui.

Dettagli e spiegazione: vedi i commenti in cima a `.env.example`.

### Dopo aver comprato il dominio (riprendi da qui)

1. **Registratore di domini** → imposta i nameserver o i record DNS che ti indica **Vercel** (*Project* → *Settings* → *Domains* → aggiungi il dominio e segui la guida).
2. Attendi che il dominio risulti **Valid** in Vercel (a volte da pochi minuti a qualche ora).
3. **Environment variables** → imposta `NEXT_PUBLIC_SITE_URL` = `https://tuodominio.it` (o `https://www.…` se è quello che userai come principale; **senza** slash finale, **un solo** URL canonico).
4. **Redeploy** in Production (le `NEXT_PUBLIC_*` valgono dal build in poi).
5. Apri il sito sul **nuovo dominio**: home, `/it`, `/en`, … — controlla che non resti il vecchio URL ovunque (anteprime social: opzionale, tool “sharing debugger”).
6. **Google Search Console**: nuova proprietà sull’URL definitivo → verifica → invia **sitemap** (`/sitemap.xml` sul tuo dominio).

Se riapri il progetto tra molto tempo: clone/pull, leggi ancora questo file e `.env.example`, poi ripeti solo i punti che mancano (di solito 3–6 dopo il dominio).
