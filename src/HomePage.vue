<script setup>
import { store } from '../store.js'

function addToCart(pizza) {
  store.increment(pizza)
}
</script>

<template>
  <div class="home-page">
    <h2>Nos Pizzas</h2>
    <div class="pizza-list">
      <div v-for="pizza in store.pizzas" :key="pizza.name" class="pizza-card">
        <h3>{{ pizza.name }}</h3>
        <p>{{ pizza.price }}€</p>
        <button @click="addToCart(pizza)">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.pizza-list {
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

.pizza-card button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>