<template>
  <Navbar />
      <router-view to="home"/>
    <div class="container">
      <ProductCard />
    </div>
</template>

<script>
import ProductCard from './components/Products/ProductCard.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar,
    ProductCard,
  }
}
</script>

<style>
:root{
  --clr-primary: #2c7532;
  --clr-secondary: #B3D382;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #F7F7F7;
}
.container {
  width: 80%;
  margin: 0 auto;
}
.btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
  border-radius: 2rem;
}
.btn-primary {
  background: var(--clr-primary);
}
.btn-primary:hover{
  background: #17491b;
}
</style>
