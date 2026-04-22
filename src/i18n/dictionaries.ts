import type { Locale } from "./config";

export type RoomSlug =
  | "soggiorno"
  | "cucina"
  | "camera-da-letto-1"
  | "camera-da-letto-2"
  | "bagni"
  | "esterno";

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    imageAlt: string;
    kicker: string;
    brand: string;
    /** Una riga sotto il titolo: posizione nel centro storico. */
    location: string;
    subtitle: string;
    /** Testo visibile sul pulsante (accanto al logo WhatsApp). */
    whatsapp: string;
    /** Etichetta accessibile sul pulsante hero. */
    whatsappAria: string;
    gallery: string;
  };
  gallery: {
    heading: string;
    sub: string;
    photoCount: string;
    roomPhotosIntro: string;
    enter: string;
    coverAltSuffix: string;
  };
  /** Calendario disponibilità (feed iCal Airbnb, lato server). */
  availability: {
    heading: string;
    legendFree: string;
    legendBusy: string;
    disclaimer: string;
    notConfigured: string;
    loadError: string;
    /** Etichetta accessibile sul blocco calendario. */
    widgetAria: string;
    /** Mese + anno (es. aprile 2026) — {m} = nome mese lungo, {y} = anno. */
    monthCaption: string;
    /** Pulsante calendario: finestra precedente (1 o 2 mesi). */
    calendarPrevAria: string;
    calendarNextAria: string;
    /** Suggerimento swipe su schermi piccoli. */
    calendarSwipeHint: string;
  };
  rooms: Record<RoomSlug, string>;
  story: {
    heading: string;
    body: string;
  };
  services: {
    heading: string;
    items: string[];
  };
  contacts: {
    heading: string;
    body: string;
    /** Etichetta accessibile sul link email (senza testo visibile accanto all’icona). */
    emailLinkAria: string;
    /** Oggetto precompilato nel client di posta (mailto). */
    mailSubject: string;
    /** Prime righe del corpo email (mailto); l’ospite completa il messaggio. */
    mailBodyIntro: string;
    whatsapp: string;
    whatsappAria: string;
  };
  /** CIN / indirizzo e link norme — piè di pagina (fine contenuto). */
  legal: {
    widgetAria: string;
    ownerLabel: string;
    pending: string;
    linkPrivacy: string;
    linkCookies: string;
  };
  privacy: {
    title: string;
    backToHome: string;
    sections: { heading: string; body: string }[];
  };
  cookies: {
    title: string;
    backToHome: string;
    sections: { heading: string; body: string }[];
  };
  /** Banner e pannello preferenze cookie (consenso informato). */
  cookieBanner: {
    barAria: string;
    message: string;
    accept: string;
    preferences: string;
    policyLink: string;
    panelTitle: string;
    panelClose: string;
    necessaryTitle: string;
    necessaryDesc: string;
    optionalIntro: string;
    optionalNone: string;
    savePreferences: string;
  };
  /** Etichetta accessibile sul pulsante WhatsApp fisso. */
  fabWhatsappAria: string;
  galleryPage: {
    back: string;
    photoAltSuffix: string;
  };
  whatsappMessage: string;
};

const brand = "Note tra le Mura";

