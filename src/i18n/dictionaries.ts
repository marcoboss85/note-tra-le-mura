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
  /** Sezione recensioni / link a scheda Airbnb in home. */
  testimonials: {
    heading: string;
    body: string;
    cta: string;
    ctaAria: string;
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
    /** `title` sull’iframe mappa (OpenStreetMap, centro Lucca, marker struttura). */
    mapFrameTitle: string;
    /** `aria-label` sull’anteprima mappa (link a mappa a tutto schermo). */
    mapLinkAria: string;
    /** Link icona Facebook sotto mappa. */
    facebookAria: string;
    /** Link icona Instagram sotto mappa. */
    instagramAria: string;
    /** `aria-label` sul blocco fissato in alto a sinistra (come le bandierine a destra). */
    headerSocialNavAria: string;
  };
  /** CIN / indirizzo e link norme — piè di pagina (fine contenuto). */
  legal: {
    widgetAria: string;
    ownerLabel: string;
    pending: string;
    linkPrivacy: string;
    linkCookies: string;
    /** Link footer → pagina Lucca Comics. */
    linkLuccaComics: string;
  };
  privacy: {
    title: string;
    backToHome: string;
    /** Meta description (snippet, condivisione). */
    metaDescription: string;
    sections: { heading: string; body: string }[];
  };
  cookies: {
    title: string;
    backToHome: string;
    metaDescription: string;
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
    /** Sostituire il segnaposto `{room}` con il nome ambiente localizzato. */
    metaDescription: string;
  };
  whatsappMessage: string;
  /** Pagina “Lucca Comics”: contenuti SEO, FAQ; niente prezzi in dizionario. */
  luccaComics: {
    metaDescription: string;
    title: string;
    backToHome: string;
    /** Slideshow in cima alla pagina (stesso n. di voci di `LUCCA_COMICS_HERO_SLIDES`). */
    heroSlideshowAria: string;
    heroSlideAlts: string[];
    intro: string;
    /** Titolo del blocco fotografico sotto l’intro. */
    galleryTitle: string;
    /** Stesso ordine e numero di voci di `LUCCA_COMICS_GALLERY` in `config/lucca-comics-gallery`. */
    galleryImageAlts: string[];
    sections: { heading: string; body: string }[];
    faqTitle: string;
    faq: { question: string; answer: string }[];
    cta: string;
    ctaToContacts: string;
    /** Riga sotto l’hero in home, prima del link. */
    homeComicsTeaser: string;
    /** Testo del link → /lucca-comics */
    homeComicsLinkText: string;
  };
};

const brand = "Note tra le Mura";

