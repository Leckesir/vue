<script setup>
    import {useRoute, useRouter, RouterView} from "vue-router"
    import cars from "../data/cars.json"


    var route = useRoute()
    var router = useRouter()
    var carId = parseInt(route.params.id)

    var car = cars.find(c => c.id === carId)

</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>Name: {{ car.name }}</p>
        <p>Year: {{ car.year }}</p>
        <p>Price: {{ car.price }}</p>
        <button @click="router.push(`/cars/${carId}/contact`)">Click for contact</button>
        <RouterView/>
    </div>
    <div v-else>
        <h1>
            Car Not Found
        </h1>
    </div>
</template>