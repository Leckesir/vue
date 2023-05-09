<script setup>
import {useRoute} from "vue-router"
import cars from "../data/data.json"

var route = useRoute()
var carId = parseInt(route.params.id)
var car = cars.find(c => c.id === carId)
</script>

<template>
    <div v-if="car" class="Container">
        <h1>Car View</h1>
        <p>Type: {{ car.make }}</p>
        <p>Body Type: {{ car.body }}</p>
        <p>${{ car.price }}</p>
        <p>Year: {{ car.year }}</p>
    </div>
    <div v-else>
        Car Not Found
    </div>
</template>