export const dictionaries: Record<Locale, Messages> = {
  it: {
    meta: {
      title: `${brand} | Appartamento a Lucca`,
      description:
        "Appartamento di charme nel cuore di Lucca: comfort contemporaneo, dettagli curati e la magia del centro storico tra le mura.",
    },
    hero: {
      imageAlt: "Lucca, torri e tetti del centro storico",
      kicker: "Benvenuto a Lucca",
      brand,
      location:
        "Nel centro storico di Lucca, dentro le mura rinascimentali.",
      subtitle:
        "Un rifugio elegante tra le mura rinascimentali: luce calda, materiali naturali e l’atmosfera autentica del centro.",
      whatsapp: "Contattaci",
      whatsappAria: "Vai alla sezione Contatti",
      gallery: "Scopri la gallery",
    },
    gallery: {
      heading: "Gallery",
      sub: "Un assaggio di Note tra le Mura",
      photoCount: "{n} foto",
      roomPhotosIntro: "{n} foto dell’ambiente",
      enter: "Apri la gallery",
      coverAltSuffix: "immagine di copertina",
    },
    availability: {
      heading: "Disponibilità",
      legendFree: "Libero",
      legendBusy: "Occupato",
      disclaimer:
        "Le date sono indicative: conferma sempre disponibilità e condizioni via messaggio.",
      notConfigured:
        "Calendario in configurazione: scrivici su WhatsApp per le date.",
      loadError: "Impossibile caricare il calendario in questo momento.",
      widgetAria:
        "Calendario disponibilità dal mese corrente fino a dicembre",
      monthCaption: "{m} {y}",
      calendarPrevAria: "Mostra i mesi precedenti",
      calendarNextAria: "Mostra i mesi successivi",
      calendarSwipeHint: "Puoi anche scorrere col dito a sinistra o destra.",
    },
    rooms: {
      soggiorno: "Soggiorno",
      cucina: "Cucina",
      "camera-da-letto-1": "Camera da letto 1",
      "camera-da-letto-2": "Camera da letto 2",
      bagni: "Bagni",
      esterno: "Esterno",
    },
    story: {
      heading: "La nostra storia a Lucca",
      body:
        "Note tra le Mura nasce dal desiderio di offrire un soggiorno lento e curato, nel segno della tradizione toscana. Abbiamo restaurato ogni ambiente con materiali nobili e dettagli ispirati al territorio, unendo calore storico e comfort moderno. Qui ti senti accolto, come a casa, a due passi dalle piazze e dai vicoli più suggestivi.",
    },
    services: {
      heading: "Servizi",
      items: [
        "Check-in flessibile in autonomia",
        "Wi‑Fi veloce e smart TV",
        "Cucina attrezzata con macchina da caffè",
        "Biancheria premium e cortesia bagno",
        "Suggerimenti su itinerari, enoteche e botteghe",
        "Assistenza rapida via WhatsApp",
      ],
    },
    contacts: {
      heading: "Contatti",
      body:
        "Per disponibilità, tariffe o richieste speciali scrivici su WhatsApp: ti rispondiamo al più presto con tutte le informazioni utili al tuo soggiorno.",
      emailLinkAria: "Invia un’email a",
      mailSubject: "Note tra le Mura — informazioni e disponibilità",
      mailBodyIntro:
        "Buongiorno,\n\nVi scrivo per avere informazioni su Note tra le Mura (appartamento a Lucca).\n\n",
      whatsapp: "Scrivici",
      whatsappAria: "Apri WhatsApp e inviaci un messaggio",
    },
    legal: {
      widgetAria: "Informazioni di chiusura pagina",
      ownerLabel: "Titolare",
      pending: "Da comunicare",
      linkPrivacy: "Privacy",
      linkCookies: "Cookie",
    },
    privacy: {
      title: "Informativa sulla privacy",
      backToHome: "Torna alla home",
      sections: [
        {
          heading: "Premessa",
          body: "Questa informativa riguarda i dati personali trattati tramite il presente sito web e i canali collegati (ad esempio messaggistica WhatsApp) per la locazione turistica «Note tra le Mura» nel centro storico di Lucca. È resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 («GDPR») e degli artt. 13–14 del D.Lgs. 196/2003 come adeguato («Codice Privacy»).",
        },
        {
          heading: "Titolare del trattamento",
          body: "Il titolare del trattamento è il soggetto che gestisce l’attività di ospitalità della struttura. Denominazione, indirizzo, codice fiscale o partita IVA e recapiti operativi sono quelli indicati nel piè di pagina del sito (ove inseriti) e comunque comunicati in sede di prenotazione o all’accoglienza, se aggiornati.",
        },
        {
          heading: "Categorie di dati trattati",
          body: "Dati identificativi e di contatto (nome, cognome, email, numero di telefono, contenuti dei messaggi); dati necessari alla gestione del soggiorno e agli adempimenti di legge (inclusa la documentazione richiesta per le comunicazioni agli organi di pubblica sicurezza, ove applicabile); dati di navigazione tecnici (indirizzo IP, orario di accesso, tipo di browser, pagine visitate, eventuali codici di errore) raccolti dai sistemi che ospitano il sito e dai log di sicurezza.",
        },
        {
          heading: "Finalità, base giuridica e conservazione",
          body: "I dati sono trattati per: rispondere a richieste di informazioni e gestire prenotazioni e soggiorno (base giuridica: esecuzione di misure precontrattuali e contrattuali, art. 6.1.b GDPR); adempiere obblighi contabili, fiscali e di legge, inclusi quelli in materia di ospitalità (art. 6.1.c); tutelare diritti in sede extragiudiziale o giudiziale (art. 6.1.f, bilanciato con i diritti dell’interessato); garantire sicurezza del sito e prevenire abusi (art. 6.1.f). I tempi di conservazione sono commisurati alle finalità e agli obblighi legali (ad es. obblighi fiscali e di tenuta documentale).",
        },
        {
          heading: "Modalità del trattamento, destinatari e trasferimenti",
          body: "Il trattamento avviene con strumenti informatici e, ove necessario, cartacei, nel rispetto dei principi di liceità, correttezza, trasparenza, minimizzazione e limitazione della conservazione. Possono venire a conoscenza dei dati il personale autorizzato, i collaboratori e i fornitori di servizi strettamente necessari (es. hosting, posta elettronica, gestionale di prenotazione), nominati responsabili del trattamento ove previsto dalla legge. Eventuali trasferimenti verso Paesi extra-UE dipendono dagli strumenti effettivamente utilizzati (es. fornitori di servizi in cloud): in tal caso saranno adottate garanzie adeguate (es. Clausole contrattuali tipo della Commissione Europea) ove richiesto.",
        },
        {
          heading: "Diritti dell’interessato",
          body: "Ai sensi degli artt. 15–22 GDPR, l’interessato può chiedere accesso, rettifica, cancellazione dei dati, limitazione del trattamento, portabilità (ove applicabile) e opporsi al trattamento basato sul legittimo interesse, nonché revocare il consenso ove prestato, senza pregiudicare la liceità del trattamento precedente. Le richieste vanno indirizzate al titolare ai recapiti sopra indicati. È possibile proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
        },
        {
          heading: "Modifiche",
          body: "Il titolare può aggiornare la presente informativa per adeguamenti normativi o organizzativi. Si invita a consultarla periodicamente.",
        },
      ],
    },
    cookies: {
      title: "Informativa sui cookie",
      backToHome: "Torna alla home",
      sections: [
        {
          heading: "Cosa sono i cookie",
          body: "I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell’utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Servono ad esempio per mantenere la sessione, ricordare preferenze linguistiche o raccogliere informazioni statistiche in forma aggregata.",
        },
        {
          heading: "Cookie tecnici necessari",
          body: "Il sito utilizza cookie e strumenti analoghi strettamente necessari al funzionamento tecnico delle pagine, alla sicurezza (prevenzione spam o abusi) e, ove implementato, alla memorizzazione della lingua scelta. Tali strumenti non richiedono consenso ai sensi della normativa applicabile, in quanto indispensabili alla prestazione del servizio richiesto.",
        },
        {
          heading: "Cookie di terze parti e strumenti di analisi",
          body: "Se in futuro fossero attivati strumenti di misurazione delle visite, mappe interattive, pulsanti social o video incorporati da piattaforme esterne, potrebbero essere installati cookie o identificatori di terze parti, con logiche e tempi di conservazione regolate dai rispettivi titolari. In tal caso sarà cura del titolare descrivere le finalità e, ove richiesto, raccogliere il consenso tramite banner o pannello dedicato.",
        },
        {
          heading: "Come gestire o disabilitare i cookie",
          body: "L’utente può impostare il proprio browser in modo da essere avvisato della presenza di cookie, cancellarli o bloccarne l’installazione. Le istruzioni sono disponibili nelle pagine di aiuto del browser utilizzato (Chrome, Firefox, Safari, Edge, ecc.). La disabilitazione di cookie tecnici potrebbe limitare alcune funzioni del sito.",
        },
        {
          heading: "Riferimenti",
          body: "Per ulteriori informazioni sui cookie si rimanda alle linee guida del Garante per la protezione dei dati personali (www.garanteprivacy.it). Per esercitare i diritti in materia di dati personali si veda l’informativa sulla privacy.",
        },
      ],
    },
    cookieBanner: {
      barAria: "Informazione sui cookie e preferenze",
      message:
        "Utilizziamo cookie tecnici necessari al funzionamento del sito e alla lingua. Nessun cookie di profilazione o marketing. Per i dettagli consulta l’informativa.",
      accept: "Accetto",
      preferences: "Preferenze",
      policyLink: "Informativa cookie",
      panelTitle: "Preferenze cookie",
      panelClose: "Chiudi",
      necessaryTitle: "Strettamente necessari",
      necessaryDesc:
        "Sempre attivi: sicurezza, preferenza lingua, funzioni essenziali del sito. Non richiedono consenso ai sensi della normativa applicabile.",
      optionalIntro: "Altre categorie",
      optionalNone:
        "Al momento non sono in uso cookie di statistica, marketing o terze parti facoltativi.",
      savePreferences: "Salva preferenze",
    },
    fabWhatsappAria: "Apri WhatsApp",
    galleryPage: {
      back: "Torna alla home",
      photoAltSuffix: "foto",
    },
    whatsappMessage:
      "Ciao, vorrei informazioni su Note tra le Mura (appartamento a Lucca).",
  },
  en: {
    meta: {
      title: `${brand} | Boutique stay in Lucca`,
      description:
        "A refined apartment inside Lucca’s historic walls: curated interiors, modern comfort, and the charm of Tuscany on your doorstep.",
    },
    hero: {
      imageAlt: "Lucca’s skyline with medieval towers",
      kicker: "Welcome to Lucca",
      brand,
      location:
        "In Lucca’s historic centre, within the Renaissance city walls.",
      subtitle:
        "A serene hideaway within the Renaissance walls—sun‑washed rooms, natural textures, and the authentic pulse of the old town.",
      whatsapp: "Contact us",
      whatsappAria: "Go to the Contact section",
      gallery: "Browse the gallery",
    },
    gallery: {
      heading: "Gallery",
      sub: "A glimpse inside Note tra le Mura",
      photoCount: "{n} photos",
      roomPhotosIntro: "{n} photos from this space",
      enter: "View gallery",
      coverAltSuffix: "cover image",
    },
    availability: {
      heading: "Availability",
      legendFree: "Available",
      legendBusy: "Unavailable",
      disclaimer:
        "Dates are indicative—please confirm availability and terms by message.",
      notConfigured:
        "Calendar not configured yet: message us on WhatsApp for dates.",
      loadError: "We couldn’t load the calendar right now.",
      widgetAria:
        "Availability calendar from the current month through December",
      monthCaption: "{m} {y}",
      calendarPrevAria: "Show previous months",
      calendarNextAria: "Show next months",
      calendarSwipeHint: "You can also swipe left or right.",
    },
    rooms: {
      soggiorno: "Living room",
      cucina: "Kitchen",
      "camera-da-letto-1": "Bedroom 1",
      "camera-da-letto-2": "Bedroom 2",
      bagni: "Bathrooms",
      esterno: "Outdoor spaces",
    },
    story: {
      heading: "Our story in Lucca",
      body:
        "Note tra le Mura was created to share the unhurried elegance of Lucca. We restored each room with local craftsmanship, noble materials, and thoughtful touches that echo Tuscan tradition while embracing contemporary comfort. It is a place to settle in, stroll the lanes, and feel genuinely at home within the walls.",
    },
    services: {
      heading: "Amenities",
      items: [
        "Flexible self check‑in",
        "High‑speed Wi‑Fi and smart TV",
        "Fully equipped kitchen with coffee machine",
        "Premium linens and bathroom essentials",
        "Personal tips for wine bars, shops, and day trips",
        "Responsive support on WhatsApp",
      ],
    },
    contacts: {
      heading: "Contact",
      body:
        "For availability, rates, or special requests, reach us on WhatsApp—we will reply promptly with everything you need to plan your stay.",
      emailLinkAria: "Send an email to",
      mailSubject: "Note tra le Mura — enquiry & availability",
      mailBodyIntro:
        "Hello,\n\nI'm writing about Note tra le Mura (apartment in Lucca).\n\n",
      whatsapp: "Write to us",
      whatsappAria: "Open WhatsApp and send us a message",
    },
    legal: {
      widgetAria: "Page footer information",
      ownerLabel: "Owner",
      pending: "To be provided",
      linkPrivacy: "Privacy",
      linkCookies: "Cookies",
    },
    privacy: {
      title: "Privacy policy",
      backToHome: "Back to home",
      sections: [
        {
          heading: "Introduction",
          body: "This notice describes how personal data are processed through this website and related contact channels (including WhatsApp messaging) for the short‑term rental “Note tra le Mura” in Lucca’s historic centre. It is provided pursuant to Articles 13 and 14 of Regulation (EU) 2016/679 (“GDPR”) and Articles 13–14 of Italian Legislative Decree 196/2003 as amended (“Privacy Code”).",
        },
        {
          heading: "Data controller",
          body: "The controller is the person or organisation operating the accommodation. Name, address, tax code or VAT number and operational contacts are those shown in the website footer (where provided) and in any case communicated when you book or at check‑in, if different.",
        },
        {
          heading: "Categories of personal data",
          body: "Identification and contact data (name, surname, email, telephone number, message contents); data required to manage your stay and meet legal obligations (including documentation required for police lodging notifications, where applicable); technical browsing data (IP address, access time, browser type, pages visited, error codes) collected by hosting systems and security logs.",
        },
        {
          heading: "Purposes, legal basis and retention",
          body: "Data are processed to: respond to enquiries and manage bookings and stays (legal basis: performance of pre‑contractual and contractual measures, Art. 6(1)(b) GDPR); comply with accounting, tax and legal obligations, including hospitality rules (Art. 6(1)(c)); protect rights in or out of court (Art. 6(1)(f), balanced against your rights); ensure website security and prevent abuse (Art. 6(1)(f)). Retention periods are proportionate to the purposes and to statutory duties (e.g. tax and record‑keeping).",
        },
        {
          heading: "Processing methods, recipients and transfers",
          body: "Processing is carried out using electronic and, where necessary, paper tools, in compliance with lawfulness, fairness, transparency, data minimisation and storage limitation. Data may be accessed by authorised staff, collaborators and strictly necessary service providers (e.g. hosting, email, booking software), appointed as processors where required by law. Any transfers outside the EU depend on the tools actually used (e.g. cloud providers): where required, appropriate safeguards (e.g. EU Commission Standard Contractual Clauses) will be adopted.",
        },
        {
          heading: "Data subject rights",
          body: "Under Articles 15–22 GDPR, you may request access, rectification, erasure, restriction of processing, data portability (where applicable) and object to processing based on legitimate interests, and withdraw consent where given, without affecting the lawfulness of processing carried out beforehand. Requests should be sent to the controller at the contacts indicated above. You may lodge a complaint with the Italian Data Protection Authority (www.garanteprivacy.it).",
        },
        {
          heading: "Changes",
          body: "The controller may update this notice for legal or organisational reasons. Please review it periodically.",
        },
      ],
    },
    cookies: {
      title: "Cookie policy",
      backToHome: "Back to home",
      sections: [
        {
          heading: "What cookies are",
          body: "Cookies are small text files that websites send to the user’s device, where they are stored and sent back on the next visit. They may be used to keep a session active, remember language preferences or collect statistical information in aggregate form.",
        },
        {
          heading: "Strictly necessary technical cookies",
          body: "The site uses cookies and similar tools that are strictly necessary for the technical operation of pages, security (spam or abuse prevention) and, where implemented, to remember the language you select. Under applicable law, such tools do not require consent because they are essential to provide the service you request.",
        },
        {
          heading: "Third‑party cookies and analytics",
          body: "If visit measurement, embedded maps, social buttons or videos from external platforms are activated in the future, third‑party cookies or identifiers may be installed, with purposes and retention governed by those providers. The controller will then describe the purposes and, where required, collect consent through a banner or dedicated panel.",
        },
        {
          heading: "Managing or disabling cookies",
          body: "You can configure your browser to notify you about cookies, delete them or block installation. Instructions are available in your browser’s help pages (Chrome, Firefox, Safari, Edge, etc.). Disabling technical cookies may limit some site features.",
        },
        {
          heading: "Further information",
          body: "For more information on cookies, see the Italian Data Protection Authority’s guidance (www.garanteprivacy.it). For personal data rights, see the privacy policy.",
        },
      ],
    },
    cookieBanner: {
      barAria: "Cookie information and preferences",
      message:
        "We use strictly necessary technical cookies for the site to work and to remember your language. No profiling or marketing cookies. See our cookie policy for details.",
      accept: "Accept",
      preferences: "Preferences",
      policyLink: "Cookie policy",
      panelTitle: "Cookie preferences",
      panelClose: "Close",
      necessaryTitle: "Strictly necessary",
      necessaryDesc:
        "Always on: security, language preference, essential site features. Consent is not required under applicable law.",
      optionalIntro: "Other categories",
      optionalNone:
        "We do not currently use analytics, marketing or optional third‑party cookies.",
      savePreferences: "Save preferences",
    },
    fabWhatsappAria: "Open WhatsApp",
    galleryPage: {
      back: "Back to home",
      photoAltSuffix: "photo",
    },
    whatsappMessage:
      "Hello, I would like more information about Note tra le Mura (apartment in Lucca).",
  },
  sr: {
    meta: {
      title: `${brand} | Apartman u Luci`,
      description:
        "Apartman sa dušom u srcu srednjovekovne Luke: topao enterijer, savremena udobnost i trgovi na dohvat ruke.",
    },
    hero: {
      imageAlt: "Pogled na krovove i kule Luke",
      kicker: "Dobrodošli u Luku",
      brand,
      location:
        "U istorijskom centru Luke, iza renesansnih gradskih zidina.",
      subtitle:
        "Miran apartman iza renesansnih zidina: prirodno svetlo, prirodni materijali i autentičan ritam starog grada.",
      whatsapp: "Kontakt",
      whatsappAria: "Idi na odeljak Kontakt",
      gallery: "Pogledajte galeriju",
    },
    gallery: {
      heading: "Galerija",
      sub: "Utisci iz apartmana Note tra le Mura",
      photoCount: "{n} fotografija",
      roomPhotosIntro: "{n} fotografija iz ovog prostora",
      enter: "Otvori galeriju",
      coverAltSuffix: "naslovna fotografija",
    },
    availability: {
      heading: "Dostupnost",
      legendFree: "Slobodno",
      legendBusy: "Zauzeto",
      disclaimer:
        "Datumi su indikativni—uvek potvrdite dostupnost i uslove porukom.",
      notConfigured:
        "Kalendar još nije podešen: pišite nam na WhatsApp za datume.",
      loadError: "Kalendar trenutno nije moguće učitati.",
      widgetAria:
        "Kalendar dostupnosti od tekućeg meseca do decembra iste godine",
      monthCaption: "{m} {y}",
      calendarPrevAria: "Prikaži prethodne mesece",
      calendarNextAria: "Prikaži sledeće mesece",
      calendarSwipeHint: "Možete i prevuciti prstom ulevo ili udesno.",
    },
    rooms: {
      soggiorno: "Dnevna soba",
      cucina: "Kuhinja",
      "camera-da-letto-1": "Spavaća soba 1",
      "camera-da-letto-2": "Spavaća soba 2",
      bagni: "Kupatila",
      esterno: "Spoljni prostor",
    },
    story: {
      heading: "Naša priča u Luci",
      body:
        "Note tra le Mura je nastao iz želje da podelimo spor, pažljiv ritam života u Luci. Prostorije smo obnovili uz poštovanje lokalnog zanata i materijala koji šapuću Toskani, uz savremenu udobnost koja vam omogućava da se opustite kao kod kuće—na korak od trgova, kafića i najlepših uličica.",
    },
    services: {
      heading: "Usluge",
      items: [
        "Fleksibilan samostalan prijavljivanje",
        "Brz Wi‑Fi i pametni televizor",
        "Opremljena kuhinja sa aparatom za kafu",
        "Posteljina i komplet za kupatilo",
        "Preporuke za izlete, vinske barove i zanatske radnje",
        "Brza podrška preko WhatsApp-a",
      ],
    },
    contacts: {
      heading: "Kontakt",
      body:
        "Za slobodne termine, cene ili posebne zahteve pišite nam na WhatsApp-u—odgovorićemo brzo sa svim detaljima za vaš boravak.",
      emailLinkAria: "Pošalji e-poštu na",
      mailSubject: "Note tra le Mura — upit i dostupnost",
      mailBodyIntro:
        "Zdravo,\n\nPišem u vezi sa Note tra le Mura (apartman u Luci).\n\n",
      whatsapp: "Pišite nam",
      whatsappAria: "Otvorite WhatsApp i pošaljite poruku",
    },
    legal: {
      widgetAria: "Informacije u podnožju stranice",
      ownerLabel: "Vlasnik",
      pending: "Dostaviti",
      linkPrivacy: "Privatnost",
      linkCookies: "Kolačići",
    },
    privacy: {
      title: "Politika privatnosti",
      backToHome: "Povratak na početnu",
      sections: [
        {
          heading: "Uvod",
          body: "Ovo obaveštenje opisuje obradu ličnih podataka putem ovog veb-sajta i povezanih kanala (uključujući WhatsApp) za turistički zakup „Note tra le Mura” u istorijskom centru Luke. Dostavlja se u skladu sa čl. 13. i 14. Uredbe (EU) 2016/679 („GDPR”) i italijanskim propisima o zaštiti podataka.",
        },
        {
          heading: "Rukovalac",
          body: "Rukovalac je lice ili subjekt koji obavlja ugostiteljsku delatnost. Naziv, adresa, poreski broj ili PIB i kontakti su oni navedeni u podnožju sajta (ako su uneti) i u svakom slučaju saopšteni pri rezervaciji ili pri dolasku, ako se razlikuju.",
        },
        {
          heading: "Kategorije podataka",
          body: "Identifikacioni i kontakt podaci (ime, prezime, e-pošta, telefon, sadržaj poruka); podaci potrebni za boravak i zakonske obaveze (uključujući dokumentaciju za prijavu gostiju policiji, gde je to obavezno); tehnički podaci o poseti (IP adresa, vreme pristupa, tip pregledača, posećene stranice) iz sistema hostinga i bezbednosnih evidencija.",
        },
        {
          heading: "Svrha, pravni osnov i čuvanje",
          body: "Podaci se obrađuju radi: odgovora na upite i upravljanja rezervacijama i boravkom (pravni osnov: mere pre ugovora i izvršenje ugovora, čl. 6. st. 1. tačka b GDPR); ispunjavanja računovodstvenih, poreskih i drugih zakonskih obaveza (čl. 6. st. 1. tačka c); zaštite prava (čl. 6. st. 1. tačka f); bezbednosti sajta i sprečavanja zloupotreba (čl. 6. st. 1. tačka f). Rok čuvanja je srazmeran svrsi i zakonu.",
        },
        {
          heading: "Način obrade, primaoci i prenosi",
          body: "Obrada se vrši elektronskim i, po potrebi, papirnim sredstvima, uz poštovanje principa zakonitosti, srazmernosti i ograničenja čuvanja. Podacima mogu pristupiti ovlašćeno osoblje, saradnici i dobavljači usluga (hosting, e-pošta, softver za rezervacije), kao obrađivači gde je to zakonom predviđeno. Prenosi van EU zavise od korišćenih alata; gde je potrebno, primenjuju se odgovarajuće garancije (npr. standardne ugovorne klauzule).",
        },
        {
          heading: "Prava lica",
          body: "Prema čl. 15–22. GDPR, lice čiji se podaci odnose može zatražiti pristup, ispravku, brisanje, ograničenje obrade, prenosivost (gde se primenjuje) i prigovor na obradu zasnovanu na legitimnom interesu, kao i povlačenje pristanka gde je dat. Zahtevi se upućuju rukovaocu na navedene kontakte. Može se podneti prigovor Italijanskom nadzorniku za zaštitu podataka (www.garanteprivacy.it).",
        },
        {
          heading: "Izmene",
          body: "Rukovalac može ažurirati ovo obaveštenje. Pregledajte ga povremeno.",
        },
      ],
    },
    cookies: {
      title: "Politika kolačića",
      backToHome: "Povratak na početnu",
      sections: [
        {
          heading: "Šta su kolačići",
          body: "Kolačići su male tekstualne datoteke koje sajt šalje na uređaj korisnika i koje se pri ponovnoj poseti šalju nazad. Služe npr. za sesiju, jezik ili statistiku u agregiranom obliku.",
        },
        {
          heading: "Tehnički neophodni kolačići",
          body: "Sajt koristi kolačiće i slične alate neophodne za tehnički rad stranica, bezbednost (spam, zloupotreba) i, ako je uključeno, za pamćenje jezika. Za takve alate pristanak nije potreban jer su neophodni za uslugu.",
        },
        {
          heading: "Treće strane i analitika",
          body: "Ako se uvedu merenje poseta, mape, dugmad društvenih mreža ili video sa spoljnih platformi, mogu se instalirati kolačići trećih strana; svrhu i pristanak tada treba jasno opisati (npr. banerom).",
        },
        {
          heading: "Upravljanje u pregledaču",
          body: "Kolačići se mogu brisati ili blokirati u podešavanjima pregledača (Chrome, Firefox, Safari, Edge itd.). Isključivanje tehničkih kolačića može ograničiti funkcije sajta.",
        },
        {
          heading: "Dalje informacije",
          body: "Više o kolačićima: smernice italijanskog nadzornika (www.garanteprivacy.it). Za lične podatke vidi politiku privatnosti.",
        },
      ],
    },
    cookieBanner: {
      barAria: "Obaveštenje o kolačićima i podešavanja",
      message:
        "Koristimo tehničke kolačiće neophodne za rad sajta i jezik. Nema marketinških ili profilisanja. Detalji u politici kolačića.",
      accept: "Prihvatam",
      preferences: "Podešavanja",
      policyLink: "Politika kolačića",
      panelTitle: "Podešavanja kolačića",
      panelClose: "Zatvori",
      necessaryTitle: "Strogo neophodni",
      necessaryDesc:
        "Uvek uključeni: bezbednost, jezik, osnovne funkcije. Pristanak nije potreban prema važećim propisima.",
      optionalIntro: "Ostale kategorije",
      optionalNone:
        "Trenutno se ne koriste statistika, marketing ili opcionalni kolačići trećih strana.",
      savePreferences: "Sačuvaj podešavanja",
    },
    fabWhatsappAria: "Otvori WhatsApp",
    galleryPage: {
      back: "Povratak na početnu",
      photoAltSuffix: "fotografija",
    },
    whatsappMessage:
      "Zdravo, želim informacije o apartmanu Note tra le Mura u Luci.",
  },
};
