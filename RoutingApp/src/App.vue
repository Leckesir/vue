<script setup>
import { RouterView, RouterLink } from "vue-router"
</script>

<template>
  <main class="Container">
    <div class="links">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
    <RouterView/>
  </main>
</template>

<style scoped>
.links {
  padding: 20px
}

.links a {
  margin: 0 5px;
  color: white;
}

.active {
  font-weight: bold;
}
</style>