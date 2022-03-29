<template>
      <div class="container">
        <router-link to="/"><button class="btn arrow "><i class="fa-solid fa-arrow-left"></i></button></router-link>
        <div class="wrapper">
          <div class="left">
             <div class="img"><img :src="product.image" alt="plant"></div>
          </div>
          <div class="right">
          <div class="text">
           <h1 class="name">{{ product.name }}</h1>
           <h4 class="smalldesc">{{ product.smalldesc }}</h4>
           <p class="desc">{{ product.desc }}</p>
           <h4 class="text-price">{{ product.price }}kr</h4>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['id'],
  methods: {
    ...mapActions(['getProductById'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  }
}
</script>

<style scoped>
.container {
  width: 70%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.img {
  border-right: 2px solid var(--clr-primary) ;
  background: #fff;
  height: 500px;
}
.wrapper{
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
}
.left{
  width: 50%;
}
.right{
  width: 50%;
  height: 500px;
  background: #fff;
}
.text {
 margin-top: 7rem;
 margin-left: 2rem;
 width: 80%;
}
.desc{
  margin-top: 1.5rem;
}
.arrow {
  font-size: 2rem;
  margin-top: 2rem;
  color: var(--clr-primary);
}

</style>