export const dictionaries: Record<Locale, Messages> = {
  it: {
    meta: {
      title: `${brand} | Appartamento a Lucca`,
      description:
        "Appartamento per vacanze nel centro di Lucca, dentro le mura (Via Pelleria 14). Ambiente curato, calendario disponibilità e contatti per prenotazione diretta.",
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
    testimonials: {
      heading: "Dicono di noi",
      body:
        "Dopo ogni soggiorno, gli ospiti possono lasciare una recensione su Airbnb. Se vuoi conoscere le loro esperienze, trovi le opinioni sulla scheda ufficiale dell’annuncio.",
      cta: "Vedi le recensioni su Airbnb",
      ctaAria: "Apre in una nuova scheda l’annuncio su Airbnb, con le recensioni",
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
      mapFrameTitle: "Lucca, zona Via Pelleria 14 (OpenStreetMap)",
      mapLinkAria: "Apri la mappa su OpenStreetMap: Via Pelleria 14, Lucca",
      facebookAria: "Apri la pagina Facebook di Note tra le Mura",
      instagramAria: "Apri il profilo Instagram di Note tra le Mura",
      headerSocialNavAria: "Link social (Facebook e Instagram)",
    },
    legal: {
      widgetAria: "Informazioni di chiusura pagina",
      ownerLabel: "Titolare",
      pending: "Da comunicare",
      linkPrivacy: "Privacy",
      linkCookies: "Cookie",
      linkLuccaComics: "Lucca Comics",
    },
    privacy: {
      title: "Informativa sulla privacy",
      backToHome: "Torna alla home",
      metaDescription:
        "Informativa sul trattamento dei dati personali (GDPR) per il sito e i contatti di Note tra le Mura, appartamento a Lucca.",
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
      metaDescription:
        "Politica sui cookie del sito Note tra le Mura: cookie tecnici necessari, preferenze lingua e come gestirli.",
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
      metaDescription:
        "{room} — Foto e dettagli. Note tra le Mura, appartamento nel centro storico di Lucca.",
    },
    whatsappMessage:
      "Ciao, vorrei informazioni su Note tra le Mura (appartamento a Lucca).",
    luccaComics: {
      metaDescription:
        "Alloggio a Lucca per Lucca Comics & Games: appartamento Note tra le Mura, Via Pelleria 14, centro storico tra le mura. FAQ, prenotazione diretta e contatti (WhatsApp ed email) sul sito.",
      title: "Alloggio a Lucca per Lucca Comics & Games",
      backToHome: "Torna alla home",
      heroSlideshowAria:
        "Foto a rotazione: Lucca Comics & Games e atmosfera del festival",
      heroSlideAlts: [
        "Lucca Comics, immagine 1",
        "Lucca Comics, immagine 2",
        "Lucca Comics, immagine 3",
      ],
      intro:
        "Lucca Comics & Games attrae ogni autunno visitatori da tutta Europa: vivere dentro le mura è una posizione strategica — l’auto la lasci fuori cinta, poi niente stress quotidiano da parcheggi: ti godi l’atmosfera del festival in tranquillità, in compagnia fino a 6 ospiti (amici o parenti) nello stesso alloggio. Dormire nel centro storico rende i giorni del festival meno faticosi. Note tra le Mura è un appartamento curato, pensato per chi cerca quiete, eleganza e la libertà di muoversi a piedi. Le date ufficiali e i dettagli di ogni edizione vanno controllati sul sito di Lucca Comics & Games; per disponibilità e prenotazione diretta preferiamo un contatto in WhatsApp o email.",
      galleryTitle: "L’appartamento, tra le mura",
      galleryImageAlts: [
        "Soggiorno, Note tra le Mura, Lucca",
        "Camera da letto 1, Note tra le Mura, Lucca",
        "Camera da letto 2, Note tra le Mura, Lucca",
        "Soggiorno, altra inquadratura, Note tra le Mura, Lucca",
      ],
      sections: [
        {
          heading: "Dove siamo",
          body:
            "L’appartamento Note tra le Mura si trova in Via Pelleria 14, 55100 Lucca, all’interno della cinta muraria, in una zona a forte vocazione pedonale. A titolo indicativo: circa 10 minuti a piedi dal Padiglione Carducci, circa 6 minuti da piazza San Michele in Foro e circa 8 minuti da piazza Napoleone (i tempi dipendono dal percorso e dal passo). Completano il quadro, sempre nelle immediate vicinanze, riferimenti come Via Fillungo, piazza dell’Anfiteatro e il duomo — comodità che ritrovi anche su Google Maps e sulle schede dove la struttura è elencata (ad es. Airbnb, Booking). CIN e indirizzo operativo in piè di pagina su ogni pagina del sito.",
        },
        {
          heading: "Perché il centro storico durante il festival",
          body:
            "Nei giorni del festival ristoranti, eventi e incontro sono in centro. Essere in appartamento dentro le mura significa vivere in una posizione strategica per l’esperienza del Comics: non devi ogni mattina ripensare a dove lasciare l’auto, ti muovi a piedi tra Padiglione, piazze e vicoli, e rientri in tranquillità per condividere l’atmosfera in casa fino a 6 persone. Meno spostamenti, orari flessibili, rientro comodo con pioggia o serate lunghe, e l’atmosfera autentica dei vicoli in un’abitazione indipendente, lontana dal transito pesante.",
        },
        {
          heading: "Prenotazione diretta",
          body:
            "Sul sito trovi foto, servizi, calendario e contatti per verificare le date. Per il periodo del festival, quando la domanda è alta, gestiamo con piacere le richieste direttamente con voi, così da chiarire tempi, esigenze e dettagli pratici senza intermediari. I listini e le regole (es. soggiorno minimo) ve li comunichiamo in fase di richiesta, in linea con la disponibilità reale.",
        },
        {
          heading: "Cosa valutare prima di prenotare",
          body:
            "Lucca in quei giorni è viva e affollata: conviene pensare in anticipo ad arrivi, bagagli e fusi orari del check-in, e chiedere in messaggio se avete esigenze particolari (gruppo numeroso, bambini, lavoro in smart working). Siamo a disposizione per darvi informazioni realistiche, senza promesse che non possiamo mantenere.",
        },
      ],
      faqTitle: "Domande frequenti",
      faq: [
        {
          question: "L’appartamento è adatto a chi viene per Lucca Comics?",
          answer:
            "Sì: ospitiamo fino a 6 persone, ideale per vivere il festival in compagnia con amici o parenti, nel centro, con comodità a piedi e un ambiente curato. Per esigenze molto specifiche basta scriverci prima di prenotare.",
        },
        {
          question: "Come posso prenotare in modo diretto?",
          answer:
            "Scrivici su WhatsApp o email (link in fondo a questa pagina e in home: sezione Contatti). Ti rispondiamo con disponibilità reale e prossimi passi.",
        },
        {
          question: "Quanto è lontana la zona fiera o i percorsi principali?",
          answer:
            "Come ordine di grandezza, a piedi: circa 10 minuti al Padiglione Carducci, circa 6 minuti a piazza San Michele in Foro e circa 8 minuti a piazza Napoleone (dipende dal percorso e dal passo; ingressi e programma possono variare). Il vantaggio di essere già in appartamento dentro le mura è il minor stress legato al parcheggio nel quotidiano del festival: per visitare fiera e centro spesso l’auto non serve più fino a rientro.",
        },
        {
          question: "Dove posso parcheggiare? Qual è il parcheggio più vicino?",
          answer:
            "Per l’auto fuori mura, un riferimento pratico è Parcheggio Palatucci (zona ovest, Via delle Tagliate di Sant’Anna). Dal percorso pedonale che entra in centro (es. verso baluardo Santa Croce o Porta San Donato) sono in genere circa 8 minuti a piedi fino in zona centro storico; da lì, ancora qualche minuto verso Via Pelleria. Essendo in appartamento entro le mura, in giornata di festival in genere eviti di ripensare ogni uscita al posteggio: vivi piazze, Padiglione e Comics con più calma. Tariffe e orari: verificate in loco o sul gestore; noi non gestiamo il parcheggio.",
        },
        {
          question: "È un ambiente silenzioso nonostante il festival?",
          answer:
            "Siamo in una città viva: nei giorni del festival c’è più movimento, ma l’appartamento è in contesto residenziale e tranquillo rispetto al traffico sulle grandi direttrici. Se hai sensibilità al rumore, chiedi pure: raccontiamo l’esperienza in modo onesto.",
        },
        {
          question: "Ci sono soggiorni minimi o regole particolari in quel periodo?",
          answer:
            "In alta stagione e durante l’evento spesso proponiamo soggiorni con minimo notti o fasce orarie per il check-in, per organizzarci al meglio. Dettagli e condizioni le concordiamo con te in messaggio.",
        },
        {
          question: "Cosa devo scrivere nel primo messaggio?",
          answer:
            "Indica le date richieste, il numero di persone e se hai partecipazioni a eventi o orari scomodi per il check-in. Più siamo precisi, più la risposta è utile.",
        },
      ],
      cta:
        "Per date, disponibilità e prenotazione diretta apri la sezione contatti in home.",
      ctaToContacts: "Contattaci",
      homeComicsTeaser:
        "Lucca Comics & Games: alloggio in centro (Via Pelleria 14) —",
      homeComicsLinkText: "pagina dedicata e FAQ",
    },
  },
  en: {
    meta: {
      title: `${brand} | Boutique stay in Lucca`,
      description:
        "Holiday apartment in central Lucca, inside the Renaissance walls (14 Via Pelleria). Curated stay, availability calendar, gallery, and direct booking via the site.",
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
    testimonials: {
      heading: "What our guests say",
      body:
        "After each stay, guests can leave a review on Airbnb. To read their experiences, open the official listing page where all reviews are shown.",
      cta: "See reviews on Airbnb",
      ctaAria: "Opens your Airbnb listing in a new tab, with guest reviews",
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
      mapFrameTitle: "Lucca, 14 Via Pelleria area (OpenStreetMap)",
      mapLinkAria: "Open the map on OpenStreetMap: 14 Via Pelleria, Lucca",
      facebookAria: "Open the Note tra le Mura Facebook page",
      instagramAria: "Open the Note tra le Mura Instagram profile",
      headerSocialNavAria: "Social links (Facebook and Instagram)",
    },
    legal: {
      widgetAria: "Page footer information",
      ownerLabel: "Owner",
      pending: "To be provided",
      linkPrivacy: "Privacy",
      linkCookies: "Cookies",
      linkLuccaComics: "Lucca Comics",
    },
    privacy: {
      title: "Privacy policy",
      backToHome: "Back to home",
      metaDescription:
        "Privacy policy and personal data processing (GDPR) for Note tra le Mura, boutique stay in Lucca, Italy.",
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
      metaDescription:
        "Cookie policy for the Note tra le Mura website: essential technical cookies, language preference, and how to manage them.",
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
      metaDescription:
        "{room} — photos and details. Note tra le Mura, apartment in the heart of Lucca.",
    },
    whatsappMessage:
      "Hello, I would like more information about Note tra le Mura (apartment in Lucca).",
    luccaComics: {
      metaDescription:
        "Where to stay for Lucca Comics & Games: Note tra le Mura at 14 Via Pelleria, inside the Renaissance walls, central Lucca. FAQs, direct booking, and contact via this site (WhatsApp and email).",
      title: "Where to stay in Lucca for Lucca Comics & Games",
      backToHome: "Back to home",
      heroSlideshowAria:
        "Slideshow: Lucca Comics & Games and festival atmosphere",
      heroSlideAlts: [
        "Lucca Comics, photo 1",
        "Lucca Comics, photo 2",
        "Lucca Comics, photo 3",
      ],
      intro:
        "Lucca Comics & Games brings thousands of guests to Tuscany every autumn. Living inside the city walls is a strategic choice: you park outside the ring of walls, then you are not caught in daily parking stress, and you can enjoy the full festival atmosphere in peace—up to 6 guests in one apartment, with friends or family. Staying in the historic heart makes festival days less tiring. Note tra le Mura is a curated apartment for calm, design-led comfort and on-foot days. For official event dates, check the Lucca Comics & Games website; for availability and direct booking, we prefer WhatsApp or email.",
      galleryTitle: "The apartment, inside the walls",
      galleryImageAlts: [
        "Living room, Note tra le Mura, Lucca",
        "Bedroom 1, Note tra le Mura, Lucca",
        "Bedroom 2, Note tra le Mura, Lucca",
        "Living room, another angle, Note tra le Mura, Lucca",
      ],
      sections: [
        {
          heading: "Our address",
          body:
            "Note tra le Mura is at 14 Via Pelleria, 55100 Lucca, within the city walls, in a highly walkable part of the historic centre. As a rough guide: about 10 minutes on foot to the Carducci exhibition hall (Padiglione Carducci), about 6 minutes to Piazza San Michele in Foro, and about 8 minutes to Piazza Napoleone (times depend on the route and walking pace). Nearby you also have Via Fillungo, the Piazza dell’Anfiteatro, the cathedral, and the same in‑walled, central feel you can check on Google Maps and major booking sites. The same address and CIN code appear in the site footer on every page.",
        },
        {
          heading: "Why the old town during the festival",
          body:
            "During the event, dining, pop-up events, and meeting points are concentrated in the centre. A flat within the walls is a strategic base for Lucca Comics: you are not rethinking where to park every morning, you walk between the Carducci halls, the squares, and the lanes, and you come back to a calm home to share the experience with up to 6 people. It means easier day-to-day logistics, more flexible timing, a comfortable return after long days, and a quiet, self-contained home off the heaviest through-routes—while still in the heart of the festival atmosphere.",
        },
        {
          heading: "Direct booking",
          body:
            "On this site you will find photos, services, a calendar, and our contacts. In peak periods such as the festival, we welcome direct enquiries so we can agree on timing, group size, and practical details with no intermediaries. Rates and any minimum stay are confirmed when you get in touch, based on real availability.",
        },
        {
          heading: "What to check before you book",
          body:
            "Lucca is lively and busy on festival days. Plan early for arrivals, luggage, and check‑in windows, and let us know if you have specific needs (children, remote work, large party). We answer honestly, without promises we cannot keep.",
        },
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        {
          question: "Is the flat suitable for Lucca Comics guests?",
          answer:
            "Yes. We can host up to 6 people—ideal to share the festival with friends or family. It is designed for a central Lucca stay, with on-foot comfort and a restful, well-kept home base. If you have unusual requirements, message us before booking.",
        },
        {
          question: "How can I book directly?",
          answer:
            "Use WhatsApp or email via the home page (Contacts section) or the links on this page. We reply with real availability and the next steps.",
        },
        {
          question: "How far is the main venue or typical routes?",
          answer:
            "Roughly on foot from the flat: about 10 minutes to the Carducci hall (Padiglione Carducci), about 6 minutes to Piazza San Michele in Foro, and about 8 minutes to Piazza Napoleone—depending on the route, pace, and year’s layout. The upside of already being inside the walls is less day-to-day parking stress during the event: for many festival moves you simply walk from “home” without using the car again until you leave.",
        },
        {
          question: "Where can I park? What is the nearest car park?",
          answer:
            "Just outside the walls, a convenient option is Parcheggio Palatucci (west, Via delle Tagliate di Sant’Anna). From the pedestrian access into the historic centre (towards Porta San Donato or the Santa Croce bastion) it is typically about 8 minutes on foot to the old town, then a few more minutes to Via Pelleria. With an apartment within the walls, you usually avoid repeated parking stress during the day—squares, Carducci, and the festival are mostly on foot. We do not operate the car park; check rates and hours on site or with the operator.",
        },
        {
          question: "Will it be quiet despite the festival?",
          answer:
            "A historic city is never silent during Lucca Comics, but the apartment sits in a residential, quieter context than the main through-traffic. Ask us if you are noise-sensitive: we describe the experience as it is.",
        },
        {
          question: "Are there minimum stays or special rules in that period?",
          answer:
            "In high season and at the event we may apply minimum nights and check-in windows. We agree the details in writing when you enquire.",
        },
        {
          question: "What should I put in my first message?",
          answer:
            "Please include your requested dates, number of guests, and any check-in constraints. The clearer you are, the more useful our reply will be.",
        },
      ],
      cta:
        "For dates, availability, and direct booking, open the Contacts section on the home page.",
      ctaToContacts: "Contact us",
      homeComicsTeaser:
        "Lucca Comics & Games: stay in the centre (Via Pelleria 14) —",
      homeComicsLinkText: "dedicated page & FAQs",
    },
  },
  de: {
    meta: {
      title: `${brand} | Ferienwohnung in Lucca`,
      description:
        "Ferienapartment in der Altstadt von Lucca, innerhalb der Mauern (Via Pelleria 14). Ruhiger Aufenthalt, Verfügbarkeitskalender, Fotos und direkter Kontakt zur Buchung.",
    },
    hero: {
      imageAlt: "Lucca, Türme und Dächer der Altstadt",
      kicker: "Willkommen in Lucca",
      brand,
      location: "In der Altstadt von Lucca, innerhalb der Renaissance-Stadtmauern.",
      subtitle:
        "Ein ruhiges Refugium hinter der Stadtmauer – warmes Licht, natürliche Materialien und der echte Rhythmus des historischen Zentrums.",
      whatsapp: "Kontakt",
      whatsappAria: "Zum Bereich Kontakt",
      gallery: "Galerie ansehen",
    },
    gallery: {
      heading: "Galerie",
      sub: "Ein Blick in Note tra le Mura",
      photoCount: "{n} Fotos",
      roomPhotosIntro: "{n} Fotos aus diesem Bereich",
      enter: "Galerie öffnen",
      coverAltSuffix: "Titelbild",
    },
    availability: {
      heading: "Verfügbarkeit",
      legendFree: "Frei",
      legendBusy: "Belegt",
      disclaimer:
        "Die Angaben sind unverbindlich – bitte Verfügbarkeit und Konditionen per Nachricht bestätigen.",
      notConfigured:
        "Kalender wird eingerichtet: schreiben Sie uns per WhatsApp für Termine.",
      loadError: "Der Kalender kann derzeit nicht geladen werden.",
      widgetAria:
        "Verfügbarkeitskalender ab dem laufenden Monat bis Dezember",
      monthCaption: "{m} {y}",
      calendarPrevAria: "Vorherige Monate anzeigen",
      calendarNextAria: "Folgende Monate anzeigen",
      calendarSwipeHint: "Sie können auch mit dem Finger wischen.",
    },
    rooms: {
      soggiorno: "Wohnzimmer",
      cucina: "Küche",
      "camera-da-letto-1": "Schlafzimmer 1",
      "camera-da-letto-2": "Schlafzimmer 2",
      bagni: "Badezimmer",
      esterno: "Außenbereich",
    },
    story: {
      heading: "Unsere Geschichte in Lucca",
      body:
        "Note tra le Mura entstand aus dem Wunsch, den beschaulichen, liebevollen Lucca‑Alltag zu teilen. Wir haben jeden Raum mit regionalem Handwerk, edlen Materialien und liebevollen Details restauriert – in der Tradition der Toskana und mit heutigem Komfort. Ein Ort, an dem man ankommt, Gassen spaziert und sich innerhalb der Mauern wirklich zuhause fühlt.",
    },
    services: {
      heading: "Ausstattung & Service",
      items: [
        "Flexibler Check‑in in Eigenregie",
        "Schnelles WLAN und Smart TV",
        "Voll ausgestattete Küche mit Kaffeemaschine",
        "Hochwertige Bettwäsche und Badeutensilien",
        "Tipps zu Ausflügen, Weinstuben und lokalen Besonderheiten",
        "Kurze Reaktionszeiten per WhatsApp",
      ],
    },
    testimonials: {
      heading: "Das sagen unsere Gäste",
      body:
        "Nach dem Aufenthalt können Gäste auf Airbnb eine Bewertung abgeben. Alle Eindrücke finden Sie auf der offiziellen Anzeigenseite.",
      cta: "Bewertungen auf Airbnb ansehen",
      ctaAria: "Öffnet die Airbnb‑Anzeige in einem neuen Tab mit Gästebewertungen",
    },
    contacts: {
      heading: "Kontakt",
      body:
        "Für Verfügbarkeit, Preise und Sonderwünsche erreichen Sie uns per WhatsApp – wir antworten zeitnah mit allem für Ihren Aufenthalt.",
      emailLinkAria: "E‑Mail senden an",
      mailSubject: "Note tra le Mura — Anfrage & Verfügbarkeit",
      mailBodyIntro:
        "Guten Tag,\n\nich interessiere mich für die Ferienwohnung Note tra le Mura in Lucca.\n\n",
      whatsapp: "Schreiben Sie uns",
      whatsappAria: "WhatsApp öffnen und Nachricht senden",
      mapFrameTitle: "Lucca, Umgebung Via Pelleria 14 (OpenStreetMap)",
      mapLinkAria: "Karte in OpenStreetMap öffnen: Via Pelleria 14, Lucca",
      facebookAria: "Facebook-Seite von Note tra le Mura öffnen",
      instagramAria: "Instagram-Profil von Note tra le Mura öffnen",
      headerSocialNavAria: "Social-Links (Facebook und Instagram)",
    },
    legal: {
      widgetAria: "Hinweise im Seitenfuss",
      ownerLabel: "Inhaber",
      pending: "Wird bekanntgegeben",
      linkPrivacy: "Datenschutz",
      linkCookies: "Cookies",
      linkLuccaComics: "Lucca Comics",
    },
    privacy: {
      title: "Datenschutzerklärung",
      backToHome: "Zur Startseite",
      metaDescription:
        "Datenschutzerklärung (DSGVO) für Webseite und Kontaktwege von Note tra le Mura, Ferienwohnung in Lucca.",
      sections: [
        {
          heading: "Einführung",
          body: "Diese Information beschreibt die Verarbeitung personenbezogener Daten über diese Website und verbundene Kontaktkanäle (einschließlich WhatsApp) für die kurzfristige Vermietung „Note tra le Mura“ im historischen Zentrum von Lucca. Sie erfolgt gemäß Art. 13 und 14 der Verordnung (EU) 2016/679 (DSGVO) sowie den einschlägigen Vorschriften des italienischen Datenschutzrechts.",
        },
        {
          heading: "Verantwortlicher",
          body: "Verantwortlich ist der/die Inhaber/in der Beherbergung. Bezeichnung, Adresse, Steuernummer bzw. USt‑IdNr. und betriebliche Kontaktdaten finden sich in der Fusszeile der Website (sofern eingetragen) und werden in jedem Fall bei Buchung bzw. Anreise mitgeteilt, falls abweichend.",
        },
        {
          heading: "Kategorien personenbezogener Daten",
          body: "Identifikations- und Kontaktdaten (Name, E‑Mail, Telefon, Inhalte der Nachrichten); Daten zur Durchführung des Aufenthalts und zur Erfüllung gesetzlicher Pflichten (einschließlich Meldewesen, soweit anwendbar); technische Nutzungsdaten (IP‑Adresse, Zugriffszeit, Browsertyp, besuchte Seiten, Fehlercodes) aus den Hosting- und Sicherheitsprotokollen.",
        },
        {
          heading: "Zwecke, Rechtsgrundlagen und Speicherfristen",
          body: "Die Verarbeitung erfolgt zur Beantwortung von Anfragen, Buchungsabwicklung und Durchführung des Aufenthalts (Rechtsgrundlage: Maßnahmen vor Vertragsabschluss und Vertragserfüllung, Art. 6 Abs. 1 lit. b DSGVO); zur Erfüllung buchhalterischer, steuerlicher und rechtlicher Pflichten, einschließlich beherbergungsrechtlicher Vorgaben (Art. 6 Abs. 1 lit. c DSGVO); zur Wahrung von Rechten innerhalb und ausserhalb eines Gerichtsverfahrens (Art. 6 Abs. 1 lit. f DSGVO); zur Gewährleistung der Sicherheit der Website und zur Verhinderung von Missbrauch (Art. 6 Abs. 1 lit. f DSGVO). Speicherfristen orientieren sich an den jeweiligen Zwecken und gesetzlichen Aufbewahrungsfristen.",
        },
        {
          heading: "Verarbeitung, Empfänger und Drittlandtransfers",
          body: "Die Verarbeitung erfolgt mit elektronischen und gegebenenfalls auch papiergebundenen Verfahren unter Beachtung der Grundsätze der Rechtmässigkeit, Transparenz, Datenminimierung und Speicherbegrenzung. Zugriff haben befugte Mitarbeiter, Kooperationspartner und unverzichtbare Dienstleister (z. B. Hosting, E‑Mail, Buchungssysteme) als ggf. beauftragte Auftragsverarbeiter. Drittlandtransfers hängen von den tatsächlich genutzten Diensten ab; wo erforderlich, werden geeignete Garantien (z. B. Standardvertragsklauseln der EU‑Kommission) eingesetzt.",
        },
        {
          heading: "Rechte betroffener Personen",
          body: "Gemäss Art. 15–22 DSGVO stehen Ihnen Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit (soweit anwendbar) und Widerspruch gegen bestimmte Verarbeitungen aufgrund berechtigten Interesses zu; ein erteiltes Einverständnis kann widerrufen werden, ohne die Rechtmässigkeit der bis dahin erfolgten Verarbeitung zu berühren. Anträge richten Sie an den oben genannten Verantwortlichen. Zudem können Sie Beschwerde bei der italienischen Datenschutzaufsichtsbehörde (Garante, www.garanteprivacy.it) einlegen.",
        },
        {
          heading: "Änderungen",
          body: "Der Verantwortliche kann diese Information bei rechtlichen oder organisatorischen Anpassungen aktualisieren. Bitte prüfen Sie den Text regelmässig.",
        },
      ],
    },
    cookies: {
      title: "Cookie‑Hinweis",
      backToHome: "Zur Startseite",
      metaDescription:
        "Cookie-Informationen für die Website Note tra le Mura: notwendige technische Cookies, Sprache, Browser-Einstellungen.",
      sections: [
        {
          heading: "Was Cookies sind",
          body: "Cookies sind kleine Textdateien, die von Websites an Ihr Endgerät gesendet und dort gespeichert werden, um bei einem erneuten Besuch erneut an die Website übermittelt zu werden. Sie dienen u. a. dazu, Sitzungen aufrechtzuerhalten, Spracheinstellungen zu speichern oder technische bzw. aggregierte statistische Informationen zu verarbeiten.",
        },
        {
          heading: "Unbedingt erforderliche technische Cookies",
          body: "Diese Website nutzt für den technischen Betrieb, die Sicherheit (z. B. Schutz vor Spam und Missbrauch) und – sofern eingerichtet – für die Merksprache streng notwendige Cookies bzw. ähnliche Technologien, für die gemäss geltendem Recht oft keine Einwilligung erforderlich ist, weil sie unverzichtbar für den angeforderten Dienst sind.",
        },
        {
          heading: "Cookies Dritter und Analyse",
          body: "Sollten künftig z. B. Analyse, eingebettete Karten, Social‑Buttons oder Videos externer Anbieter aktiviert werden, können dadurch Cookies oder Kennungen Dritter mit durch deren Richtlinien geregelten Speicherfristen gesetzt werden. Dann werden Zwecke und ggf. erforderliche Einwilligungen in einem Banner oder Einstellungsdialog beschrieben.",
        },
        {
          heading: "Einstellungen im Browser",
          body: "Sie können Ihren Browser so einstellen, dass Sie über Cookies informiert werden, dass Cookies gelöscht oder blockiert werden. Anleitungen finden sich in der Hilfe Ihres Browsers (Chrome, Firefox, Safari, Edge u. a.). Das Deaktivieren technisch notwendiger Cookies kann die Funktionalität der Seite einschränken.",
        },
        {
          heading: "Weitere Informationen",
          body: "Weitere Informationen bieten die Hinweise des Garante für den Datenschutz in Italien (www.garanteprivacy.it) sowie die Datenschutzerklärung zu personenbezogenen Daten allgemein.",
        },
      ],
    },
    cookieBanner: {
      barAria: "Hinweis zu Cookies und Einstellungen",
      message:
        "Wir setzen technisch notwendige Cookies für den Betrieb der Website und die Sprachwahl. Keine Profilierung, kein Marketing. Details in der Cookie‑Information.",
      accept: "Akzeptieren",
      preferences: "Einstellungen",
      policyLink: "Cookie‑Hinweis",
      panelTitle: "Cookie‑Einstellungen",
      panelClose: "Schliessen",
      necessaryTitle: "Unbedingt erforderlich",
      necessaryDesc:
        "Stets aktiv: Sicherheit, Sprache, grundlegende Funktionen. Nach geltendem Recht ist hierfür in der Regel keine Einwilligung nötig.",
      optionalIntro: "Weitere Kategorien",
      optionalNone:
        "Derzeit werden keine optionalen Analyse-, Marketing- oder Drittanbieter‑Cookies verwendet.",
      savePreferences: "Einstellungen speichern",
    },
    fabWhatsappAria: "WhatsApp öffnen",
    galleryPage: {
      back: "Zur Startseite",
      photoAltSuffix: "Foto",
      metaDescription:
        "{room} — Fotos und Details. Note tra le Mura, Apartment in der Altstadt von Lucca.",
    },
    whatsappMessage:
      "Guten Tag, ich hätte gern Informationen zu Note tra le Mura (Ferienwohnung in Lucca).",
    luccaComics: {
      metaDescription:
        "Unterkunft in Lucca für Lucca Comics & Games: Ferienapartment Note tra le Mura, Via Pelleria 14, in der Altstadt innerhalb der Mauern. FAQ, Direktkontakt und Buchung (WhatsApp, E‑Mail) über diese Seite.",
      title: "Unterkunft in Lucca zu Lucca Comics & Games",
      backToHome: "Zur Startseite",
      heroSlideshowAria:
        "Bilderserie: Lucca Comics & Games und Festivalstimmung",
      heroSlideAlts: [
        "Lucca Comics, Bild 1",
        "Lucca Comics, Bild 2",
        "Lucca Comics, Bild 3",
      ],
      intro:
        "Lucca Comics & Games zieht jeden Herbst Gäste aus ganz Europa an. Wohnen innerhalb des Walls ist strategisch: das Auto steht draussen, vorm Ring der Mauern, und der Alltag während des Festivals leidet weniger unter Parkplatz-Stress. So geniessen Sie die Stimmung des Comics-Events in Ruhe, zu viert, zu sechst, mit Freunden oder Verwandten (bis 6 Gäste). Eine Nacht in der historischen Innenstadt erspart Fahrten und schenkt Ruhe. Note tra le Mura ist ein liebevoll eingerichtetes Apartment. Offizielle Daten auf der Website von Lucca Comics & Games; Verfügbarkeit gern per WhatsApp oder E‑Mail.",
      galleryTitle: "Die Wohnung innerhalb der Mauern",
      galleryImageAlts: [
        "Wohnzimmer, Note tra le Mura, Lucca",
        "Schlafzimmer 1, Note tra le Mura, Lucca",
        "Schlafzimmer 2, Note tra le Mura, Lucca",
        "Wohnzimmer, weitere Ansicht, Note tra le Mura, Lucca",
      ],
      sections: [
        {
          heading: "Lage & Adresse",
          body:
            "Note tra le Mura liegt in der Via Pelleria 14, 55100 Lucca, innerhalb des historischen Walls, fußgängerfreundlich. Richtwerte zu Fuss: grob 10 Minuten zum Padiglione Carducci, grob 6 Minuten zur Piazza San Michele in Foro, grob 8 Minuten zur Piazza Napoleone (abhängig von Weg und Tempo). Dazu Fillungo, Anfiteatro, Dom, wie in Karten-Apps und auf gängigen Buchungsportalen. Adresse und CIN im Fuss jeder Seite.",
        },
        {
          heading: "Warum die Altstadt während des Festivals",
          body:
            "Gastronomie und Festivalgeschehen sitzen in jenen Tagen im Zentrum. Eine Wohnung innerhalb der Mauern ist strategisch: morgens nicht neu ums Parken sorgen, tagsüber zu Fuss zwischen Padiglione, Plätzen und Gassen, abends in Ruhe zu sechst die Atmosphäre teilen. Das bedeutet leichtere Logistik, flexiblere Zeiten, behaglichen Rückweg bei Regen, und trotzdem ruhig gelegene Räume abseits des schwersten Durchgangsverkehrs.",
        },
        {
          heading: "Direktbuchtung",
          body:
            "Auf der Website sehen Sie Fotos, Leistungen, Kalender und Kontakte. Wenn in Festivalzeiten die Nachfrage hoch ist, führen wir Ihre Anfrage gern persönlich, damit Abläufe, Zahl der Gäste und praktische Details klar bleiben. Preise und Regeln (z. B. Mindestaufenthalt) nennen wir bei echter Verfügbarkeit.",
        },
        {
          heading: "Vorab klären",
          body:
            "Lucca lebt in jenen Tagen. Planen Sie Anreise, Gepäck und Check-in-Fenster früh, sprechen Sie uns auf Sonderfälle (Kinder, Homeoffice) an. Wir antworten realistisch und ohne vage Versprechungen.",
        },
      ],
      faqTitle: "Häufige Fragen",
      faq: [
        {
          question: "Passt die Wohnung zu Besucherinnen und Besuchern des Comics-Festivals?",
          answer:
            "Ja, für bis zu 6 Personen geeignet—ideal, um den Festival-Tag mit Freunden oder Verwandten zu teilen, zentral, viel zu Fuss, abends in gepflegter Ruhe. Sonderwünsche klären wir vorab schriftlich.",
        },
        {
          question: "Wie buche ich direkt?",
          answer:
            "Per WhatsApp oder E-Mail, über die Home (Abschnitt Kontakt) und die Verweise auf dieser Seite. Wir nennen Ihnen die reale Verfügbarkeit und die nächsten Schritte.",
        },
        {
          question: "Wie weit ist es zur Fiera oder wichtigsten Laufwegen?",
          answer:
            "Richtwerte ab der Wohnung: grob 10 Gehminuten zum Padiglione Carducci, grob 6 Minuten zur Piazza San Michele in Foro, grob 8 Minuten zur Piazza Napoleone—je nach Weg, Tempo, Programm. Vorteil der Lage in den Mauern: im Festivalalltag meist weniger dauernden Parkplatz-Stress, viele Wege laufen Sie direkt ab der Haustür ohne neues Umparken.",
        },
        {
          question: "Wo parke ich? Welcher Parkplatz ist am nächsten?",
          answer:
            "Ausserhalb der Mauern eignet sich oft Parcheggio Palatucci (Westen, Via delle Tagliate di Sant’Anna). Vom Fussgängerzugang in die Altstadt (Richtung Porta San Donato oder Bastione Santa Croce) sind es üblicherweise grob 8 Gehminuten ins Zentrum, plus ein paar Minuten zur Via Pelleria. Wohnen innerhalb des Walls verringert in der Regel den Tagesstress mit wiederholtem Umparken; Plätze, Carducci, Festival laufen Sie überwiegend zu Fuss. Den Parkplatz betreiben nicht wir; Tarife bitte vor Ort bzw. beim Betreiber prüfen.",
        },
        {
          question: "Ist es trotz Festival ruhig?",
          answer:
            "Die Stadt wimmelt, doch die Wohnung liegt wohnlich und nachts meist günstiger als an grossen Durchfahrstrassen. Bei Geräuschempfindlichkeit sprechen Sie uns bitte an.",
        },
        {
          question: "Gibt es Mindestaufenthalte oder Sonderegeln?",
          answer:
            "In Hochsaison und beim Festival fordern wir oft Mindestnächte und zeitlich eingrenzbare Zugangsfenster, damit alles reibungslos klappt. Details vereinbaren wir mit Ihnen in der Anfrage.",
        },
        {
          question: "Was gehört in die erste Nachricht?",
          answer:
            "Gewünschte Daten, Gästezahl und einschränkende Anreise- oder Arbeitszeiten. Je präziser, desto hilfreicher unsere Rückmeldung.",
        },
      ],
      cta:
        "Für Termine, freie Nächte und Direktkontakt öffnen Sie in der Home den Abschnitt Kontakt.",
      ctaToContacts: "Kontaktieren Sie uns",
      homeComicsTeaser:
        "Lucca Comics & Games: Wohnen im Zentrum (Via Pelleria 14) —",
      homeComicsLinkText: "eigene Seite & FAQ",
    },
  },
  sr: {
    meta: {
      title: `${brand} | Apartman u Luci`,
      description:
        "Apartman u centru Luke, unutar gradskih zidina (Via Pelleria 14). Note tra le Mura: galerija, kalendar dostupnosti i direktan kontakt za rezervaciju.",
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
    testimonials: {
      heading: "Šta kažu gosti",
      body:
        "Posle boravka, gosti mogu ostaviti recenziju na Airbnb-u. Iskustva možete pročitati na zvaničnoj stranici oglasa.",
      cta: "Pogledajte recenzije na Airbnb-u",
      ctaAria: "Otvara Airbnb oglas u novoj kartici sa recenzijama gostiju",
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
      mapFrameTitle: "Luka, zona Via Pelleria 14 (OpenStreetMap)",
      mapLinkAria: "Otvorite mapu na OpenStreetMap: Via Pelleria 14, Luka",
      facebookAria: "Otvorite Facebook stranicu Note tra le Mura",
      instagramAria: "Otvorite Instagram profil Note tra le Mura",
      headerSocialNavAria: "Društvene mreže (Facebook i Instagram)",
    },
    legal: {
      widgetAria: "Informacije u podnožju stranice",
      ownerLabel: "Vlasnik",
      pending: "Dostaviti",
      linkPrivacy: "Privatnost",
      linkCookies: "Kolačići",
      linkLuccaComics: "Lucca Comics",
    },
    privacy: {
      title: "Politika privatnosti",
      backToHome: "Povratak na početnu",
      metaDescription:
        "Politika privatnosti i obrada ličnih podataka (GDPR) za sajt i kontakt Note tra le Mura u Luci.",
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
      metaDescription:
        "Politika kolačića na sajtu Note tra le Mura: neophodni tehnički kolačići, jezik, upravljanje u pregledaču.",
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
      metaDescription:
        "{room} — fotografije. Note tra le Mura, apartman u centru Luke.",
    },
    whatsappMessage:
      "Zdravo, želim informacije o apartmanu Note tra le Mura u Luci.",
    luccaComics: {
      metaDescription:
        "Smeštaj u Luci za Lucca Comics: apartman Note tra le Mura, Via Pelleria 14, istorijski centar unutar zidina. Odgovori na uobičajena pitanja, direktan kontakt i rezervacija (WhatsApp, e-pošta) preko ovog sajta.",
      title: "Smeštaj u Luci za Lucca Comics & Games",
      backToHome: "Povratak na početnu",
      heroSlideshowAria:
        "Slike u krug: Lucca Comics i atmosfera festivala",
      heroSlideAlts: [
        "Lucca Comics, fotografija 1",
        "Lucca Comics, fotografija 2",
        "Lucca Comics, fotografija 3",
      ],
      intro:
        "Lucca Comics & Games svake jeseni okuplja posetioce iz cele Evrope. Život u stanu iza zidina je strateški: auto ostaje van zidina, pa u svakodnevnici festivala imate manje stresa oko parkinga i možete u miru da uživate u atmosferi Comicsa, u društvu do 6 gostiju — sa prijateljima ili rodbinom. Noćenje u centru olakšava dan; Note tra le Mura je pažljivo uređen apartman. Zvanične datume proverite na sajtu Lucca Comics & Games; za termine i rezervaciju pišite na WhatsApp ili e-poštu.",
      galleryTitle: "Apartman iza zidina",
      galleryImageAlts: [
        "Dnevna soba, Note tra le Mura, Luka",
        "Spavaća soba 1, Note tra le Mura, Luka",
        "Spavaća soba 2, Note tra le Mura, Luka",
        "Dnevna soba, drugi ugao, Note tra le Mura, Luka",
      ],
      sections: [
        {
          heading: "Gde se nalazimo",
          body:
            "Apartman Note tra le Mura je na adresi Via Pelleria 14, 55100 Luka, unutar gradskih zidina, pešačka zona. Orijentaciono: otprilike 10 minuta hoda do Padiglione Carducci, otprilike 6 minuta do trga San Michele in Foro, otprilike 8 minuta do trga Napoleone (zavisi od staze i tempa). U blizini su Filungo, anfiteatar, katedrala — proverite na mapi i na portalima za rezervacije. Adresa i CIN u podnožju svake stranice.",
        },
        {
          heading: "Zašto centar tokom festivala",
          body:
            "U tim danima su restorani i dešavanja u centru. Apartman unutar zidina je strateška baza za Comics: ne ulazite iznova u stres oko parkinga svakog jutra, peške idete između Padiglionea, trgova i uličica, a u stan se vraćate u miru da podelite utisak do šestoro. Manje skitnje, fleksibilniji raspored, lakše vraćanje posle kiše, mirniji kontekst od glavnih tranzitnih saobraćajnica — uz punu festivalsku atmosferu.",
        },
        {
          heading: "Direktna rezervacija",
          body:
            "Na sajtu su fotografije, usluge, kalendar i kontakti. Kad je potražnja visoka, radimo direktno sa vama oko termina, broja osoba i praktičnih detalja, bez posrednika. Cene i pravila (npr. minimum noći) dogovaramo po stvarnoj raspoloživosti.",
        },
        {
          heading: "Šta proveriti pre rezervacije",
          body:
            "Luka u tim danima je živahna. Isplanirajte dolazak, prtljag i prozor za prijavu; javite posebne potrebe (deca, rad od kuće). Dajemo realistične odgovore, bez praznih obećanja.",
        },
      ],
      faqTitle: "Često postavljana pitanja",
      faq: [
        {
          question: "Da li je apartman dobar izbor za posetioce Comicsa?",
          answer:
            "Da, smeštaj je do 6 gostiju — dobro da festival podelite sa prijateljima ili rodbinom, boravak u centru, šetnja, miran smeštaj. Za neobične zahteve napišite pre odluke o rezervaciji.",
        },
        {
          question: "Kako mogu da rezervišem direktno?",
          answer:
            "Preko WhatsApp-a ili e-pošte, putem sekcije Kontakt na početnoj stranici ili veze na ovoj stranici. Javljamo stvarne slobodne termine i sledeće korake.",
        },
        {
          question: "Koliko je daleko do zone sajma ili glavnih pravaca?",
          answer:
            "Orijentaciono hoda: otprilike 10 minuta do Padiglione Carducci, otprilike 6 do piazza San Michele in Foro, otprilike 8 do piazza Napoleone — zavisi od staze i tempa, programa i ulaza. Prednost stana u zidinama je manje dnevne brige oko parkiranja: često festival obilazite peške od „kuće” bez novog traganja za mestom do odlaska.",
        },
        {
          question: "Gde mogu da parkiram? Koje je parkiralište najbliže?",
          answer:
            "Izvana, van zidina, praktičan izbor je Parcheggio Palatucci (zapad, Via delle Tagliate di Sant’Anna). Od pešičkog ulaza (prema vratima San Donato ili bastionu Santa Croce) obično oko 8 minuta hoda do starog grada, pa malo do Pelleria. Pošto ste unutar zidina, tokom dana ređe u petlji oko parcheggija — trg, Carducci i festival najčešće peške. Ne upravljamo parkiralištem; cene proverite na licu mesta.",
        },
        {
          question: "Da li je tiho usred festivala?",
          answer:
            "Grad je tada bučniji, ali smeštaj je u stambenom kontekstu mirnijem od križanja velikih ulica. Ako ste osetljivi na zvuk, slobodno pišite.",
        },
        {
          question: "Ima li minimum noći ili posebnih pravila tog perioda?",
          answer:
            "U vrhunskoj sezoni i na festivalu često imamo minimum noći prozore prijave, radi organizacije. Detalje dogovorimo u prepisci.",
        },
        {
          question: "Šta u prvoj poruci?",
          answer:
            "Datume, broj gostiju i ograničenja u dolasku ili na poslu, ako ih ima. Što jasniji zahtev, to korisniji odgovor.",
        },
      ],
      cta:
        "Za termine, raspoloživost i direktnu rezervaciju otvorite Kontakt na početnoj stranici.",
      ctaToContacts: "Kontaktirajte nas",
      homeComicsTeaser:
        "Lucca Comics & Games: smeštaj u centru (Via Pelleria 14) —",
      homeComicsLinkText: "posebna stranica i pitanja",
    },
  },
};
