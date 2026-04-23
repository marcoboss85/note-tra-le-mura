# Checklist prima di andare online

**Apri questo file ogni volta che fai un deploy o pubblichi un nuovo sito.**

1. **Vercel** (o altro hosting) → *Project* → *Settings* → *Environment variables*  
   Copia da `.env.local` **le stesse** (stessi nomi, stessi valori):
   - `NEXT_PUBLIC_AIRBNB_LISTING_URL` — pulsante *Dicono di noi* / recensioni Airbnb
   - `AIRBNB_ICAL_URL` — calendario disponibilità (segreto, solo server)
   - `NEXT_PUBLIC_FACEBOOK_URL` — icona Facebook sotto la mappa (opzionale)
   - `NEXT_PUBLIC_INSTAGRAM_URL` — icona Instagram sotto la mappa (opzionale)

2. Seleziona almeno **Production** (e **Preview** se usi le anteprime). Salva.

3. **Rilancia il deploy** (o “Redeploy”): le variabili `NEXT_PUBLIC_*` entrano solo al *build*.

4. (Opzionale) `NEXT_PUBLIC_SITE_URL` = `https://tuodominio.it` (senza slash finale) per Open Graph / link assoluti.

Dettagli e spiegazione: vedi i commenti in cima a `.env.example`.
