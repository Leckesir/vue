<script setup>
import carsData from "../data/data.json"
import { ref, watch } from "vue"
import {RouterLink} from "vue-router"

var cars = ref(carsData)

var search = ref("")

watch(search, () => {
    cars.value = carsData.filter(car => car.make.toLocaleUpperCase().includes(search.value.toLocaleUpperCase()))
})
</script>

<template>
  <main class="Container">
    <h1>Our Cars</h1>
    <input v-model.trim="search" type="text" placeholder="Search Car Name">
    <div class="cards">
      <RouterLink class="card" :to="`/car/${car.id}`" v-for="car in cars" :key="car.id">
        <h1>{{ car.make }}</h1>
        <p>${{ car.price }}</p>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.cards {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
  
}

.card {
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.7);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer;
  margin-bottom: 20px;
  color: white;
}

</style>
