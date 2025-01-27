# Visualisation des Cours des Cryptomonnaies

Une application React permettant de suivre les cours des cryptomonnaies en temps réel grâce à une API et de visualiser ces données sous forme de graphiques interactifs avec Chart.js.

---

## Fonctionnalités Principales

### 1. **Affichage des Données en Temps Réel**
- Récupération des cours des cryptomonnaies depuis une API (CoinGecko).
- Affichage des données actualisées régulièrement.

### 2. **Graphiques Interactifs**
- Utilisation de **Chart.js** pour afficher les variations des cours sous forme de graphiques.
- Affichage des tendances (journalières, hebdomadaires, mensuelles, etc.).

### 3. **Navigation et Interface Utilisateur**
- Interface moderne et intuitive pour consulter les données.
- Possibilité de choisir différentes cryptomonnaies.
- Options de personnalisation (période d’analyse).

---

## Structure du Projet

### **Composants Principaux**
- **Header** : Barre de navigation avec options de recherche et de sélection de cryptomonnaies.
- **CryptoList** : Liste des principales cryptomonnaies avec leurs données de base (nom, symbole, prix actuel).
- **CryptoChart** : Graphique interactif montrant les variations de prix pour une cryptomonnaie sélectionnée.

### **APIs et Graphiques**
- **API** : Intégration d'une API externe pour récupérer les données des cryptomonnaies.
- **Chart.js** : Création de graphiques personnalisés pour visualiser les tendances.

---

## Technologies Utilisées

### Frontend
- **React** : Framework principal pour construire l'interface utilisateur.
- **Chart.js** : Visualisation des données avec des graphiques interactifs.
- **Axios** : Récupération des données depuis l'API.
- **Tailwind CSS** : Stylisation moderne et réactive.

---

## Installation et Exécution


1. Installez les dépendances :
   ```bash
   npm install
   ```

2. Lancez l'application en mode développement :
   ```bash
   npm run dev
   ```

---

## Démonstration

### **Liste des Cryptomonnaies**
- Affichage en tableau avec les noms, prix actuels, et pourcentage de variation.
- Tri et recherche disponibles.
  

### **Graphiques**
- Visualisation des tendances des prix avec des courbes.
- Support des graphiques en ligne, barres, ou autres personnalisations.

---
