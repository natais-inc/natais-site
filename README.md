# Site NATAIS — North American Technologies and AI Solutions Inc.

Site vitrine bilingue (anglais par défaut, français complet), Next.js 14 (App Router) +
next-intl + Tailwind, prévu pour Vercel.

## Ce qu'il contient

- Accueil avec deux parcours (employeurs / partenaires et bailleurs)
- Réalisations, Services (4), Blogue + articles, À propos, Contact, Confidentialité
- Section développement durable
- Formulaire de contact relié à Resend (facultatif — voir « Courriel »)
- SEO : métadonnées par page et par langue, balises `alternates`/hreflang,
  `sitemap.xml`, `robots.txt`, données structurées JSON-LD sur les articles publiés

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # puis remplir
npm run dev                  # http://localhost:3000 → redirige vers /en
```

## Variables d'environnement

| Variable | Rôle | Obligatoire |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL publique, sert aux métadonnées et au sitemap | oui en production |
| `RESEND_API_KEY` | Clé Resend pour l'envoi du formulaire | non |
| `CONTACT_TO` | Adresse de réception des messages | si Resend |
| `CONTACT_FROM` | Adresse d'expédition, sur un domaine vérifié dans Resend | si Resend |

Sans clé Resend, le formulaire répond « envoyé » et journalise le message côté serveur
sans le livrer. **À configurer avant la mise en ligne réelle**, sinon des messages seront perdus.

## Déploiement sur Vercel

1. Déposer ce dossier dans un dépôt de l'organisation `natais-inc`.
2. Sur Vercel : *Add New… → Project*, importer le dépôt. Le préréglage Next.js est détecté.
3. Ajouter les variables d'environnement ci-dessus.
4. Ajouter le domaine `natais.ca` (et `www`) dans *Settings → Domains*, puis créer chez
   Porkbun l'enregistrement A pour `@` et le CNAME pour `www` indiqués par Vercel.

## Modifier le contenu

- Textes de l'interface : `messages/en.json` et `messages/fr.json`
- Coordonnées et identifiants : `src/content/site.ts`
- Produits : `src/content/site.ts` (tableau `products`) + descriptions dans les fichiers de messages
- Articles du blogue : `src/content/posts.ts`

Un article a `status: 'published'` (avec `body` et `sources`) ou `status: 'scheduled'`
(titre, extrait et date seulement — la page affiche alors un avertissement disant que
l'article n'est pas encore rédigé).

## Ce qui n'est pas encore là

- **Espace d'administration** : reporté à la version 2, par choix. Le contenu se modifie
  dans le code. Une console d'édition demandera base de données, mots de passe hachés,
  sessions et limitation de débit.
- **Photo du fondateur** et **biographie définitive** : la page À propos affiche un
  encadré et un texte provisoires.
- **Méthode de conversion CO₂** : la section développement durable annonce une méthode
  publiée. Il faut la documenter avant la mise en ligne.
- **Limitation de débit sur le formulaire** : à ajouter avant d'exposer l'adresse.

## État vérifié

`npm run build` passe. 30 pages générées statiquement (15 par langue), plus la route
d'API du formulaire, le sitemap et robots.txt. Testé en local : les deux langues, le
blogue, l'article publié, les pages programmées, et la route de contact (202 avec
Resend absent, 422 sur données invalides).
