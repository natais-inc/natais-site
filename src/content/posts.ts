export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'stat'; big: string; caption: string };

export type Post = {
  slug: string;
  date: string;
  status: 'published' | 'scheduled';
  colour: string;
  gradient: string;
  category: { en: string; fr: string };
  title: { en: string; fr: string };
  excerpt: { en: string; fr: string };
  body?: { en: Block[]; fr: Block[] };
  sources?: { title: { en: string; fr: string }; url: string }[];
};

export const posts: Post[] = [
  {
    slug: 'ia-pme-canada',
    date: '2026-09-09',
    status: 'published',
    colour: 'var(--teal)',
    gradient: 'linear-gradient(120deg,var(--teal),var(--indigo))',
    category: { en: 'AI & automation', fr: 'IA et automatisation' },
    title: {
      en: 'One Canadian business in five now uses AI. The other four are not wrong.',
      fr: "Une entreprise canadienne sur cinq utilise l'IA. Les quatre autres n'ont pas tort.",
    },
    excerpt: {
      en: 'Statistics Canada put the figure at 19.2% in the second quarter of 2026 — triple what it was two years earlier. The interesting part is not the growth. It is who is left out, and why.',
      fr: "Statistique Canada situe le chiffre à 19,2 % au deuxième trimestre de 2026 — le triple d'il y a deux ans. L'intéressant n'est pas la croissance. C'est qui reste à l'écart, et pourquoi.",
    },
    body: {
      en: [
        { type: 'p', text: 'In the second quarter of 2026, 19.2% of Canadian businesses used artificial intelligence to produce goods or deliver services. Two years earlier the figure was 6.1%. It has tripled, and the pace has not slowed: 12.2% in 2025, 19.2% in 2026.' },
        { type: 'stat', big: '19.2%', caption: 'of Canadian businesses used AI in Q2 2026 — up from 6.1% in Q2 2024. Statistics Canada, survey of 9,251 respondents, April–May 2026.' },
        { type: 'h2', text: 'The gap is not where you would expect' },
        { type: 'p', text: 'The obvious story is big versus small. It is partly true: 27.8% of businesses with 100 or more employees use AI. But the smallest firms — one to four employees — sit at 19.9%, above the national average and above the 5-to-19 bracket. The very small are not being left behind. The lower middle is.' },
        { type: 'p', text: 'The sharper divide is geographic. Urban businesses: 21.0%. Rural businesses: 9.9%. A gap of more than two to one, in the same country, under the same rules.' },
        { type: 'h2', text: 'Three sectors are doing the work' },
        { type: 'p', text: 'Information and cultural industries lead at 42.3%, finance and insurance at 40.4%, professional, scientific and technical services at 32.4%. Outside those three, adoption falls away quickly. If your sector is not on that list, you are not behind your peers — you are with them.' },
        { type: 'h2', text: 'What businesses actually use it for' },
        { type: 'p', text: 'Data analysis (36.6%), text analysis (34.5%), and virtual agents or chatbots (28.2%). Not autonomous decision-making. Not replacing teams. Reading and summarizing faster than a person can.' },
        { type: 'h2', text: 'The reason to stay out' },
        { type: 'p', text: 'The most cited obstacle is not cost. It is cybersecurity and privacy: 13.4% of businesses name it, ahead of cost at 10.6%. That is a rational objection, not a technophobic one. A small firm that handles client records and cannot say where its data goes is right to wait.' },
        { type: 'p', text: 'Adoption is not free of consequence either: 44.4% of AI-using firms changed their hiring or training practices, and 32% put employees through AI training. The technology arrives with an obligation attached.' },
        { type: 'h2', text: 'What we take from it' },
        { type: 'p', text: 'If you run a small organization outside the three leading sectors, the honest advice is not "adopt AI". It is: find the one repetitive reading-and-writing task that costs you the most hours, price what automating it would actually save, and compare that to what it would cost — including the privacy work. If the number is not obviously positive, wait. Being in the 80.8% is a defensible position in 2026.' },
        { type: 'p', text: 'That calculation is exactly what our AI and automation audit does, and it is designed to be able to conclude no.' },
      ],
      fr: [
        { type: 'p', text: "Au deuxième trimestre de 2026, 19,2 % des entreprises canadiennes ont utilisé l'intelligence artificielle pour produire des biens ou livrer des services. Deux ans plus tôt, ce chiffre était de 6,1 %. Il a triplé, et le rythme n'a pas ralenti : 12,2 % en 2025, 19,2 % en 2026." },
        { type: 'stat', big: '19,2 %', caption: "des entreprises canadiennes ont utilisé l'IA au 2ᵉ trimestre 2026 — contre 6,1 % au 2ᵉ trimestre 2024. Statistique Canada, enquête auprès de 9 251 répondants, avril-mai 2026." },
        { type: 'h2', text: "L'écart n'est pas là où on l'attend" },
        { type: 'p', text: "L'histoire évidente oppose grandes et petites entreprises. Elle est partiellement vraie : 27,8 % des entreprises de 100 employés ou plus utilisent l'IA. Mais les plus petites — une à quatre personnes — se situent à 19,9 %, au-dessus de la moyenne nationale et au-dessus de la tranche de 5 à 19 employés. Les très petites ne sont pas distancées. C'est le bas du milieu qui l'est." },
        { type: 'p', text: "La fracture la plus nette est géographique. Entreprises urbaines : 21,0 %. Entreprises rurales : 9,9 %. Un écart de plus du double, dans le même pays, sous les mêmes règles." },
        { type: 'h2', text: 'Trois secteurs font le travail' },
        { type: 'p', text: "L'industrie de l'information et culturelle mène à 42,3 %, la finance et les assurances à 40,4 %, les services professionnels, scientifiques et techniques à 32,4 %. Hors de ces trois secteurs, l'adoption chute rapidement. Si le vôtre n'y figure pas, vous n'êtes pas en retard sur vos pairs — vous êtes avec eux." },
        { type: 'h2', text: "À quoi elles s'en servent réellement" },
        { type: 'p', text: "Analyse de données (36,6 %), analyse de texte (34,5 %), agents virtuels ou robots conversationnels (28,2 %). Pas de décision autonome. Pas de remplacement d'équipes. Lire et résumer plus vite qu'un humain." },
        { type: 'h2', text: "La raison de rester à l'écart" },
        { type: 'p', text: "L'obstacle le plus cité n'est pas le coût. C'est la cybersécurité et la protection des renseignements personnels : 13,4 % des entreprises la nomment, devant le coût à 10,6 %. C'est une objection rationnelle, pas une peur de la technologie. Une petite entreprise qui manipule des dossiers clients et ne sait pas dire où vont ses données a raison d'attendre." },
        { type: 'p', text: "L'adoption n'est pas sans conséquence non plus : 44,4 % des entreprises utilisatrices ont modifié leurs pratiques d'embauche ou de formation, et 32 % ont formé leurs employés à l'IA. La technologie arrive avec une obligation attachée." },
        { type: 'h2', text: 'Ce que nous en retenons' },
        { type: 'p', text: "Si vous dirigez une petite organisation hors des trois secteurs de tête, le conseil honnête n'est pas « adoptez l'IA ». C'est : trouvez la tâche répétitive de lecture et d'écriture qui vous coûte le plus d'heures, chiffrez ce que son automatisation vous ferait réellement économiser, et comparez à ce qu'elle coûterait — travail de confidentialité compris. Si le résultat n'est pas manifestement positif, attendez. Faire partie des 80,8 % est une position défendable en 2026." },
        { type: 'p', text: "Ce calcul est exactement l'objet de notre audit IA et automatisation, et il est conçu pour pouvoir conclure non." },
      ],
    },
    sources: [
      {
        title: {
          en: 'Statistics Canada — Analysis of the use of artificial intelligence by businesses in Canada, second quarter of 2026',
          fr: "Statistique Canada — Analyse de l'utilisation de l'intelligence artificielle par les entreprises au Canada, deuxième trimestre de 2026",
        },
        url: 'https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2026010-fra.htm',
      },
      {
        title: {
          en: 'Statistics Canada — Same series, second quarter of 2025 (comparison point)',
          fr: 'Statistique Canada — Même série, deuxième trimestre de 2025 (point de comparaison)',
        },
        url: 'https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2025008-fra.htm',
      },
      {
        title: {
          en: 'Statistics Canada — AI adoption and productivity in Canadian businesses',
          fr: "Statistique Canada — Adoption de l'intelligence artificielle et productivité dans les entreprises canadiennes",
        },
        url: 'https://www150.statcan.gc.ca/n1/pub/36-28-0001/2026004/article/00002-fra.htm',
      },
    ],
  },
  {
    slug: 'visibilite-web-pme',
    date: '2026-09-10',
    status: 'scheduled',
    colour: 'var(--indigo)',
    gradient: 'linear-gradient(120deg,var(--indigo),var(--coral))',
    category: { en: 'Online visibility', fr: 'Visibilité en ligne' },
    title: {
      en: 'A Facebook page is not a website, and the difference costs you money',
      fr: "Une page Facebook n'est pas un site web, et la différence vous coûte de l'argent",
    },
    excerpt: {
      en: 'Why an address you do not own is a liability, what a small business actually loses without a site, and the honest minimum that works.',
      fr: "Pourquoi une adresse que vous ne possédez pas est un passif, ce qu'une PME perd réellement sans site, et le minimum honnête qui fonctionne.",
    },
  },
  {
    slug: 'construire-pour-lafrique',
    date: '2026-09-11',
    status: 'scheduled',
    colour: 'var(--gold)',
    gradient: 'linear-gradient(120deg,var(--gold),var(--coral))',
    category: { en: 'Africa', fr: 'Afrique' },
    title: {
      en: 'Building from Canada for African users: what the data actually demands',
      fr: "Concevoir depuis le Canada pour des utilisateurs africains : ce que les données exigent réellement",
    },
    excerpt: {
      en: 'Bandwidth, device class, data cost and language. Lessons from putting a 2,206-record directory online for Cameroon.',
      fr: "Bande passante, gamme d'appareils, coût des données et langue. Leçons tirées de la mise en ligne d'un annuaire de 2 206 fiches pour le Cameroun.",
    },
  },
  {
    slug: 'automatiser-quoi-dabord',
    date: '2026-09-12',
    status: 'scheduled',
    colour: 'var(--teal)',
    gradient: 'linear-gradient(120deg,var(--teal),var(--gold))',
    category: { en: 'AI & automation', fr: 'IA et automatisation' },
    title: {
      en: 'The four tasks worth automating first in a small organization',
      fr: 'Les quatre tâches à automatiser en premier dans une petite organisation',
    },
    excerpt: {
      en: 'And the three that look automatable but are not. A method for pricing the decision instead of guessing it.',
      fr: "Et les trois qui en ont l'air sans l'être. Une méthode pour chiffrer la décision au lieu de la deviner.",
    },
  },
  {
    slug: 'donnees-de-trajet',
    date: '2026-09-13',
    status: 'scheduled',
    colour: 'var(--coral)',
    gradient: 'linear-gradient(120deg,var(--coral),var(--indigo))',
    category: { en: 'Privacy', fr: 'Confidentialité' },
    title: {
      en: 'What an employer may and may not know about how staff get to work',
      fr: "Ce qu'un employeur peut et ne peut pas savoir des trajets de son personnel",
    },
    excerpt: {
      en: 'Commuting data is personal information. Designing a product that is useful to the employer without exposing the employee.',
      fr: "Les données de trajet sont des renseignements personnels. Concevoir un produit utile à l'employeur sans exposer l'employé.",
    },
  },
  {
    slug: 'cout-reel-application',
    date: '2026-09-14',
    status: 'scheduled',
    colour: 'var(--indigo)',
    gradient: 'linear-gradient(120deg,var(--indigo),var(--teal))',
    category: { en: 'Building software', fr: 'Construire un logiciel' },
    title: {
      en: 'What a custom application really costs, line by line',
      fr: 'Ce que coûte réellement une application sur mesure, ligne par ligne',
    },
    excerpt: {
      en: 'Hosting, database, email, identity, domain, maintenance. The recurring bill nobody quotes you up front.',
      fr: "Hébergement, base de données, courriel, identité, domaine, maintenance. La facture récurrente que personne ne chiffre au départ.",
    },
  },
  {
    slug: 'francophonie-numerique-ontario',
    date: '2026-09-15',
    status: 'scheduled',
    colour: 'var(--gold)',
    gradient: 'linear-gradient(120deg,var(--gold),var(--teal))',
    category: { en: 'Ontario', fr: 'Ontario' },
    title: {
      en: 'Serving a francophone minority online in Ontario is not translation',
      fr: "Servir une minorité francophone en ligne en Ontario, ce n'est pas de la traduction",
    },
    excerpt: {
      en: 'What bilingual actually means for a product, and why half-translated interfaces lose the users they were built for.',
      fr: "Ce que « bilingue » veut dire pour un produit, et pourquoi une interface à moitié traduite perd les utilisateurs qu'elle visait.",
    },
  },
];

export const publishedPosts = () => posts.filter((p) => p.status === 'published');
export const allPostsSorted = () => [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
