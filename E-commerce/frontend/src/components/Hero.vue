<template>
  <section class="hero">
      <div class="container">
        <div class="info">
          <h1 class="primary-text">Vill du växa?</h1>
          <button class="btn btn-hero btn-primary">Köp en planta</button>
        </div>
      </div>
  </section>
</template>

<script>
export default {
name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  height: 80vh;
  width: 100%;
  background: url("../assets/hero2.jpg"), rgba(0, 0, 0, 0.541);
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
}
.btn-hero {
  color: #fff;
  padding: 1rem 4rem;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
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