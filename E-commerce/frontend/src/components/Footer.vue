<template>
  <footer>
      <div class="footer">
          <div class="social-links">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-pinterest"></i></a>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
    background: #c7dba8;
    height: 20vh;
    margin-top: 2rem;
}
.social-links{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
}
.fa-brands{
    font-size: 1.5rem;
    color: var(--clr-primary);
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 1.15rem;
}
a {
    text-decoration: none;
    background: #d2e9af;
    border-radius: 50px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    margin-left: 2rem;
}
a:hover {
    background: #9dbb73;
}

</style>