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
  | "lucca-in-one-day"
  | "lucca-and-surroundings";

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

const arrivalLinks = {
  pisaAirport: {
    label: "Aeroporto di Pisa",
    href: googleMapsSearch("Aeroporto Galileo Galilei Pisa"),
  },
  florenceAirport: {
    label: "Aeroporto di Firenze",
    href: googleMapsSearch("Aeroporto Firenze Amerigo Vespucci"),
  },
  luccaStation: {
    label: "Stazione di Lucca",
    href: googleMapsSearch("Stazione ferroviaria Lucca"),
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

const surroundingsGuideLinks = {
  pisa: {
    label: "Pisa",
    href: googleMapsSearch("Piazza dei Miracoli Pisa"),
  },
  viareggio: {
    label: "Viareggio",
    href: googleMapsSearch("Viareggio spiaggia"),
  },
  cinqueTerre: {
    label: "Cinque Terre",
    href: googleMapsSearch("Cinque Terre La Spezia"),
  },
  bargaGarfagnana: {
    label: "Barga e Garfagnana",
    href: googleMapsSearch("Barga LU centro storico"),
  },
  montePisano: {
    label: "Monte Pisano",
    href: googleMapsSearch("Monte Pisano sentieri trekking"),
  },
};

export const travelGuides: Record<GuideSlug, Record<Locale, TravelGuide>> = {
  "where-to-stay-lucca-inside-walls": {
    en: {
      title: "How to get to Lucca and where to stay",
      metaTitle: "How to get to Lucca and where to stay | Note tra le Mura",
      metaDescription:
        "Reach Lucca from Pisa or Florence airport by train or taxi, by train to Lucca station, or by car on the A11 (Lucca Ovest exit) — plus where to stay inside the walls and where to park.",
      intro:
        "For many visitors, the best Lucca stay is not about having a car at the door. It is about choosing a calm base inside the Renaissance walls, then walking to the city’s squares, restaurants, shops and evening life. You can reach Lucca comfortably by plane, train or car, then live the old town on foot.",
      sections: [
        {
          heading: "By plane",
          body:
            "The most convenient airport is Pisa (Galilei): from the terminal, bus or People Mover to Pisa Centrale station, then a regional train to Lucca (about 20–30 minutes in total). Florence Peretola is also common: tram or taxi to Santa Maria Novella station, then a regional train to Lucca (about 1–1.5 hours). A taxi from the airport all the way to Lucca is possible but expensive — always check times and tickets on Trenitalia before you travel.",
          links: [
            { label: "Pisa airport", href: arrivalLinks.pisaAirport.href },
            { label: "Florence airport", href: arrivalLinks.florenceAirport.href },
          ],
        },
        {
          heading: "By train",
          body:
            "You arrive at Lucca station on the Pisa–Florence line. From Note tra le Mura at Via Pelleria 14 it is about 20 minutes on foot with luggage; alternatively a few minutes by local bus or taxi to the apartment.",
          links: [{ label: "Lucca station", href: arrivalLinks.luccaStation.href }],
        },
        {
          heading: "By car",
          body:
            "Take the A11 motorway (Florence–coast) and exit at Lucca Ovest, then follow signs for the city centre. The old town has limited-traffic zones — do not drive into the ZTL without permission. Park as in the section below and continue on foot with your luggage.",
        },
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
          heading: "Parking",
          body:
            "Lucca’s centre has limited-traffic areas, so most guests park outside or near the walls and continue on foot with luggage. A convenient option is Parcheggio Palatucci, west of the walls on Via delle Tagliate di Sant’Anna; from the pedestrian access towards Porta San Donato or the Santa Croce bastion it is typically about 8 minutes on foot to the old town, then a few more minutes to Via Pelleria. For a free parking option, check Piazzale Maestri del Lavoro: it is outside the walls and usually around 15-20 minutes on foot from Via Pelleria 14, depending on the exact spot and pace. Parking rules can change, so always check the signs on arrival.",
          links: [parkingLinks.palatucci, parkingLinks.maestri],
        },
        {
          heading: "Who this area suits",
          body:
            "This part of Lucca is a good fit for families, couples and small groups who want restaurants, monuments and quiet streets close together. The apartment is on the second floor of a historic building with two short flights of stairs and no lift, so it is best for guests comfortable with stairs. For eating out, a day in town and day trips from Lucca, see our other guides.",
          links: [
            {
              label: "restaurants and local food guide",
              href: "/en/best-restaurants-lucca-local-food",
            },
            { label: "Lucca in one day", href: "/en/lucca-in-one-day" },
            { label: "Lucca and surroundings", href: "/en/lucca-and-surroundings" },
          ],
        },
      ],
      cta: "See the apartment",
      ctaHref: "/en",
    },
    it: {
      title: "Come arrivare a Lucca e dove soggiornare",
      metaTitle: "Come arrivare a Lucca e dove soggiornare | Note tra le Mura",
      metaDescription:
        "Come arrivare a Lucca da aeroporto Pisa o Firenze, in treno o in auto (uscita A11 Lucca Ovest), dove dormire dentro le mura e dove parcheggiare.",
      intro:
        "Per molti ospiti il soggiorno migliore a Lucca non dipende dall’auto sotto casa, ma da una base tranquilla dentro le mura, vicina a piazze, ristoranti e passeggiate. Si arriva comodamente in aereo, in treno o in auto; da lì si vive la città a piedi.",
      sections: [
        {
          heading: "In aereo",
          body:
            "L’aeroporto più comodo è Pisa (Galilei): dal terminal, bus o People Mover fino a Pisa Centrale, poi treno regionale per Lucca (circa 20–30 minuti in totale). In alternativa Firenze Peretola: tram o taxi fino a Santa Maria Novella, poi treno regionale per Lucca (circa 1–1,5 ore). Il taxi dall’aeroporto fino a Lucca è possibile ma costoso — controllate sempre orari e biglietti su Trenitalia prima di partire.",
          links: [arrivalLinks.pisaAirport, arrivalLinks.florenceAirport],
        },
        {
          heading: "In treno",
          body:
            "Arrivate alla stazione di Lucca, sulla linea Pisa–Firenze. Da Note tra le Mura in Via Pelleria 14 sono circa 20 minuti a piedi con le valigie; in alternativa pochi minuti in bus urbano o in taxi fino all’appartamento.",
          links: [arrivalLinks.luccaStation],
        },
        {
          heading: "In auto",
          body:
            "Autostrada A11 (Firenze–Mare): uscita Lucca Ovest, poi cartelli per il centro. Il centro storico ha zone a traffico limitato — non entrate in ZTL senza permesso. Parcheggiate come nella sezione sotto e proseguite a piedi con i bagagli.",
        },
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
          heading: "Parcheggio",
          body:
            "Il centro di Lucca include zone a traffico limitato: spesso conviene parcheggiare fuori o vicino alle mura e proseguire a piedi. Un’opzione comoda è il Parcheggio Palatucci, a ovest delle mura in Via delle Tagliate di Sant’Anna; dall’accesso pedonale verso Porta San Donato o il baluardo Santa Croce sono in genere circa 8 minuti a piedi fino al centro storico, poi pochi minuti in più fino a Via Pelleria. Per un parcheggio gratuito, si può controllare Piazzale Maestri del Lavoro: è fuori dalle mura e in genere dista circa 15-20 minuti a piedi da Via Pelleria 14, secondo il punto esatto e il passo. Le regole di sosta possono cambiare, quindi è sempre meglio verificare i cartelli all’arrivo.",
          links: [parkingLinks.palatucci, parkingLinks.maestri],
        },
        {
          heading: "Per chi è adatta questa zona",
          body:
            "La zona è adatta a famiglie, coppie e piccoli gruppi che cercano ristoranti, monumenti e strade tranquille nello stesso raggio. L’appartamento è al secondo piano di un edificio storico, senza ascensore. Per mangiare, una giornata in città e gite fuori porta, vedete le altre guide.",
          links: [
            {
              label: "guida su ristoranti tipici e cucina lucchese",
              href: "/it/best-restaurants-lucca-local-food",
            },
            { label: "Lucca in un giorno", href: "/it/lucca-in-one-day" },
            { label: "Lucca e dintorni", href: "/it/lucca-and-surroundings" },
          ],
        },
      ],
      cta: "Vedi l’appartamento",
      ctaHref: "/it",
    },
    de: {
      title: "Anreise nach Lucca und Übernachtung",
      metaTitle: "Anreise nach Lucca und Übernachtung | Note tra le Mura",
      metaDescription:
        "Anreise nach Lucca ab Flughafen Pisa oder Florenz, mit Zug oder Auto (A11 Ausfahrt Lucca Ovest), Übernachtung innerhalb der Mauern und Parken.",
      intro:
        "Für viele Gäste ist die beste Basis in Lucca nicht ein Parkplatz direkt vor der Tür, sondern eine ruhige Wohnung innerhalb der Stadtmauern, nahe Plätzen, Restaurants und Spaziergängen. Sie erreichen Lucca bequem mit dem Flugzeug, Zug oder Auto und erleben die Altstadt zu Fuss.",
      sections: [
        {
          heading: "Mit dem Flugzeug",
          body:
            "Der nächste Flughafen ist Pisa (Galilei): vom Terminal Bus oder People Mover zum Bahnhof Pisa Centrale, dann Regionalzug nach Lucca (etwa 20–30 Minuten gesamt). Alternativ Florenz Peretola: Tram oder Taxi bis Santa Maria Novella, dann Regionalzug nach Lucca (etwa 1–1,5 Stunden). Ein Taxi vom Flughafen direkt nach Lucca ist möglich, aber teuer — Fahrpläne und Tickets vorab bei Trenitalia prüfen.",
          links: [
            { label: "Flughafen Pisa", href: arrivalLinks.pisaAirport.href },
            { label: "Flughafen Florenz", href: arrivalLinks.florenceAirport.href },
          ],
        },
        {
          heading: "Mit dem Zug",
          body:
            "Sie kommen am Bahnhof Lucca an, auf der Linie Pisa–Florenz. Von Note tra le Mura in der Via Pelleria 14 sind es mit Gepäck etwa 20 Minuten zu Fuss; alternativ wenige Minuten mit Stadtbus oder Taxi bis zur Wohnung.",
          links: [{ label: "Bahnhof Lucca", href: arrivalLinks.luccaStation.href }],
        },
        {
          heading: "Mit dem Auto",
          body:
            "Autobahn A11 (Florenz–Küste), Ausfahrt Lucca Ovest, dann Beschilderung zum Zentrum. Die Altstadt hat verkehrsbeschränkte Zonen — ohne Genehmigung nicht in die ZTL fahren. Parken wie im Abschnitt unten und zu Fuss mit dem Gepäck weiter.",
        },
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
          heading: "Parken",
          body:
            "Das Zentrum hat verkehrsbeschränkte Zonen. Viele Gäste parken ausserhalb oder nahe der Mauern und gehen zu Fuss weiter. Eine praktische Option ist Parcheggio Palatucci westlich der Mauern an der Via delle Tagliate di Sant’Anna; vom Fussweg Richtung Porta San Donato oder Santa-Croce-Bastion sind es meist etwa 8 Minuten zu Fuss bis in die Altstadt, dann noch wenige Minuten bis Via Pelleria. Als kostenlose Parkmöglichkeit können Sie Piazzale Maestri del Lavoro prüfen: Der Platz liegt ausserhalb der Mauern und ist je nach genauem Standort und Tempo meist etwa 15-20 Minuten zu Fuss von Via Pelleria 14 entfernt. Parkregeln können sich ändern, prüfen Sie deshalb immer die Schilder vor Ort.",
          links: [parkingLinks.palatucci, parkingLinks.maestri],
        },
        {
          heading: "Für wen diese Lage passt",
          body:
            "Die Lage passt zu Familien, Paaren und kleinen Gruppen. Die Wohnung liegt im zweiten Stock eines historischen Gebäudes ohne Aufzug. Für Essen, einen Tag in der Stadt und Ausflüge ab Lucca siehe die anderen Guides.",
          links: [
            { label: "Food-Guide", href: "/de/best-restaurants-lucca-local-food" },
            { label: "Lucca an einem Tag", href: "/de/lucca-in-one-day" },
            { label: "Lucca und Umgebung", href: "/de/lucca-and-surroundings" },
          ],
        },
      ],
      cta: "Apartment ansehen",
      ctaHref: "/de",
    },
    sr: {
      title: "Kako stići u Luku i gde odsesti",
      metaTitle: "Kako stići u Luku i gde odsesti | Note tra le Mura",
      metaDescription:
        "Dolazak u Luku sa aerodroma u Pisi ili Firenci, vozom ili autom (A11 izlaz Lucca Ovest), smeštaj unutar zidina i parking.",
      intro:
        "Za mnoge goste najbolji boravak u Luci znači mirnu bazu unutar zidina, blizu trgova, restorana i šetnji. Do Luke stižete udobno avionom, vozom ili autom, a zatim grad živite peške.",
      sections: [
        {
          heading: "Avionom",
          body:
            "Najbliži aerodrom je Pisa (Galilei): od terminala autobus ili People Mover do stanice Pisa Centrale, zatim regionalni voz do Luke (oko 20–30 minuta ukupno). Alternativa Firenca Peretola: tramvaj ili taksi do Santa Maria Novella, zatim regionalni voz do Luke (oko 1–1,5 sata). Taksi od aerodroma do Luke je moguć, ali skup — uvek proverite vreme i karte na Trenitalia pre puta.",
          links: [
            { label: "Aerodrom Pisa", href: arrivalLinks.pisaAirport.href },
            { label: "Aerodrom Firenca", href: arrivalLinks.florenceAirport.href },
          ],
        },
        {
          heading: "Vozom",
          body:
            "Stižete na stanicu Lucca, na liniji Pisa–Firenca. Od Note tra le Mura u Via Pelleria 14 ima oko 20 minuta peške sa prtljagom; alternativno nekoliko minuta gradskim autobusom ili taksijem do apartmana.",
          links: [{ label: "Stanica Lucca", href: arrivalLinks.luccaStation.href }],
        },
        {
          heading: "Autom",
          body:
            "Autoput A11 (Firenca–more), izlaz Lucca Ovest, zatim putokazi ka centru. Stari grad ima zone ograničenog saobraćaja — ne ulazite u ZTL bez dozvole. Parkirajte kao u odeljku ispod i nastavite peške sa prtljagom.",
        },
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
          heading: "Parking",
          body:
            "Centar ima zone ograničenog saobraćaja. Gosti obično parkiraju izvan ili blizu zidina i nastavljaju peške. Praktična opcija je Parcheggio Palatucci, zapadno od zidina u Via delle Tagliate di Sant’Anna; od pešačkog ulaza prema Porta San Donato ili bastionu Santa Croce obično ima oko 8 minuta peške do starog grada, a zatim još nekoliko minuta do Via Pelleria. Za besplatno parkiranje možete proveriti Piazzale Maestri del Lavoro: nalazi se izvan zidina i obično je oko 15-20 minuta peške od Via Pelleria 14, u zavisnosti od tačnog mesta i tempa. Pravila parkiranja mogu da se menjaju, zato uvek proverite znakove po dolasku.",
          links: [parkingLinks.palatucci, parkingLinks.maestri],
        },
        {
          heading: "Za koga je ova lokacija",
          body:
            "Lokacija odgovara porodicama, parovima i malim grupama. Apartman je na drugom spratu istorijske zgrade, bez lifta. Za restorane, jedan dan u gradu i izlete, pogledajte ostale vodiče.",
          links: [
            {
              label: "vodič o hrani i restoranima",
              href: "/sr/best-restaurants-lucca-local-food",
            },
            { label: "Luka za jedan dan", href: "/sr/lucca-in-one-day" },
            { label: "Luka i okolina", href: "/sr/lucca-and-surroundings" },
          ],
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
            "Dinner is often later than in northern Europe, and small restaurants can fill quickly. If you have children, food allergies or a late arrival, book in advance and mention your needs clearly. During Lucca Comics and summer weekends, plan earlier than usual. For how to reach Lucca and a walking day in the centre, see our dedicated guides.",
          links: [
            {
              label: "how to get to Lucca and where to stay guide",
              href: "/en/where-to-stay-lucca-inside-walls",
            },
            { label: "Lucca in one day", href: "/en/lucca-in-one-day" },
          ],
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
            "Nei ristoranti piccoli i posti finiscono rapidamente. Se avete bambini, allergie o arrivo tardi, conviene prenotare prima e spiegare bene le esigenze. Per arrivo e parcheggio, e per una giornata a piedi nel centro, vedete le guide dedicate.",
          links: [
            {
              label: "guida su come arrivare e dove soggiornare",
              href: "/it/where-to-stay-lucca-inside-walls",
            },
            { label: "Lucca in un giorno", href: "/it/lucca-in-one-day" },
          ],
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
            "Kleine Restaurants sind schnell voll. Bei Kindern, Allergien oder später Anreise lohnt es sich, früh zu reservieren und die Wünsche klar zu nennen. Für Anreise und Parken sowie einen Tag zu Fuss in der Altstadt siehe die entsprechenden Guides.",
          links: [
            {
              label: "Anreise und Übernachtung",
              href: "/de/where-to-stay-lucca-inside-walls",
            },
            { label: "Lucca an einem Tag", href: "/de/lucca-in-one-day" },
          ],
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
            "Mali restorani se brzo popune. Ako imate decu, alergije ili kasni dolazak, rezervišite ranije i jasno navedite potrebe. Za dolazak i parking i za jedan dan peške u centru, pogledajte odgovarajuće vodiče.",
          links: [
            {
              label: "vodič o dolasku i boravku",
              href: "/sr/where-to-stay-lucca-inside-walls",
            },
            { label: "Luka za jedan dan", href: "/sr/lucca-in-one-day" },
          ],
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
            "Leave the apartment after breakfast and walk towards the heart of the old town. Piazza San Michele in Foro is about 6 minutes on foot, Via Fillungo and Piazza dell'Anfiteatro about 8–10 minutes, depending on your pace. If you arrived by car, see our how to get to Lucca and where to stay guide for parking near the walls and walking times to Via Pelleria 14.",
          links: [
            dayGuideLinks.sanMichele,
            {
              label: "how to get to Lucca and where to stay guide",
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
            "Evening is when to slow down and enjoy dinner properly. Trattoria da Giulio in Pelleria is very close to the apartment: if you book, ask for a table on the terrace when available — in the evening it is beautifully lit and a memorable place to eat outside. Piazza dell'Anfiteatro is another classic choice at night: the oval square glows with lights, and the restaurants around it are ideal for a calm dinner with that view. Book ahead on weekends and in summer. More names and dishes are in our restaurants and local food guide. For a day trip outside town, see our Lucca and surroundings guide.",
          links: [
            foodGuideLinks.giulio,
            dayGuideLinks.anfiteatro,
            {
              label: "restaurants and local food guide",
              href: "/en/best-restaurants-lucca-local-food",
            },
            { label: "Lucca and surroundings", href: "/en/lucca-and-surroundings" },
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
            "Dopo colazione uscite verso il cuore del centro. Piazza San Michele in Foro dista circa 6 minuti a piedi, Via Fillungo e Piazza dell'Anfiteatro circa 8–10 minuti, secondo il passo. Se siete arrivati in auto, nella guida su come arrivare e dove soggiornare trovate parcheggi e tempi a piedi fino a Via Pelleria 14.",
          links: [
            dayGuideLinks.sanMichele,
            {
              label: "guida su come arrivare e dove soggiornare",
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
            "La sera è il momento di prendersela comoda a tavola. La Trattoria da Giulio in Pelleria è vicinissima all’appartamento: se prenotate, chiedete un tavolo sul terrazzo quando c’è posto — la sera è tutto illuminato ed è un posto bellissimo per mangiare all’aperto. Un’altra scelta classica è Piazza dell'Anfiteatro: di notte l’ovale della piazza si accende e i ristoranti intorno sono perfetti per una cena tranquilla con quella atmosfera. Nei weekend e in estate conviene prenotare. Per altri nomi e piatti, usate la guida su ristoranti tipici e cucina lucchese. Per una gita fuori città, vedete la guida Lucca e dintorni.",
          links: [
            foodGuideLinks.giulio,
            dayGuideLinks.anfiteatro,
            {
              label: "guida su ristoranti tipici e cucina lucchese",
              href: "/it/best-restaurants-lucca-local-food",
            },
            { label: "Lucca e dintorni", href: "/it/lucca-and-surroundings" },
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
  "lucca-and-surroundings": {
    en: {
      title: "Lucca and surroundings",
      metaTitle: "Lucca and surroundings | Day trips by train and car | Note tra le Mura",
      metaDescription:
        "Day trips from Lucca: Pisa and the Versilia coast by train, Cinque Terre and Barga by car, trekking on Monte Pisano — sea, mountains, art and villages for every kind of traveller.",
      intro:
        "Choosing Lucca as your base does not mean giving the rest of Tuscany away. It means keeping a quiet home behind the walls and, each morning, deciding what you feel like feeling: salt on your skin and the sound of the waves in Versilia; wonder in front of Piazza dei Miracoli; the sharp colours of the Ligurian coast; the cool air of the Apennines, where time moves more slowly. There really is something for every mood — couples who need silence, travellers who cannot go home without having touched the sea, anyone who measures a holiday in steps on a path. Your bags stay in Via Pelleria: you go out, live a full day, and in the evening you return to the same streets where you left your shoes, with one more story to tell.",
      sections: [
        {
          heading: "Without a car: Pisa and the Versilia coast",
          body:
            "From Lucca railway station, about 20 minutes on foot from Note tra le Mura, regional trains reach Pisa in roughly 30 minutes — perfect for Piazza dei Miracoli, the cathedral and a slow walk along the Arno. For the sea, continue towards Viareggio: in about 30–40 minutes by train you are on the Versilia coast, with long beaches and a lively promenade in summer. These are easy day trips with no parking stress; check Trenitalia for times on your date.",
          links: [surroundingsGuideLinks.pisa, surroundingsGuideLinks.viareggio],
        },
        {
          heading: "With a car: the Cinque Terre",
          body:
            "Many of our guests who drive make at least one full day for the Cinque Terre — and we understand why. The coastline between those famous villages is one of the most moving sights in Italy. Plan a whole day, leave early, and use car parks near the villages or La Spezia, then the local train that links the borghi. In high season it is busy; midweek and early starts are calmer. From Lucca, allow about 1–1.5 hours by road depending on where you start.",
          links: [surroundingsGuideLinks.cinqueTerre],
        },
        {
          heading: "With a car: Barga and the Garfagnana",
          body:
            "By car, a full day in the Garfagnana — with Barga as its heart — shows a Tuscany many guests do not expect: greener, quieter, more authentic. Climb to Barga, a medieval village above the Serchio valley, then let the valley lead you: forests, old bridges, tiny hamlets, trattorias where cooking smells rise from the hearth. It is the right trip if, after busy Lucca, you want mountain air and streets where you can walk without rushing. Allow the whole day: the bends ask for calm, and the pleasure is in arriving slowly.",
          links: [surroundingsGuideLinks.bargaGarfagnana],
        },
        {
          heading: "Trekking on Monte Pisano",
          body:
            "For walkers, Monte Pisano between Lucca and Pisa is a rewarding half-day or day out: marked paths, olive groves, stone villages and wide views towards the coast on clear days. Choose a route that matches your level, bring water and good shoes, and check the weather. It is a different rhythm from the centre of Lucca — peaceful, physical, memorable.",
          links: [surroundingsGuideLinks.montePisano],
        },
        {
          heading: "Planning your days",
          body:
            "One outing per day keeps the holiday gentle: sea one day, Pisa another, mountains or Cinque Terre when you are ready. Return to Lucca for dinner while the streets light up — see our Lucca in one day guide for the old town, and our food guide for restaurants. For how to arrive and where to park, see our how to get to Lucca and where to stay guide.",
          links: [
            {
              label: "Lucca in one day",
              href: "/en/lucca-in-one-day",
            },
            {
              label: "restaurants and local food guide",
              href: "/en/best-restaurants-lucca-local-food",
            },
            {
              label: "how to get to Lucca and where to stay guide",
              href: "/en/where-to-stay-lucca-inside-walls",
            },
          ],
        },
      ],
      cta: "See the apartment",
      ctaHref: "/en",
    },
    it: {
      title: "Lucca e dintorni",
      metaTitle: "Lucca e dintorni | Gite in treno e in auto | Note tra le Mura",
      metaDescription:
        "Gite da Lucca: Pisa e Versilia in treno, Cinque Terre e Barga in auto, trekking sul Monte Pisano — mare, montagna, arte e borghi per ogni tipo di viaggio.",
      intro:
        "Scegliere Lucca come base non vuol dire rinunciare a tutto il resto: vuol dire avere un rifugio dentro le mura e, ogni mattina, decidere quale emozione cercare. Magari il sale sulla pelle e il rumore delle onde in Versilia; magari la meraviglia davanti a Piazza dei Miracoli; magari i colori accecanti della costa ligure; magari il fresco degli Appennini, dove il tempo scorre più piano. Ce n’è davvero per tutti i gusti — per chi viaggia in coppia e ha bisogno di silenzio, per chi non vuole tornare a casa senza aver visto il mare, per chi le vacanze le misura coi passi su un sentiero. Le valigie restano in Via Pelleria: voi uscite, vivete una giornata piena, e la sera rientrate negli stessi vicoli dove avete lasciato le scarpe, con un’altra storia da raccontare.",
      sections: [
        {
          heading: "Senza auto: Pisa e la Versilia",
          body:
            "Dalla stazione di Lucca, a circa 20 minuti a piedi da Note tra le Mura, i treni regionali arrivano a Pisa in circa 30 minuti — ideale per Piazza dei Miracoli, il Duomo e una passeggiata lungo l’Arno. Per il mare, proseguite verso Viareggio: in circa 30–40 minuti di treno siete sulla costa della Versilia, con spiagge lunghe e passeggiata vivace in estate. Sono gite semplici, senza stress da parcheggio; controllate gli orari Trenitalia per la vostra data.",
          links: [surroundingsGuideLinks.pisa, surroundingsGuideLinks.viareggio],
        },
        {
          heading: "Con auto: le Cinque Terre",
          body:
            "Molti ospiti che viaggiano in macchina dedicano almeno una giornata intera alle Cinque Terre — e si capisce perché. Quella costa tra i borghi famosi è una delle emozioni più forti d’Italia. Prevedete una giornata piena, partenza presto, parcheggi vicino ai paesi o a La Spezia, poi il treno locale che collega i borghi. In alta stagione c’è affluenza; giorni feriali e mattino presto aiutano. Da Lucca, calcolate circa 1–1,5 ore di strada a seconda di dove iniziate.",
          links: [surroundingsGuideLinks.cinqueTerre],
        },
        {
          heading: "Con auto: Barga e la Garfagnana",
          body:
            "Con l’auto, una giornata in Garfagnana — Barga come cuore del viaggio — regala la Toscana che molti non si aspettano: meno affolla, più verde, più autentica. Salite verso Barga, borgo medievale arroccato sulla valle del Serchio, poi lasciatevi guidare dalla valle: boschi, ponti antichi, paesi minuscoli, trattorie dove il profumo della cucina sale dal camino. È la gita giusta se, dopo il centro di Lucca, desiderate aria di montagna e strade dove potete camminare senza fretta. Prevedete l’intera giornata: le curve chiedono calma, e il piacere sta proprio nell’arrivare piano.",
          links: [surroundingsGuideLinks.bargaGarfagnana],
        },
        {
          heading: "Trekking sul Monte Pisano",
          body:
            "Per chi ama camminare, il Monte Pisano tra Lucca e Pisa è una mezza giornata o una giornata appagante: sentieri segnalati, olivi, borghi di pietra e panorami verso il mare nelle giornate limpide. Scegliete un percorso adatto al vostro livello, portate acqua e scarpe buone, controllate il meteo. È un ritmo diverso dal centro di Lucca — fisico, quieto, da ricordare.",
          links: [surroundingsGuideLinks.montePisano],
        },
        {
          heading: "Come organizzare le giornate",
          body:
            "Una gita al giorno mantiene la vacanza leggera: un giorno il mare, un altro Pisa, montagna o Cinque Terre quando siete pronti. Rientrate a Lucca per cena mentre si accendono le strade — per il centro storico vedete la guida Lucca in un giorno, per i ristoranti la guida sulla cucina lucchese. Per arrivo e parcheggio, la guida su come arrivare e dove soggiornare.",
          links: [
            {
              label: "Lucca in un giorno",
              href: "/it/lucca-in-one-day",
            },
            {
              label: "guida su ristoranti tipici e cucina lucchese",
              href: "/it/best-restaurants-lucca-local-food",
            },
            {
              label: "guida su come arrivare e dove soggiornare",
              href: "/it/where-to-stay-lucca-inside-walls",
            },
          ],
        },
      ],
      cta: "Vedi l'appartamento",
      ctaHref: "/it",
    },
    de: {
      title: "Lucca und Umgebung",
      metaTitle: "Lucca und Umgebung | Tagesausflüge mit Zug und Auto | Note tra le Mura",
      metaDescription:
        "Tagesausflüge ab Lucca: Pisa und Versilia mit dem Zug, Cinque Terre und Barga mit dem Auto, Trekking am Monte Pisano — Meer, Berge, Kunst und Dörfer.",
      intro:
        "Lucca als Basis zu wählen heisst nicht, auf den Rest der Toskana zu verzichten. Es heisst, ein ruhiges Zuhause innerhalb der Mauern zu haben und jeden Morgen zu entscheiden, welche Emotion Sie suchen: Salz auf der Haut und Wellenrauschen in der Versilia; Staunen vor der Piazza dei Miracoli; die grellen Farben der ligurischen Küste; die kühle Luft der Apenninen, wo die Zeit langsamer geht. Für jeden Geschmack ist etwas da — Paare, die Stille brauchen, Reisende, die ohne Meer nicht nach Hause wollen, alle, die Ferien in Schritten auf einem Weg messen. Die Koffer bleiben in der Via Pelleria: Sie gehen hinaus, erleben einen vollen Tag und kehren abends in dieselben Gassen zurück, in denen Ihre Schuhe warteten — mit einer Geschichte mehr.",
      sections: [
        {
          heading: "Ohne Auto: Pisa und die Versilia",
          body:
            "Vom Bahnhof Lucca, etwa 20 Gehminuten von Note tra le Mura, erreichen Regionalzüge Pisa in rund 30 Minuten — ideal für die Piazza dei Miracoli und einen Spaziergang am Arno. Fürs Meer geht es weiter nach Viareggio: in etwa 30–40 Minuten mit dem Zug sind Sie an der Versilia mit langen Stränden und lebendiger Promenade im Sommer. Einfache Tagesausflüge ohne Parkstress; Fahrpläne bei Trenitalia prüfen.",
          links: [surroundingsGuideLinks.pisa, surroundingsGuideLinks.viareggio],
        },
        {
          heading: "Mit Auto: die Cinque Terre",
          body:
            "Viele Gäste mit Auto nehmen sich mindestens einen ganzen Tag für die Cinque Terre — zu Recht. Diese Küste zwischen den bekannten Dörfern gehört zu den bewegendsten Bildern Italiens. Planen Sie einen vollen Tag, frühe Abfahrt, Parkplätze bei den Orten oder in La Spezia, dann den lokalen Zug zwischen den Dörfern. In der Hochsaison ist es voll; unter der Woche und früh morgens ist es ruhiger. Ab Lucca rechnen Sie je nach Start etwa 1–1,5 Stunden Fahrt.",
          links: [surroundingsGuideLinks.cinqueTerre],
        },
        {
          heading: "Mit Auto: Barga und die Garfagnana",
          body:
            "Mit dem Auto zeigt ein ganzer Tag in der Garfagnana — Barga als Herz der Reise — eine Toskana, die viele Gäste nicht erwarten: grüner, ruhiger, echter. Fahren Sie nach Barga, einem mittelalterlichen Dorf über dem Serchio-Tal, und lassen Sie sich vom Tal führen: Wälder, alte Brücken, winzige Orte, Trattorien, aus denen Kochdüfte steigen. Ideal, wenn Sie nach dem Trubel in Lucca Bergluft und Gassen ohne Eile wollen. Rechnen Sie den ganzen Tag: Die Kurven verlangen Ruhe — und das Vergnügen liegt im langsamen Ankommen.",
          links: [surroundingsGuideLinks.bargaGarfagnana],
        },
        {
          heading: "Trekking am Monte Pisano",
          body:
            "Für Wanderer ist der Monte Pisano zwischen Lucca und Pisa ein lohnender Halb- oder Ganztag: markierte Wege, Olivenhaine, Steindörfer und bei klarem Wetter Blick zum Meer. Wählen Sie eine Route passend zu Ihrem Niveau, nehmen Sie Wasser und gutes Schuhwerk mit. Ein anderes Tempo als die Altstadt — ruhig, körperlich, bleibend.",
          links: [surroundingsGuideLinks.montePisano],
        },
        {
          heading: "Tage planen",
          body:
            "Ein Ausflug pro Tag hält den Urlaub sanft: einmal Meer, einmal Pisa, Berge oder Cinque Terre, wenn Sie bereit sind. Abends zurück nach Lucca — für die Altstadt siehe Lucca an einem Tag, für Restaurants den Food-Guide. Parken und Anreise: Übernachtungs-Guide.",
          links: [
            {
              label: "Lucca an einem Tag",
              href: "/de/lucca-in-one-day",
            },
            {
              label: "Food-Guide",
              href: "/de/best-restaurants-lucca-local-food",
            },
            {
              label: "Übernachtungs-Guide",
              href: "/de/where-to-stay-lucca-inside-walls",
            },
          ],
        },
      ],
      cta: "Wohnung ansehen",
      ctaHref: "/de",
    },
    sr: {
      title: "Luka i okolina",
      metaTitle: "Luka i okolina | Izleti vozom i autom | Note tra le Mura",
      metaDescription:
        "Izleti iz Luke: Pisa i Versilija vozom, Cinque Terre i Barga autom, trekking na Monte Pisano — more, planine, umetnost i sela.",
      intro:
        "Izabrati Luku kao bazu ne znači odustati od ostatka Toskane. Znači imati miran dom unutar zidina i svako jutro odlučiti koju emociju tražite: so na koži i šum talasa u Versiliji; čudo pred Piazza dei Miracoli; jarke boje ligurske obale; hladan vazduh Apenina, gde vreme teče sporije. Zaista ima za svaki ukus — parove kojima treba tišina, putnike koji ne mogu kući bez mora, one koji odmor mere koracima na stazi. Koferi ostaju u Via Pelleria: vi izlazite, proživite pun dan, a uveče se vraćate u iste uličice gde su vas čekale cipele — sa još jednom pričom.",
      sections: [
        {
          heading: "Bez auta: Pisa i Versilija",
          body:
            "Od železničke stanice u Luci, oko 20 minuta peške od Note tra le Mura, regionalni vozovi stižu do Pise za otprilike 30 minuta — idealno za Piazza dei Miracoli i šetnju uz Arno. Za more, nastavite do Viareggia: za oko 30–40 minuta vozom ste na obali Versilije, sa dugim plažama i živom šetalištem leti. Jednostavni izleti bez stresa oko parkinga; proverite Trenitalia za vaš datum.",
          links: [surroundingsGuideLinks.pisa, surroundingsGuideLinks.viareggio],
        },
        {
          heading: "Autom: Cinque Terre",
          body:
            "Mnogi gosti sa autom obiđu bar jedan pun dan Cinque Terrea — i razumljivo je. Ta obala između čuvenih sela jedna je od najjačih slika Italije. Planirajte ceo dan, rani polazak, parking blizu sela ili La Spezie, zatim lokalni voz koji povezuje sela. U visokoj sezoni gužva je veća; radni dani i rano jutro su mirniji. Od Luke, računajte oko 1–1,5 sati vožnje, zavisno od polazne tačke.",
          links: [surroundingsGuideLinks.cinqueTerre],
        },
        {
          heading: "Autom: Barga i Garfagnana",
          body:
            "Automom, ceo dan u Garfagnani — sa Bargom u centru puta — pokazuje Toskanu koju mnogi gosti ne očekuju: zeleniju, tišinu, autentičnost. Popnite do Barge, srednjovekovnog sela iznad doline Serchio, pa pustite da vas dolina vodi: šume, stari mostovi, mala sela, trattorie odakle miriše kuhinja. Pravi izlet ako, posle gužve u Luci, želite planinski vazduh i ulice bez žurbe. Predvidite ceo dan: krivine traže mir — a uživanje je u sporom dolasku.",
          links: [surroundingsGuideLinks.bargaGarfagnana],
        },
        {
          heading: "Trekking na Monte Pisano",
          body:
            "Za šetače, Monte Pisano između Luke i Pise je poludan ili dan vredan truda: obeležene staze, masline, kamena sela i pri vedrim danima pogled ka moru. Izaberite rutu prema nivou, ponesite vodu i dobru obuću, proverite vreme. Drugi ritam od centra Luke — miran, fizički, za pamćenje.",
          links: [surroundingsGuideLinks.montePisano],
        },
        {
          heading: "Kako planirati dane",
          body:
            "Jedan izlet dnevno čuva odmor laganim: jednom more, jednom Pisa, planine ili Cinque Terre kada ste spremni. Vratite se u Luku na večeru — za stari grad pogledajte Luku za jedan dan, za restorane vodič o hrani. Za parking i dolazak, vodič o boravku unutar zidina.",
          links: [
            {
              label: "Luka za jedan dan",
              href: "/sr/lucca-in-one-day",
            },
            {
              label: "vodič o hrani i restoranima",
              href: "/sr/best-restaurants-lucca-local-food",
            },
            {
              label: "vodič o boravku unutar zidina",
              href: "/sr/where-to-stay-lucca-inside-walls",
            },
          ],
        },
      ],
      cta: "Pogledaj apartman",
      ctaHref: "/sr",
    },
  },
};
