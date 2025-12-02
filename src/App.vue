<script setup>
import HomePage from './components/HomePage.vue'
import CartPage from './components/CartPage.vue'

const pizzeriaName = "La Pizzeria de la Vue"
</script>
<template>
  <div class="container">
    <h1>{{ pizzeriaName }}</h1>
    <main>
      <HomePage />
      <CartPage />
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
}
</style>
