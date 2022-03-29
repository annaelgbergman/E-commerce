<template>
            <div class="card">
              <div class="img">
                <router-link :to="{ name: 'ProductDetail', params: { id: product._id }}"><img :src="product.image" alt="plant"></router-link>
              </div>
                  <div class="card-body">
                    <div class="card-text">
                      <h3 class="card-title">{{ product.name }}</h3>
                      <h4 class="card-price">{{ product.price }}kr</h4>
                    </div>
                    <p class="card-text">{{ product.smalldesc }}</p>
                    <div class="btn-flex">
                      <router-link :to="{ name: 'ProductDetail', params: { id: product._id }}"><button class="btn btn-info">Läs mer om produkt</button></router-link>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  props: ['product']
}
</script>


<style scoped>
.card {
    margin-top: 2rem;
    border: 3px green;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.img {
  border-bottom: 3px solid var(--clr-primary);
  background: #fff;
  width: 100%;
  height: 500px;
}
.card-text {
  margin-top: .5rem;
}
.card-title {
  font-size: 20px;
  font-weight: 500;
}
.card-price {
  font-weight: 500;
  font-size: 20px;
}
.card-text {
  display: flex;
  justify-content: space-between;
}
.card-body {
  background: #fff;
  padding: 1rem;
  height: 150px;
}
.card-link {
  text-decoration: none;
  color: #fff;
  background: var(--clr-primary);
  padding: 1rem;
  margin-top: 1rem;
}
.btn-info{
  background: var(--clr-primary);
  padding: .5em 2em;
  margin-top: 1rem;
  color: #fff;
}

</style>