# Constitution du Projet Fresquia

## Principes Fondamentaux

### I. Génération Dirigée par le Domaine
Le cœur de l'application est la génération automatisée de cartes basée sur une compréhension approfondie du domaine de l'utilisateur. Le système doit être construit autour d'un moteur flexible et extensible capable d'analyser du texte, d'identifier les termes clés et de les catégoriser (choses, lieux, personnes, processus, concepts).

### II. Séparation des Données et de la Représentation
Les données des cartes (contenu, attributs, catégories) doivent être strictement séparées de leur représentation visuelle. Le système utilisera un format de données structuré (comme JSON) pour les définitions des cartes, qui seront ensuite rendues dans divers formats visuels (PNG, SVG). Cela garantit la flexibilité du rendu et la gestion facile des collections de cartes.

### III. Modularité et Extensibilité des Cartes
Le système doit être conçu pour être hautement modulaire. L'ajout de nouveaux types de cartes, de nouveaux modèles visuels ou de nouveaux algorithmes de génération ne doit pas nécessiter de modifications fondamentales de l'architecture de base. Chaque type de carte doit être un module autonome avec sa propre logique et son propre modèle.

### IV. Personnalisation et Contrôle par l'Animateur
L'animateur est l'utilisateur principal. L'application doit fournir des outils puissants et intuitifs pour lui permettre de guider la génération via des prompts, de personnaliser l'apparence visuelle (icônes, titres, descriptions) de chaque carte et de gérer ses collections. L'expérience utilisateur doit privilégier le contrôle et la flexibilité.

### V. Interface Visuelle Composée
L'interface utilisateur sera construite à partir de composants visuels réutilisables. Les affichages de cartes, les gestionnaires de collections et les éditeurs de personnalisation seront développés en tant que composants indépendants pour garantir une expérience utilisateur cohérente et faciliter le développement futur.

## Stack Technologique et Formats

- **Backend**: Le backend sera responsable de l'analyse de texte et de la logique de génération des cartes. Les technologies seront choisies pour leur performance dans le traitement du langage naturel.
- **Génération d'Images**: La génération des images pour les cartes sera effectuée via le service **Gemini 2.5 Flash Image (via l'API Gemini)**.
- **Frontend**: Le frontend sera une application monopage (SPA) utilisant un framework réactif (par exemple, React, Vue) pour offrir une expérience utilisateur dynamique et interactive.
- **Format de Données**: Le JSON sera le standard pour la définition des données des cartes, l'import/export des collections et la communication entre le frontend et le backend.
- **Formats d'Image**: La génération d'images via **Gemini 2.5 Flash Image (via l'API Gemini)** supportera les formats PNG pour une compatibilité étendue et SVG pour la scalabilité et la personnalisation avancée.

## Workflow de Développement

Le développement suivra une approche itérative, en se concentrant sur la livraison des fonctionnalités de base en premier (par exemple, la génération d'un ou deux types de cartes) avant d'étendre le système. Chaque nouveau type de carte sera traité comme une mini-fonctionnalité, avec ses propres spécifications et tests. L'intégration continue sera utilisée pour automatiser les tests et la construction du projet.

## Gouvernance

Cette constitution guide toutes les décisions d'architecture et de développement. Toute modification de la constitution doit être approuvée par l'équipe de développement pour assurer la cohérence et la vision à long terme du projet.

**Version**: 1.0 | **Ratifié**: 2025-09-19 | **Dernière modification**: 2025-09-19