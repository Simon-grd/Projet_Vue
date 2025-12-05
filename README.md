# La Pizzeria de la Vue

Une application web moderne de commande de pizzas développée avec Vue 3 et Vite.

## Description

La Pizzeria de la Vue est une application de e-commerce permettant aux utilisateurs de parcourir un catalogue de pizzas, de gérer leur panier et de passer des commandes en ligne.

## Fonctionnalités principales

### Catalogue de pizzas
- 8 pizzas disponibles avec descriptions et prix
- Images et animations interactives au survol
- Ajout/retrait de pizzas au panier directement depuis la page d'accueil

### Gestion du panier
- Visualisation des articles sélectionnés
- Modification des quantités
- Calcul automatique du total
- Suggestions de pizzas non commandées
- Formulaire de paiement

### Système de comptes utilisateurs
- Création de compte avec validation sécurisée du mot de passe
- Connexion/déconnexion
- Stockage persistant des comptes (localStorage)
- Page de profil utilisateur

### Interface utilisateur
- Thème clair/sombre
- Navigation fluide entre les pages
- Bouton de retour en haut de page
- Design responsive

### Pages informatives
- Notre histoire
- Nos valeurs
- Mentions légales
- CGV
- Politique de confidentialité
- Contact et horaires

## Technologies utilisées

- Vue 3 (Composition API)
- Vite
- JavaScript ES6+
- CSS3

## Installation

```sh
npm install
```

## Démarrage

### Mode développement

```sh
npm run dev
```

### Build pour la production

```sh
npm run build
```

## Structure du projet

- `src/Accueil.vue` - Page d'accueil avec le catalogue de pizzas
- `src/Panier.vue` - Gestion du panier et paiement
- `src/Compte.vue` - Création de compte
- `src/Connexion.vue` - Connexion utilisateur
- `src/MonCompte.vue` - Profil utilisateur
- `src/Pizzas.js` - Store des pizzas et gestion du panier
- `src/UserStore.js` - Gestion des comptes utilisateurs
- `src/ThemeStore.js` - Gestion du thème clair/sombre

## Configuration IDE recommandée

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
