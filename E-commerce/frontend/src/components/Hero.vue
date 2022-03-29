<template>
  <section class="hero">
      <div class="container">
        <div class="info">
          <h1 class="primary-text">Vill du växa?</h1>
          <button @click="scrollDown" class="btn btn-hero btn-primary">Köp en planta</button>
        </div>
      </div>
  </section>
</template>

<script>
export default {
name: 'HeroSection',

methods: {
  scrollDown(){
    window.scrollTo(0, 700)
  }
}
}
</script>

<style scoped>
.hero {
  height: 80vh;
  width: 100%;
  background: url("../assets/hero2.jpg"), #0000008a;
  background-size: cover;
  background-blend-mode: multiply;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  margin: 0 auto;
}
.primary-text{
  color: #fff;
  font-size: 130px;
  font-weight: 500;
  text-transform: uppercase;
  text-shadow: 4px 2px var(--clr-primary);
}
.btn-hero {
  color: #fff;
  padding: 1rem 4rem;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  transition: transform .2s;
}
.btn-hero:hover{
  transform: scale(1.1);
}

@media (max-width: 768px){
  .primary-text {
    font-size: 100px;
  }
  .btn-hero{
    padding: 1rem 3rem;
    font-size: 16px;
  }
}
</style>