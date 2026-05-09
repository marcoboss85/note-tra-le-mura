import type { Locale } from "@/i18n/config";

export type TravelGuide = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
    links?: { label: string; href: string }[];
  }[];
  cta: string;
  ctaHref: string;
};

type GuideSlug =
  | "where-to-stay-lucca-inside-walls"
  | "best-restaurants-lucca-local-food";

const googleMapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const foodGuideLinks = {
  conad: {
    label: "Conad City / Sapori & Dintorni Conad",
    href: googleMapsSearch("Conad City Sapori e Dintorni Conad Via Vittorio Emanuele II 48 Lucca"),
  },
  giulio: {
    label: "Trattoria da Giulio in Pelleria",
    href: googleMapsSearch("Trattoria da Giulio in Pelleria Via delle Conce 45 Lucca"),
  },
  buca: {
    label: "Buca di Sant’Antonio",
    href: googleMapsSearch("Buca di Sant'Antonio Lucca"),
  },
  leo: {
    label: "Trattoria da Leo",
    href: googleMapsSearch("Trattoria da Leo Lucca"),
  },
  baralla: {
    label: "Osteria Baralla",
    href: googleMapsSearch("Osteria Baralla Lucca"),
  },
  ubaldo: {
    label: "Trattoria da Ubaldo",
    href: googleMapsSearch("Trattoria da Ubaldo Lucca"),
  },
};

const restaurantLinks = [
  foodGuideLinks.giulio,
  foodGuideLinks.buca,
  foodGuideLinks.leo,
  foodGuideLinks.baralla,
  foodGuideLinks.ubaldo,
];

const parkingLinks = {
  palatucci: {
    label: "Parcheggio Palatucci",
    href: googleMapsSearch("Parcheggio Palatucci Via delle Tagliate di Sant'Anna Lucca"),
  },
};

