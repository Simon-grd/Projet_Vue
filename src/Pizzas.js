import { reactive, computed } from 'vue'

export const store = reactive({
  pizzas: [
    { name: 'Vugherita', price: 10, quantity: 0, image: '/images/vugherita.jpg' },
    { name: '4 Vues', price: 13, quantity: 0, image: '/images/4-vues.jpg' },
    { name: 'Vuronni', price: 12, quantity: 0, image: '/images/vuronni.jpg' },
    { name: 'Vugétarienne', price: 11, quantity: 0, image: '/images/vugetarienne.jpg' },
  ],
  increment(pizza) {
    const p = this.pizzas.find(item => item.name === pizza.name)
    if (p) {
      p.quantity++
    }
  },
  decrement(pizza) {
    const p = this.pizzas.find(item => item.name === pizza.name)
    if (p && p.quantity > 0) {
      p.quantity--
    }
  },
})

export const cartItems = computed(() => store.pizzas.filter(p => p.quantity > 0))

export const total = computed(() => {
  return store.pizzas.reduce((acc, pizza) => acc + pizza.quantity * pizza.price, 0)
})