<template>
  <div>
    <Hero />
      <div class="card-wrapper container">
        <ProductCard v-for="product in products" :key="product._id" :product="product"/>
      </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import ProductCard from '../components/Products/ProductCard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    ProductCard,
    Hero
  },
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created(){
    this.getProducts()
  }
}
</script>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 3rem;
}
</style>