export const travelGuides: Record<GuideSlug, Record<Locale, TravelGuide>> = {
  "where-to-stay-lucca-inside-walls": {
    en: {
      title: "Where to stay in Lucca inside the walls",
      metaTitle: "Where to stay in Lucca inside the walls | Note tra le Mura",
      metaDescription:
        "A practical guide for international travellers choosing where to stay in Lucca: old town, inside the walls, parking, station, bus and walking distances.",
      intro:
        "For many visitors, the best Lucca stay is not about having a car at the door. It is about choosing a calm base inside the Renaissance walls, then walking to the city’s squares, restaurants, shops and evening life.",
      sections: [
        {
          heading: "Why stay inside the walls",
          body:
            "Lucca’s historic centre is compact, flat and made for walking. Staying inside the walls means you can leave the apartment in the morning, reach Piazza San Michele, Piazza Napoleone, Via Fillungo or the city walls on foot, and return during the day without reorganising parking or transport.",
        },
        {
          heading: "Old town vs outside the walls",
          body:
            "Accommodation outside the walls can work well for drivers, but international guests often prefer the old town because the experience is more immediate: breakfast nearby, evening walks, restaurants close by and less dependence on taxis or repeated car journeys.",
        },
        {
          heading: "Parking and arrival",
          body:
            "Lucca’s centre has limited-traffic areas, so most guests park outside or near the walls and continue on foot with luggage. A convenient option is Parcheggio Palatucci, west of the walls on Via delle Tagliate di Sant’Anna; from the pedestrian access towards Porta San Donato or the Santa Croce bastion it is typically about 8 minutes on foot to the old town, then a few more minutes to Via Pelleria. From Note tra le Mura, the central bus station is about 5 minutes on foot and Lucca railway station is about 20 minutes on foot.",
          links: [parkingLinks.palatucci],
        },
        {
          heading: "Who this area suits",
          body:
            "This part of Lucca is a good fit for families, couples and small groups who want restaurants, monuments and quiet streets close together. The apartment is on the second floor of a historic building with two short flights of stairs and no lift, so it is best for guests comfortable with stairs.",
        },
      ],
      cta: "See the apartment",
      ctaHref: "/en",
    },
    it: {
      title: "Dove soggiornare a Lucca dentro le mura",
      metaTitle: "Dove soggiornare a Lucca dentro le mura | Note tra le Mura",
      metaDescription:
        "Guida pratica per scegliere dove dormire a Lucca: centro storico, mura, parcheggi, stazione, autobus e distanze a piedi.",
      intro:
        "Per molti ospiti il soggiorno migliore a Lucca non dipende dall’auto sotto casa, ma da una base tranquilla dentro le mura, vicina a piazze, ristoranti e passeggiate.",
      sections: [
        {
          heading: "Perché dormire dentro le mura",
          body:
            "Il centro storico di Lucca è compatto, pianeggiante e piacevole a piedi. Soggiornare dentro le mura permette di raggiungere Piazza San Michele, Piazza Napoleone, Via Fillungo e la passeggiata sulle mura senza riprendere l’auto ogni giorno.",
        },
        {
          heading: "Centro storico o fuori mura",
          body:
            "Dormire fuori dalle mura può essere comodo per chi usa spesso l’auto. Il centro storico, invece, è più adatto a chi vuole vivere Lucca con calma: colazione, cena, negozi e monumenti sono tutti vicini.",
        },
        {
          heading: "Parcheggio e arrivo",
          body:
            "Il centro di Lucca include zone a traffico limitato: spesso conviene parcheggiare fuori o vicino alle mura e proseguire a piedi. Un’opzione comoda è il Parcheggio Palatucci, a ovest delle mura in Via delle Tagliate di Sant’Anna; dall’accesso pedonale verso Porta San Donato o il baluardo Santa Croce sono in genere circa 8 minuti a piedi fino al centro storico, poi pochi minuti in più fino a Via Pelleria. Da Note tra le Mura la stazione bus è a circa 5 minuti a piedi; la stazione ferroviaria di Lucca a circa 20 minuti.",
          links: [parkingLinks.palatucci],
        },
        {
          heading: "Per chi è adatta questa zona",
          body:
            "La zona è adatta a famiglie, coppie e piccoli gruppi che cercano ristoranti, monumenti e strade tranquille nello stesso raggio. L’appartamento è al secondo piano di un edificio storico, senza ascensore.",
        },
      ],
      cta: "Vedi l’appartamento",
      ctaHref: "/it",
    },
    de: {
      title: "Wo in Lucca innerhalb der Stadtmauern übernachten",
      metaTitle:
        "Wo in Lucca innerhalb der Stadtmauern übernachten | Note tra le Mura",
      metaDescription:
        "Praktischer Guide für Lucca: Altstadt, Stadtmauern, Parken, Bahnhof, Bus und Wege zu Fuss.",
      intro:
        "Für viele Gäste ist die beste Basis in Lucca nicht ein Parkplatz direkt vor der Tür, sondern eine ruhige Wohnung innerhalb der Stadtmauern.",
      sections: [
        {
          heading: "Warum innerhalb der Mauern wohnen",
          body:
            "Die Altstadt von Lucca ist kompakt, flach und ideal zu Fuss. Piazza San Michele, Piazza Napoleone, Via Fillungo und die Stadtmauer sind schnell erreichbar.",
        },
        {
          heading: "Altstadt oder ausserhalb",
          body:
            "Ausserhalb der Mauern kann für Autofahrer praktisch sein. In der Altstadt erleben Sie Lucca direkter: Cafes, Restaurants, Geschäfte und Spaziergänge liegen nahe beieinander.",
        },
        {
          heading: "Parken und Anreise",
          body:
            "Das Zentrum hat verkehrsbeschränkte Zonen. Viele Gäste parken ausserhalb oder nahe der Mauern und gehen zu Fuss weiter. Eine praktische Option ist Parcheggio Palatucci westlich der Mauern an der Via delle Tagliate di Sant’Anna; vom Fussweg Richtung Porta San Donato oder Santa-Croce-Bastion sind es meist etwa 8 Minuten zu Fuss bis in die Altstadt, dann noch wenige Minuten bis Via Pelleria. Von Note tra le Mura ist der Busbahnhof etwa 5 Minuten entfernt, der Bahnhof Lucca etwa 20 Minuten.",
          links: [parkingLinks.palatucci],
        },
        {
          heading: "Für wen diese Lage passt",
          body:
            "Die Lage passt zu Familien, Paaren und kleinen Gruppen. Die Wohnung liegt im zweiten Stock eines historischen Gebäudes ohne Aufzug.",
        },
      ],
      cta: "Apartment ansehen",
      ctaHref: "/de",
    },
    sr: {
      title: "Gde odsesti u Luci unutar zidina",
      metaTitle: "Gde odsesti u Luci unutar zidina | Note tra le Mura",
      metaDescription:
        "Praktičan vodič za smeštaj u Luci: stari grad, zidine, parking, stanica, autobus i pešačke udaljenosti.",
      intro:
        "Za mnoge goste najbolji boravak u Luci znači mirnu bazu unutar zidina, blizu trgova, restorana i šetnji.",
      sections: [
        {
          heading: "Zašto unutar zidina",
          body:
            "Istorijski centar Luke je kompaktan, ravan i pogodan za pešačenje. Od smeštaja se lako stiže do trgova, prodavnica, restorana i šetališta na zidinama.",
        },
        {
          heading: "Stari grad ili izvan zidina",
          body:
            "Smeštaj izvan zidina može biti praktičan za vozače. Unutar starog grada doživljaj Luke je neposredniji: doručak, večera i večernje šetnje su blizu.",
        },
        {
          heading: "Parking i dolazak",
          body:
            "Centar ima zone ograničenog saobraćaja. Gosti obično parkiraju izvan ili blizu zidina i nastavljaju peške. Praktična opcija je Parcheggio Palatucci, zapadno od zidina u Via delle Tagliate di Sant’Anna; od pešačkog ulaza prema Porta San Donato ili bastionu Santa Croce obično ima oko 8 minuta peške do starog grada, a zatim još nekoliko minuta do Via Pelleria. Od Note tra le Mura autobuska stanica je oko 5 minuta peške, a železnička stanica u Luci oko 20 minuta.",
          links: [parkingLinks.palatucci],
        },
        {
          heading: "Za koga je ova lokacija",
          body:
            "Lokacija odgovara porodicama, parovima i malim grupama. Apartman je na drugom spratu istorijske zgrade, bez lifta.",
        },
      ],
      cta: "Pogledaj apartman",
      ctaHref: "/sr",
    },
  },
  "best-restaurants-lucca-local-food": {
    en: {
      title: "Typical restaurants and local food in Lucca",
      metaTitle:
        "Typical restaurants and local food in Lucca | Note tra le Mura",
      metaDescription:
        "A practical food guide for guests staying in Lucca old town: nearest supermarket, typical restaurants, local dishes, booking tips and what to try near the city walls.",
      intro:
        "A practical guide for when you are already in the apartment: the nearest supermarket, typical Lucca dishes, and central restaurants to consider for a relaxed dinner inside the walls.",
      sections: [
        {
          heading: "Nearest supermarket from the apartment",
          body:
            "For groceries, water, breakfast or a simple dinner at home, the closest useful option is Conad City / Sapori & Dintorni Conad at Via Vittorio Emanuele II, 48. It is about 650 metres from Via Pelleria 14, roughly 8-10 minutes on foot through the old town. Opening hours can change, especially on Sundays and holidays, so check the current times before going.",
          links: [foodGuideLinks.conad],
        },
        {
          heading: "What to taste in Lucca",
          body:
            "Look for tordelli lucchesi, farro soup, seasonal vegetable dishes, Tuscan cured meats, local extra virgin olive oil and buccellato, the traditional Lucca sweet bread with aniseed and raisins.",
        },
        {
          heading: "Typical restaurants to know",
          body:
            "For a traditional dinner, start with Trattoria da Giulio in Pelleria, one of Lucca’s historic trattorias and one of the closest options to the apartment (Via delle Conce, 45). Other central names to check are Buca di Sant’Antonio, Trattoria da Leo, Osteria Baralla and Trattoria da Ubaldo, known for its very characteristic atmosphere and personality. Book ahead, especially at weekends, during Lucca Comics and in summer.",
          links: restaurantLinks,
        },
        {
          heading: "How to choose from Via Pelleria",
          body:
            "From Note tra le Mura, you can walk towards Via Fillungo, Piazza Anfiteatro, Piazza San Michele or the lanes around the cathedral. Choose a restaurant by the kind of evening you want: quick trattoria, longer Tuscan dinner, wine bar or family-friendly table.",
        },
        {
          heading: "Booking tips for international guests",
          body:
            "Dinner is often later than in northern Europe, and small restaurants can fill quickly. If you have children, food allergies or a late arrival, book in advance and mention your needs clearly. During Lucca Comics and summer weekends, plan earlier than usual.",
        },
      ],
      cta: "Ask us for local tips",
      ctaHref: "/en#contatti",
    },
    it: {
      title: "Ristoranti tipici e cucina lucchese",
      metaTitle: "Ristoranti tipici e cucina lucchese | Note tra le Mura",
      metaDescription:
        "Guida pratica per mangiare a Lucca: supermercato più vicino, ristoranti tipici, piatti locali, prenotazioni e consigli per chi soggiorna dentro le mura.",
      intro:
        "Una guida pratica per quando siete già in appartamento: supermercato più vicino, piatti tipici lucchesi e ristoranti centrali da valutare per una cena dentro le mura.",
      sections: [
        {
          heading: "Supermercato più vicino all’appartamento",
          body:
            "Per spesa, acqua, colazione o una cena semplice in casa, l’opzione più comoda è Conad City / Sapori & Dintorni Conad in Via Vittorio Emanuele II, 48. Si trova a circa 650 metri da Via Pelleria 14, indicativamente 8-10 minuti a piedi nel centro storico. Gli orari possono cambiare, soprattutto domenica e festivi: meglio controllarli prima di andare.",
          links: [foodGuideLinks.conad],
        },
        {
          heading: "Cosa assaggiare",
          body:
            "Tra i piatti tipici: tordelli lucchesi, zuppa di farro, verdure di stagione, salumi toscani, olio extravergine locale e buccellato, il dolce tradizionale lucchese con anice e uvetta.",
        },
        {
          heading: "Ristoranti tipici da conoscere",
          body:
            "Per una cena tipica, partirei da Trattoria da Giulio in Pelleria, una delle trattorie storiche di Lucca e tra le più vicine all’appartamento (Via delle Conce, 45). Altri nomi centrali da controllare sono Buca di Sant’Antonio, Trattoria da Leo, Osteria Baralla e Trattoria da Ubaldo, molto caratteristica anche per la personalità del ristoratore. Meglio prenotare, soprattutto nei weekend, durante Lucca Comics e in estate.",
          links: restaurantLinks,
        },
        {
          heading: "Come scegliere da Via Pelleria",
          body:
            "Da Note tra le Mura si può camminare verso Via Fillungo, Piazza Anfiteatro, Piazza San Michele o la zona del duomo. La scelta dipende dalla serata: trattoria veloce, cena toscana più lunga, enoteca o tavolo adatto a famiglie.",
        },
        {
          heading: "Consigli di prenotazione",
          body:
            "Nei ristoranti piccoli i posti finiscono rapidamente. Se avete bambini, allergie o arrivo tardi, conviene prenotare prima e spiegare bene le esigenze.",
        },
      ],
      cta: "Chiedici consigli locali",
      ctaHref: "/it#contatti",
    },
    de: {
      title: "Typische Restaurants und lokale Küche in Lucca",
      metaTitle:
        "Typische Restaurants und lokale Küche in Lucca | Note tra le Mura",
      metaDescription:
        "Food-Guide für Lucca: nächster Supermarkt, typische Restaurants, lokale Gerichte, Reservierungstipps und Empfehlungen für Gäste in der Altstadt.",
      intro:
        "Ein praktischer Guide für die Zeit in der Wohnung: nächster Supermarkt, typische Gerichte aus Lucca und zentrale Restaurants für ein entspanntes Abendessen innerhalb der Mauern.",
      sections: [
        {
          heading: "Nächster Supermarkt zur Wohnung",
          body:
            "Für Einkäufe, Wasser, Frühstück oder ein einfaches Abendessen in der Wohnung ist Conad City / Sapori & Dintorni Conad in der Via Vittorio Emanuele II, 48 eine praktische Option. Er liegt etwa 650 Meter von Via Pelleria 14 entfernt, ungefähr 8-10 Minuten zu Fuss durch die Altstadt. Öffnungszeiten können sich ändern, besonders sonntags und an Feiertagen.",
          links: [foodGuideLinks.conad],
        },
        {
          heading: "Was man probieren sollte",
          body:
            "Typisch sind tordelli lucchesi, Farro-Suppe, Gemüsegerichte, toskanische Wurstwaren, lokales Olivenöl und Buccellato, ein süsses Brot mit Anis und Rosinen.",
        },
        {
          heading: "Typische Restaurants",
          body:
            "Für ein traditionelles Abendessen beginnen viele Gäste mit Trattoria da Giulio in Pelleria, einer historischen Trattoria in Lucca und sehr nah an der Wohnung (Via delle Conce, 45). Weitere zentrale Namen sind Buca di Sant’Antonio, Trattoria da Leo, Osteria Baralla und Trattoria da Ubaldo, bekannt für eine sehr charakteristische Atmosphäre und Persönlichkeit. Reservieren Sie besonders am Wochenende, während Lucca Comics und im Sommer.",
          links: restaurantLinks,
        },
        {
          heading: "Auswahl ab Via Pelleria",
          body:
            "Von Note tra le Mura gehen Sie bequem Richtung Via Fillungo, Piazza Anfiteatro, Piazza San Michele oder Domviertel. Wählen Sie je nach Abend: Trattoria, längeres toskanisches Essen, Weinbar oder Familientisch.",
        },
        {
          heading: "Reservierungstipps",
          body:
            "Kleine Restaurants sind schnell voll. Bei Kindern, Allergien oder später Anreise lohnt es sich, früh zu reservieren und die Wünsche klar zu nennen.",
        },
      ],
      cta: "Nach lokalen Tipps fragen",
      ctaHref: "/de#contatti",
    },
    sr: {
      title: "Tipični restorani i lokalna hrana u Luci",
      metaTitle: "Tipični restorani i lokalna hrana u Luci | Note tra le Mura",
      metaDescription:
        "Vodič za hranu u Luci: najbliži supermarket, tipični restorani, lokalna jela, rezervacije i saveti za goste u starom gradu.",
      intro:
        "Praktičan vodič kada ste već u apartmanu: najbliži supermarket, tipična jela iz Luke i centralni restorani za opuštenu večeru unutar zidina.",
      sections: [
        {
          heading: "Najbliži supermarket apartmanu",
          body:
            "Za namirnice, vodu, doručak ili jednostavnu večeru u apartmanu, praktična opcija je Conad City / Sapori & Dintorni Conad u Via Vittorio Emanuele II, 48. Nalazi se oko 650 metara od Via Pelleria 14, otprilike 8-10 minuta peške kroz stari grad. Radno vreme može da se menja, posebno nedeljom i praznicima.",
          links: [foodGuideLinks.conad],
        },
        {
          heading: "Šta probati",
          body:
            "Tipična jela su tordelli lucchesi, supa od farra, sezonsko povrće, toskanske suhomesnate delicije, lokalno maslinovo ulje i buccellato, slatki hleb sa anisom i suvim grožđem.",
        },
        {
          heading: "Tipični restorani",
          body:
            "Za tradicionalnu večeru dobar početak je Trattoria da Giulio in Pelleria, jedna od istorijskih tratorija u Luci i jedna od najbližih apartmanu (Via delle Conce, 45). Druga centralna imena su Buca di Sant’Antonio, Trattoria da Leo, Osteria Baralla i Trattoria da Ubaldo, poznata po veoma karakterističnoj atmosferi i ličnosti restoratera. Rezervacija je korisna vikendom, tokom Lucca Comics i leti.",
          links: restaurantLinks,
        },
        {
          heading: "Kako birati iz Via Pelleria",
          body:
            "Od Note tra le Mura lako se peške ide ka Via Fillungo, Piazza Anfiteatro, Piazza San Michele ili zoni katedrale. Izbor zavisi od večeri: kratka tratorija, duža toskanska večera, vinski bar ili sto za porodicu.",
        },
        {
          heading: "Saveti za rezervaciju",
          body:
            "Mali restorani se brzo popune. Ako imate decu, alergije ili kasni dolazak, rezervišite ranije i jasno navedite potrebe.",
        },
      ],
      cta: "Pitajte nas za lokalne savete",
      ctaHref: "/sr#contatti",
    },
  },
};
