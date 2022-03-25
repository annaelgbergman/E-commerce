<template>
  <nav class="navbar">
      <div class="container wrapper">
        <router-link to="/"><img class="logo" src="../assets/logo.svg" alt="logo"></router-link>
      </div>
  </nav>
</template>

<script>
export default {
name: 'NavbarComponent'
}
</script>

<style scoped>

.navbar {
    background: #c7dba8;
    padding-block: 1rem;
}
.wrapper { 
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.logo{
    max-width: 200px;
    cursor: pointer;
}
.nav-btn {
    text-transform: uppercase;
    color: var(--clr-primary);
    font-size: 20px;
    margin-top: .5rem;
    letter-spacing: .05rem;
}

</style>