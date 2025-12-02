<script setup>
import { store, cartItems, total } from '../store.js'
</script>

<template>
  <div class="cart-page">
    <h2>Votre Panier</h2>
    <div v-if="cartItems.length > 0">
      <div v-for="pizza in cartItems" :key="pizza.name" class="pizza-item">
        <span class="pizza-name">{{ pizza.name }} ({{ pizza.price }}€)</span>
        <div class="controls">
          <button @click="store.decrement(pizza)">-</button>
          <span class="quantity">{{ pizza.quantity }}</span>
          <button @click="store.increment(pizza)">+</button>
        </div>
      </div>
      <hr />
      <h3 class="total">Total : {{ total }}€</h3>
    </div>
    <div v-else>
      <p>Votre panier est vide.</p>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 2rem;
}

.cart-page h2 {
  text-align: center;
  margin-top: 0;
}

.pizza-item, .total {
  /* Styles from App.vue */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}
</style>