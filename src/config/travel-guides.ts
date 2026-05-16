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
  | "best-restaurants-lucca-local-food"
  | "lucca-in-one-day";

const googleMapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const foodGuideLinks = {
  conad: {
    label: "Conad City / Sapori & Dintorni Conad",
    href: googleMapsSearch("Conad City Sapori e Dintorni Conad Via Vittorio Emanuele II 48 Lucca"),
  },
  turandot: {
    label: "Caffè Turandot",
    href: googleMapsSearch("Caffè Turandot Piazza San Michele Lucca"),
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
  maestri: {
    label: "Piazzale Maestri del Lavoro",
    href: googleMapsSearch("Piazzale Maestri del Lavoro Lucca"),
  },
};

const dayGuideLinks = {
  sanMichele: {
    label: "Piazza San Michele in Foro",
    href: googleMapsSearch("Piazza San Michele in Foro Lucca"),
  },
  fillungo: {
    label: "Via Fillungo",
    href: googleMapsSearch("Via Fillungo Lucca"),
  },
  anfiteatro: {
    label: "Piazza dell'Anfiteatro",
    href: googleMapsSearch("Piazza dell'Anfiteatro Lucca"),
  },
  duomo: {
    label: "Duomo di San Martino",
    href: googleMapsSearch("Duomo di San Martino Lucca"),
  },
  guinigi: {
    label: "Torre Guinigi",
    href: googleMapsSearch("Torre Guinigi Lucca"),
  },
  torreOre: {
    label: "Torre delle Ore",
    href: googleMapsSearch("Torre delle Ore Lucca"),
  },
  mura: {
    label: "Mura di Lucca",
    href: googleMapsSearch("Passeggiata Mura di Lucca"),
  },
  pfanner: {
    label: "Palazzo Pfanner",
    href: googleMapsSearch("Palazzo Pfanner Lucca"),
  },
  puccini: {
    label: "Casa natale di Giacomo Puccini",
    href: googleMapsSearch("Casa natale Giacomo Puccini Lucca"),
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
            "Lucca’s centre has limited-traffic areas, so most guests park outside or near the walls and continue on foot with luggage. A convenient option is Parcheggio Palatucci, west of the walls on Via delle Tagliate di Sant’Anna; from the pedestrian access towards Porta San Donato or the Santa Croce bastion it is typically about 8 minutes on foot to the old town, then a few more minutes to Via Pelleria. For a free parking option, check Piazzale Maestri del Lavoro: it is outside the walls and usually around 15-20 minutes on foot from Via Pelleria 14, depending on the exact spot and pace. Parking rules can change, so always check the signs on arrival. From Note tra le Mura, the central bus station is about 5 minutes on foot and Lucca railway station is about 20 minutes on foot.",
          links: [parkingLinks.palatucci, parkingLinks.maestri],
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
            "Il centro di Lucca include zone a traffico limitato: spesso conviene parcheggiare fuori o vicino alle mura e proseguire a piedi. Un’opzione comoda è il Parcheggio Palatucci, a ovest delle mura in Via delle Tagliate di Sant’Anna; dall’accesso pedonale verso Porta San Donato o il baluardo Santa Croce sono in genere circa 8 minuti a piedi fino al centro storico, poi pochi minuti in più fino a Via Pelleria. Per un parcheggio gratuito, si può controllare Piazzale Maestri del Lavoro: è fuori dalle mura e in genere dista circa 15-20 minuti a piedi da Via Pelleria 14, secondo il punto esatto e il passo. Le regole di sosta possono cambiare, quindi è sempre meglio verificare i cartelli all’arrivo. Da Note tra le Mura la stazione bus è a circa 5 minuti a piedi; la stazione ferroviaria di Lucca a circa 20 minuti.",
          links: [parkingLinks.palatucci, parkingLinks.maestri],
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
            "Das Zentrum hat verkehrsbeschränkte Zonen. Viele Gäste parken ausserhalb oder nahe der Mauern und gehen zu Fuss weiter. Eine praktische Option ist Parcheggio Palatucci westlich der Mauern an der Via delle Tagliate di Sant’Anna; vom Fussweg Richtung Porta San Donato oder Santa-Croce-Bastion sind es meist etwa 8 Minuten zu Fuss bis in die Altstadt, dann noch wenige Minuten bis Via Pelleria. Als kostenlose Parkmöglichkeit können Sie Piazzale Maestri del Lavoro prüfen: Der Platz liegt ausserhalb der Mauern und ist je nach genauem Standort und Tempo meist etwa 15-20 Minuten zu Fuss von Via Pelleria 14 entfernt. Parkregeln können sich ändern, prüfen Sie deshalb immer die Schilder vor Ort. Von Note tra le Mura ist der Busbahnhof etwa 5 Minuten entfernt, der Bahnhof Lucca etwa 20 Minuten.",
          links: [parkingLinks.palatucci, parkingLinks.maestri],
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
            "Centar ima zone ograničenog saobraćaja. Gosti obično parkiraju izvan ili blizu zidina i nastavljaju peške. Praktična opcija je Parcheggio Palatucci, zapadno od zidina u Via delle Tagliate di Sant’Anna; od pešačkog ulaza prema Porta San Donato ili bastionu Santa Croce obično ima oko 8 minuta peške do starog grada, a zatim još nekoliko minuta do Via Pelleria. Za besplatno parkiranje možete proveriti Piazzale Maestri del Lavoro: nalazi se izvan zidina i obično je oko 15-20 minuta peške od Via Pelleria 14, u zavisnosti od tačnog mesta i tempa. Pravila parkiranja mogu da se menjaju, zato uvek proverite znakove po dolasku. Od Note tra le Mura autobuska stanica je oko 5 minuta peške, a železnička stanica u Luci oko 20 minuta.",
          links: [parkingLinks.palatucci, parkingLinks.maestri],
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
        "A practical food guide for guests staying in Lucca old town: breakfast, nearest supermarket, typical restaurants, local dishes, booking tips and what to try near the city walls.",
      intro:
        "A practical guide for when you are already in the apartment: breakfast in a beautiful square, the nearest supermarket, typical Lucca dishes, and central restaurants to consider for a relaxed dinner inside the walls.",
      sections: [
        {
          heading: "Nearest supermarket from the apartment",
          body:
            "For groceries, water, breakfast or a simple dinner at home, the closest useful option is Conad City / Sapori & Dintorni Conad at Via Vittorio Emanuele II, 48. It is about 650 metres from Via Pelleria 14, roughly 8-10 minutes on foot through the old town. Opening hours can change, especially on Sundays and holidays, so check the current times before going.",
          links: [foodGuideLinks.conad],
        },
        {
          heading: "Breakfast in Piazza San Michele",
          body:
            "For a slow breakfast, Piazza San Michele is one of the most beautiful places to start the day. Around the square, places such as Caffè Turandot let you sit with a cappuccino or pastry while looking at the church facade, the morning light and the life of Lucca beginning around you. It is a good choice when you want breakfast to feel like part of the visit, not just a quick stop.",
          links: [foodGuideLinks.turandot],
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
        "Guida pratica per mangiare a Lucca: colazione, supermercato più vicino, ristoranti tipici, piatti locali, prenotazioni e consigli per chi soggiorna dentro le mura.",
      intro:
        "Una guida pratica per quando siete già in appartamento: colazione in una bella piazza, supermercato più vicino, piatti tipici lucchesi e ristoranti centrali da valutare per una cena dentro le mura.",
      sections: [
        {
          heading: "Supermercato più vicino all’appartamento",
          body:
            "Per spesa, acqua, colazione o una cena semplice in casa, l’opzione più comoda è Conad City / Sapori & Dintorni Conad in Via Vittorio Emanuele II, 48. Si trova a circa 650 metri da Via Pelleria 14, indicativamente 8-10 minuti a piedi nel centro storico. Gli orari possono cambiare, soprattutto domenica e festivi: meglio controllarli prima di andare.",
          links: [foodGuideLinks.conad],
        },
        {
          heading: "Colazione in Piazza San Michele",
          body:
            "Per una colazione lenta, Piazza San Michele è uno dei posti più belli dove iniziare la giornata. Intorno alla piazza, locali come Caffè Turandot permettono di sedersi con cappuccino e cornetto guardando la facciata della chiesa, la luce del mattino e la vita di Lucca che comincia. È una scelta ideale quando la colazione diventa già parte della visita, non solo una pausa veloce.",
          links: [foodGuideLinks.turandot],
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
        "Food-Guide für Lucca: Frühstück, nächster Supermarkt, typische Restaurants, lokale Gerichte, Reservierungstipps und Empfehlungen für Gäste in der Altstadt.",
      intro:
        "Ein praktischer Guide für die Zeit in der Wohnung: Frühstück auf einem schönen Platz, nächster Supermarkt, typische Gerichte aus Lucca und zentrale Restaurants für ein entspanntes Abendessen innerhalb der Mauern.",
      sections: [
        {
          heading: "Nächster Supermarkt zur Wohnung",
          body:
            "Für Einkäufe, Wasser, Frühstück oder ein einfaches Abendessen in der Wohnung ist Conad City / Sapori & Dintorni Conad in der Via Vittorio Emanuele II, 48 eine praktische Option. Er liegt etwa 650 Meter von Via Pelleria 14 entfernt, ungefähr 8-10 Minuten zu Fuss durch die Altstadt. Öffnungszeiten können sich ändern, besonders sonntags und an Feiertagen.",
          links: [foodGuideLinks.conad],
        },
        {
          heading: "Frühstück auf der Piazza San Michele",
          body:
            "Für ein ruhiges Frühstück ist die Piazza San Michele einer der schönsten Orte, um den Tag zu beginnen. Rund um den Platz können Sie in Lokalen wie Caffè Turandot mit Cappuccino und Gebäck sitzen und auf die Kirchenfassade, das Morgenlicht und das beginnende Leben in Lucca schauen. So wird das Frühstück schon Teil des Besuchs und nicht nur ein kurzer Stopp.",
          links: [foodGuideLinks.turandot],
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
        "Vodič za hranu u Luci: doručak, najbliži supermarket, tipični restorani, lokalna jela, rezervacije i saveti za goste u starom gradu.",
      intro:
        "Praktičan vodič kada ste već u apartmanu: doručak na lepom trgu, najbliži supermarket, tipična jela iz Luke i centralni restorani za opuštenu večeru unutar zidina.",
      sections: [
        {
          heading: "Najbliži supermarket apartmanu",
          body:
            "Za namirnice, vodu, doručak ili jednostavnu večeru u apartmanu, praktična opcija je Conad City / Sapori & Dintorni Conad u Via Vittorio Emanuele II, 48. Nalazi se oko 650 metara od Via Pelleria 14, otprilike 8-10 minuta peške kroz stari grad. Radno vreme može da se menja, posebno nedeljom i praznicima.",
          links: [foodGuideLinks.conad],
        },
        {
          heading: "Doručak na Piazza San Michele",
          body:
            "Za sporiji doručak, Piazza San Michele je jedno od najlepših mesta za početak dana. Oko trga, lokali kao Caffè Turandot omogućavaju da sednete uz kapućino i pecivo, sa pogledom na fasadu crkve, jutarnje svetlo i život Luke koji počinje oko vas. Dobar je izbor kada doručak želite da bude deo obilaska, a ne samo kratka pauza.",
          links: [foodGuideLinks.turandot],
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
  "lucca-in-one-day": {
    en: {
      title: "Lucca in one day",
      metaTitle: "Lucca in one day | Walking itinerary from the old town | Note tra le Mura",
      metaDescription:
        "A calm one-day walking plan for Lucca from Via Pelleria: morning squares, lunch, city walls or towers, optional museums and evening dinner tips inside the walls.",
      intro:
        "One day in Lucca works best on foot. From Note tra le Mura in Via Pelleria 14 you are already inside the walls: no car needed, short walks to the main squares, and time for a slow lunch and an afternoon on the ramparts or towers.",
      sections: [
        {
          heading: "Start from Via Pelleria",
          body:
            "Leave the apartment after breakfast and walk towards the heart of the old town. Piazza San Michele in Foro is about 6 minutes on foot, Via Fillungo and Piazza dell'Anfiteatro about 8–10 minutes, depending on your pace. If you arrived by car, see our where to stay guide for parking near the walls and walking times to Via Pelleria 14.",
          links: [
            dayGuideLinks.sanMichele,
            {
              label: "where to stay guide",
              href: "/en/where-to-stay-lucca-inside-walls",
            },
          ],
        },
        {
          heading: "Morning: squares and the centre",
          body:
            "A relaxed morning can cover Piazza San Michele in Foro and the church facade, a stroll along Via Fillungo for shops and cafés, then Piazza dell'Anfiteatro with its oval shape and small bars. If you want one church visit, the Duomo di San Martino is a short walk away. You do not need to rush: choose two or three stops and enjoy the pace of the centre.",
          links: [
            dayGuideLinks.sanMichele,
            dayGuideLinks.fillungo,
            dayGuideLinks.anfiteatro,
            dayGuideLinks.duomo,
          ],
        },
        {
          heading: "Lunch",
          body:
            "At midday, keep lunch light and fairly quick: you still have the afternoon ahead. A simple option is a trattoria around Piazza San Michele in Foro; another is to wander into the characteristic lanes of the old town and stop where it looks inviting. Save the long, relaxed meal for the evening. For breakfast, shopping and more restaurant names, see our restaurants and local food guide.",
          links: [
            dayGuideLinks.sanMichele,
            {
              label: "restaurants and local food guide",
              href: "/en/best-restaurants-lucca-local-food",
            },
          ],
        },
        {
          heading: "Afternoon: walls or towers",
          body:
            "After lunch, choose one main activity. Many guests walk part of the Mura di Lucca: the tree-lined path on top of the Renaissance walls is flat and wide, ideal for a slow loop or a bike ride (bike rental in the centre). Alternatively, climb Torre Guinigi with its holm oaks on the roof, or Torre delle Ore for views over the rooftops. One tower plus a short walk on the walls is enough for most visitors.",
          links: [
            dayGuideLinks.mura,
            dayGuideLinks.guinigi,
            dayGuideLinks.torreOre,
            {
              label: "bike rental",
              href: googleMapsSearch("bike rental Lucca historic centre"),
            },
          ],
        },
        {
          heading: "If you still have time",
          body:
            "With energy left, add one extra stop rather than many: Palazzo Pfanner and its garden, or the Casa natale di Giacomo Puccini museum for music lovers. Skip the rest and save a slower evening in a square instead.",
          links: [dayGuideLinks.pfanner, dayGuideLinks.puccini],
        },
        {
          heading: "Evening",
          body:
            "Evening is when to slow down and enjoy dinner properly. Trattoria da Giulio in Pelleria is very close to the apartment: if you book, ask for a table on the terrace when available — in the evening it is beautifully lit and a memorable place to eat outside. Piazza dell'Anfiteatro is another classic choice at night: the oval square glows with lights, and the restaurants around it are ideal for a calm dinner with that view. Book ahead on weekends and in summer. More names and dishes are in our restaurants and local food guide.",
          links: [
            foodGuideLinks.giulio,
            dayGuideLinks.anfiteatro,
            {
              label: "restaurants and local food guide",
              href: "/en/best-restaurants-lucca-local-food",
            },
          ],
        },
      ],
      cta: "See the apartment",
      ctaHref: "/en",
    },
    it: {
      title: "Lucca in un giorno",
      metaTitle: "Lucca in un giorno | Itinerario a piedi dal centro | Note tra le Mura",
      metaDescription:
        "Piano di visita per un giorno a Lucca da Via Pelleria: mattina tra le piazze, pranzo, mura o torri, musei facoltativi e sera tra le mura.",
      intro:
        "Un giorno a Lucca si vive meglio a piedi. Da Note tra le Mura in Via Pelleria 14 siete già dentro le mura: niente auto, pochi minuti fino alle piazze principali, tempo per un pranzo tranquillo e un pomeriggio sulle mura o sulle torri.",
      sections: [
        {
          heading: "Partire da Via Pelleria",
          body:
            "Dopo colazione uscite verso il cuore del centro. Piazza San Michele in Foro dista circa 6 minuti a piedi, Via Fillungo e Piazza dell'Anfiteatro circa 8–10 minuti, secondo il passo. Se siete arrivati in auto, nella guida su dove soggiornare a Lucca dentro le mura trovate parcheggi e tempi a piedi fino a Via Pelleria 14.",
          links: [
            dayGuideLinks.sanMichele,
            {
              label: "guida su dove soggiornare a Lucca dentro le mura",
              href: "/it/where-to-stay-lucca-inside-walls",
            },
          ],
        },
        {
          heading: "Mattina: piazze e centro",
          body:
            "Una mattina tranquilla può includere Piazza San Michele in Foro e la facciata della chiesa, una passeggiata su Via Fillungo tra negozi e caffè, poi Piazza dell'Anfiteatro con la sua forma ovale. Per una chiesa, il Duomo di San Martino è a pochi minuti. Non serve correre: scegliete due o tre tappe e godetevi il ritmo del centro.",
          links: [
            dayGuideLinks.sanMichele,
            dayGuideLinks.fillungo,
            dayGuideLinks.anfiteatro,
            dayGuideLinks.duomo,
          ],
        },
        {
          heading: "Pranzo",
          body:
            "A mezzogiorno meglio un pranzo semplice e piuttosto veloce: avete ancora tutto il pomeriggio davanti. Potete fermarvi in un ristorante intorno a Piazza San Michele in Foro, oppure perdetevi nei vicoli caratteristici del centro e scegliere un locale che vi ispira. La cena lunga e tranquilla lasciatela alla sera. Per colazione, spesa e altri nomi, vedete la guida su ristoranti tipici e cucina lucchese.",
          links: [
            dayGuideLinks.sanMichele,
            {
              label: "guida su ristoranti tipici e cucina lucchese",
              href: "/it/best-restaurants-lucca-local-food",
            },
          ],
        },
        {
          heading: "Pomeriggio: mura o torri",
          body:
            "Dopo pranzo, scegliete un’attività principale. Molti ospiti percorrono un tratto delle Mura di Lucca: il cammino sopra le mura rinascimentali è pianeggiante e largo, adatto a una passeggiata lenta o in bici (noleggio bici in centro). In alternativa, salite alla Torre Guinigi con i lecci sul tetto, o alla Torre delle Ore per il panorama sui tetti. Per molti visitatori bastano una torre e un breve tratto sulle mura.",
          links: [
            dayGuideLinks.mura,
            dayGuideLinks.guinigi,
            dayGuideLinks.torreOre,
            {
              label: "noleggio bici",
              href: googleMapsSearch("noleggio bici Lucca centro storico"),
            },
          ],
        },
        {
          heading: "Se avete ancora tempo",
          body:
            "Con energia in più, aggiungete una sola tappa: Palazzo Pfanner con il giardino, oppure la Casa natale di Giacomo Puccini per chi ama la musica. Meglio saltare il resto e lasciare una serata lenta in piazza.",
          links: [dayGuideLinks.pfanner, dayGuideLinks.puccini],
        },
        {
          heading: "Sera",
          body:
            "La sera è il momento di prendersela comoda a tavola. La Trattoria da Giulio in Pelleria è vicinissima all’appartamento: se prenotate, chiedete un tavolo sul terrazzo quando c’è posto — la sera è tutto illuminato ed è un posto bellissimo per mangiare all’aperto. Un’altra scelta classica è Piazza dell'Anfiteatro: di notte l’ovale della piazza si accende e i ristoranti intorno sono perfetti per una cena tranquilla con quella atmosfera. Nei weekend e in estate conviene prenotare. Per altri nomi e piatti, usate la guida su ristoranti tipici e cucina lucchese.",
          links: [
            foodGuideLinks.giulio,
            dayGuideLinks.anfiteatro,
            {
              label: "guida su ristoranti tipici e cucina lucchese",
              href: "/it/best-restaurants-lucca-local-food",
            },
          ],
        },
      ],
      cta: "Vedi l'appartamento",
      ctaHref: "/it",
    },
    de: {
      title: "Lucca an einem Tag",
      metaTitle: "Lucca an einem Tag | Fussweg-Route ab der Altstadt | Note tra le Mura",
      metaDescription:
        "Ein ruhiger Tagesplan für Lucca ab Via Pelleria: Plätze am Morgen, Mittagessen, Stadtmauer oder Türme, optional Museen und Abendessen innerhalb der Mauern.",
      intro:
        "Ein Tag in Lucca funktioniert am besten zu Fuss. Von Note tra le Mura in der Via Pelleria 14 sind Sie bereits innerhalb der Mauern: kein Auto nötig, kurze Wege zu den Hauptplätzen, Zeit für ein ruhiges Mittagessen und einen Nachmittag auf der Mauer oder auf einem Turm.",
      sections: [
        {
          heading: "Start in der Via Pelleria",
          body:
            "Nach dem Frühstück gehen Sie Richtung Zentrum. Die Piazza San Michele in Foro ist etwa 6 Minuten zu Fuss entfernt, Via Fillungo und Piazza dell'Anfiteatro etwa 8–10 Minuten. Wer mit dem Auto anreist, findet im Übernachtungs-Guide Parken nahe der Mauern und Wege zur Via Pelleria 14.",
          links: [
            dayGuideLinks.sanMichele,
            {
              label: "Übernachtungs-Guide",
              href: "/de/where-to-stay-lucca-inside-walls",
            },
          ],
        },
        {
          heading: "Vormittag: Plätze und Zentrum",
          body:
            "Ein entspannter Vormittag kann Piazza San Michele in Foro, einen Spaziergang über die Via Fillungo und die Piazza dell'Anfiteatro umfassen. Wer eine Kirche besuchen möchte, ist beim Duomo di San Martino schnell. Wählen Sie zwei oder drei Stopps – das Tempo zählt mehr als die Anzahl.",
          links: [
            dayGuideLinks.sanMichele,
            dayGuideLinks.fillungo,
            dayGuideLinks.anfiteatro,
            dayGuideLinks.duomo,
          ],
        },
        {
          heading: "Mittagessen",
          body:
            "Mittags reicht ein einfaches, eher schnelles Essen — der Nachmittag steht noch bevor. Eine Möglichkeit ist eine Trattoria rund um die Piazza San Michele in Foro, eine andere, in den charakteristischen Gassen der Altstadt einladend zu wirken und dort einzukehren. Das lange, ruhige Essen gehört in den Abend. Frühstück, Einkauf und weitere Namen stehen im Food-Guide.",
          links: [
            dayGuideLinks.sanMichele,
            {
              label: "Food-Guide",
              href: "/de/best-restaurants-lucca-local-food",
            },
          ],
        },
        {
          heading: "Nachmittag: Mauer oder Türme",
          body:
            "Nach dem Essen eine Hauptaktivität wählen: ein Stück Mura di Lucca (ebener Weg, gut für Spazieren oder Fahrrad, Fahrradverleih im Zentrum), oder Torre Guinigi mit Steineichen auf dem Dach, oder Torre delle Ore für die Aussicht. Für die meisten Gäste reichen ein Turm und ein kurzer Mauerweg.",
          links: [
            dayGuideLinks.mura,
            dayGuideLinks.guinigi,
            dayGuideLinks.torreOre,
            {
              label: "Fahrradverleih",
              href: googleMapsSearch("Fahrradverleih Lucca Altstadt"),
            },
          ],
        },
        {
          heading: "Wenn noch Zeit bleibt",
          body:
            "Mit Restenergie einen zusätzlichen Stopp: Palazzo Pfanner mit Garten oder Casa natale di Giacomo Puccini für Musikfreunde. Lieber einen ruhigen Abend auf einem Platz als zu viele Museen.",
          links: [dayGuideLinks.pfanner, dayGuideLinks.puccini],
        },
        {
          heading: "Abend",
          body:
            "Am Abend kann man es ruhiger angehen lassen. Die Trattoria da Giulio in Pelleria liegt sehr nah an der Wohnung: bei der Reservierung nach einem Tisch auf der Terrasse fragen, wenn möglich — abends ist sie schön beleuchtet und ein besonderer Platz im Freien. Die Piazza dell'Anfiteatro ist nachts ein Klassiker: der ovale Platz leuchtet, und die Restaurants ringsum eignen sich für ein entspanntes Abendessen mit dieser Atmosphäre. Am Wochenende und im Sommer reservieren. Weitere Namen finden Sie im Food-Guide.",
          links: [
            foodGuideLinks.giulio,
            dayGuideLinks.anfiteatro,
            {
              label: "Food-Guide",
              href: "/de/best-restaurants-lucca-local-food",
            },
          ],
        },
      ],
      cta: "Wohnung ansehen",
      ctaHref: "/de",
    },
    sr: {
      title: "Luka za jedan dan",
      metaTitle: "Luka za jedan dan | Pešačka ruta iz centra | Note tra le Mura",
      metaDescription:
        "Plan za jedan dan u Luci od Via Pelleria: jutarnji trgovi, ručak, zidine ili tornjevi, opcioni muzeji i večera unutar zidina.",
      intro:
        "Jedan dan u Luci najbolje je peške. Od Note tra le Mura u Via Pelleria 14 već ste unutar zidina: bez auta, kratke šetnje do glavnih trgova, vremena za miran ručak i popodne na bedemima ili tornjevima.",
      sections: [
        {
          heading: "Polazak od Via Pelleria",
          body:
            "Posle doručka krenite ka centru. Piazza San Michele in Foro je oko 6 minuta peške, Via Fillungo i Piazza dell'Anfiteatro oko 8–10 minuta. Ako ste došli autom, u vodiču o boravku unutar zidina nalaze se parking i vreme peške do Via Pelleria 14.",
          links: [
            dayGuideLinks.sanMichele,
            {
              label: "vodič o boravku unutar zidina",
              href: "/sr/where-to-stay-lucca-inside-walls",
            },
          ],
        },
        {
          heading: "Jutro: trgovi i centar",
          body:
            "Mirno jutro može uključiti Piazza San Michele in Foro, šetnju Via Fillungo i Piazza dell'Anfiteatro. Za jednu crkvu, Duomo di San Martino je blizu. Izaberite dve ili tri stanke – tempo je važniji od broja.",
          links: [
            dayGuideLinks.sanMichele,
            dayGuideLinks.fillungo,
            dayGuideLinks.anfiteatro,
            dayGuideLinks.duomo,
          ],
        },
        {
          heading: "Ručak",
          body:
            "U podne bolje je jednostavan i prilično brz ručak — popodne je još pred vama. Možete stati u trattoriju oko Piazza San Michele in Foro, ili se izgubiti u karakterističnim uličicama centra i sesti gde vam se svidi. Dugačak, miran obrok ostavite za veče. Za doručak, nabavku i više imena pogledajte vodič o hrani i restoranima.",
          links: [
            dayGuideLinks.sanMichele,
            {
              label: "vodič o hrani i restoranima",
              href: "/sr/best-restaurants-lucca-local-food",
            },
          ],
        },
        {
          heading: "Popodne: zidine ili tornjevi",
          body:
            "Posle ručka izaberite jednu glavnu aktivnost: deo Mura di Lucca (ravan put, dobar za šetnju ili bicikl, iznajmljivanje bicikala u centru), ili Torre Guinigi, ili Torre delle Ore. Većini gostiju dovoljni su jedan toranj i kratak deo zidina.",
          links: [
            dayGuideLinks.mura,
            dayGuideLinks.guinigi,
            dayGuideLinks.torreOre,
            {
              label: "iznajmljivanje bicikala",
              href: googleMapsSearch("iznajmljivanje bicikala Lucca"),
            },
          ],
        },
        {
          heading: "Ako ostane vremena",
          body:
            "Sa viškom energije dodajte jednu stanicu: Palazzo Pfanner sa baštom ili Casa natale di Giacomo Puccini. Bolje mirna večer na trgu nego previše muzeja.",
          links: [dayGuideLinks.pfanner, dayGuideLinks.puccini],
        },
        {
          heading: "Veče",
          body:
            "Veče je vreme da se za stolom uspori. Trattoria da Giulio in Pelleria je vrlo blizu apartmana: pri rezervaciji pitajte za sto na terasi ako ima mesta — uveče je lepo osvetljena i posebno mesto za jelo na otvorenom. Piazza dell'Anfiteatro je noću klasičan izbor: ovalni trg se osvetli, a restorani oko njega pogodni su za mirnu večeru uz tu atmosferu. Vikendom i leti rezervišite. Više imena je u vodiču o hrani i restoranima.",
          links: [
            foodGuideLinks.giulio,
            dayGuideLinks.anfiteatro,
            {
              label: "vodič o hrani i restoranima",
              href: "/sr/best-restaurants-lucca-local-food",
            },
          ],
        },
      ],
      cta: "Pogledaj apartman",
      ctaHref: "/sr",
    },
  },
};
