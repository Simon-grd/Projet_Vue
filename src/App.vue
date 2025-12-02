<script setup>
import { ref, computed } from 'vue'
import HomePage from './Accueil.vue'
import CartPage from './Panier.vue'
import { store } from './Pizzas.js'

const Nompizzeria = "La Pizzeria de la Vue"
const currentPage = ref('home') // 'home' ou 'cart'

const totalItemsInCart = computed(() => {
  return store.pizzas.reduce((acc, pizza) => acc + pizza.quantity, 0)
})
</script>
<template>
  <div class="container">
    <header>
      <h1 @click="currentPage = 'home'">{{ Nompizzeria }}</h1>
      <nav>
        <button @click="currentPage = 'home'">Accueil</button>
        <button @click="currentPage = 'cart'">
          Panier ({{ totalItemsInCart }})
        </button>
      </nav>
    </header>
    <main>
      <HomePage v-if="currentPage === 'home'" />
      <CartPage v-else-if="currentPage === 'cart'" />
    </main>
  </div>
</template>

<style>
body {
  background-color: #f0f9f4; /* Un vert très clair, dérivé du vert des boutons */
  color: #333;
}
</style>

<style scoped>
.container {
  padding: 0 1rem; /* Garde un peu d'espace sur les côtés */
  font-family: sans-serif;
}

h1 {
  padding-top: 20px;
  margin: 0;
  font-size: 3rem;
  cursor: pointer;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

nav button {
  border: 1px solid #ddd;
  background-color: transparent;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

nav button:hover {
  background-color: #f5f5f5;
}

h1 {
  text-align: center;
  color: #2c3e50;
}
</style>
