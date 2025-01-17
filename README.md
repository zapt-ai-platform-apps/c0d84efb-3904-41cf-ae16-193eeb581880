# Site Officiel de Nyumamro Souheili

Ce projet est une application React permettant de présenter les différentes rubriques du site officiel de la commune de Nyumamro Souheili (Accueil, À propos, Services municipaux, Actualités, Tourisme, Contact). Il est conçu pour être responsive, efficace, et facile à maintenir.

## Parcours Utilisateurs

Ci-dessous, vous trouverez la liste des parcours utilisateurs recommandés, avec un court résumé de chacun. Cliquez sur le lien pour accéder à la documentation détaillée :

1. [Accueil](docs/journeys/accueil.md) - Présenter la page d'accueil du site
2. [À propos](docs/journeys/a-propos.md) - Découvrir la commune (histoire, patrimoine, etc.)
3. [Services](docs/journeys/services.md) - Consulter les services municipaux, horaires, informations pratiques
4. [Actualités](docs/journeys/actualites.md) - Lire les dernières informations de la commune
5. [Tourisme](docs/journeys/tourisme.md) - Découvrir les attractions et les sites touristiques
6. [Contact](docs/journeys/contact.md) - Contacter la mairie et trouver ses coordonnées

## Configuration et utilisation

1. Installer les dépendances :  
   npm install

2. Lancer l'application en mode développement :  
   npm run dev

3. Construire l'application pour la production :  
   npm run build

4. Servir l’application (prévisualisation) :  
   npm run serve

## Environnements et variables

Les variables d'environnement principales se trouvent dans le fichier `.env`. Voici leur signification :  
• COCKROACH_DB_URL : (Pas utilisé dans ce projet exact, appartient à l'environnement par défaut)  
• NPM_TOKEN : (Pas utilisé ici, typique pour certaines installations privées)  
• VITE_PUBLIC_APP_ID : Identifiant de l'application (nécessaire pour Sentry, PWA, etc.)  
• VITE_PUBLIC_APP_ENV : Environnement (development, production, etc.)  
• VITE_PUBLIC_SENTRY_DSN : DSN pour la collecte des erreurs Sentry  
• VITE_PUBLIC_UMAMI_WEBSITE_ID : Identifiant Umami pour le tracking analytique  

## Services externes utilisés

• [Sentry](https://sentry.io/) : Gestion des erreurs front-end et back-end  
• [Umami](https://umami.is/) : Collecte de statistiques d'audience  
• [Progressier](https://progressier.com/) : Fournit le service worker pour rendre l'application disponible en PWA  

---