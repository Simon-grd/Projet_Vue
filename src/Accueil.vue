<script setup>
import { store } from './Pizzas.js'

function ajouterAuPanier(pizza) {
  store.increment(pizza)
}
</script>

<template>
  <div class="page-accueil">
    <h2>Nos Pizzas</h2>
    <div class="liste-pizzas">
      <div v-for="pizza in store.pizzas" :key="pizza.name" class="pizza-card">
        <img :src="pizza.image" :alt="'Image de ' + pizza.name" class="pizza-image">
        <h3>{{ pizza.name }}</h3>
        <p>{{ pizza.price }}€</p>
        <button @click="ajouterAuPanier(pizza)">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-accueil h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.liste-pizzas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.pizza-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.pizza-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  transition: transform 0.3s ease; /* Ajoute une transition douce */
}

.pizza-image:hover {
  transform: scale(2); /* Applique un zoom de 10% */
  cursor: pointer;
}
.pizza-card button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>