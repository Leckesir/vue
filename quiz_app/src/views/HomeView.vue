<script setup>
  import Card from "../components/Card.vue"
  import q from "../data/quizes.json"
  import  {ref, watch} from "vue"
  import {RouterLink} from "vue-router"


  var quizes = ref(q)

  var search = ref("")

  watch(search , () => {
    quizes.value = q.filter(quiz => quiz.name.toLocaleUpperCase().includes(search.value.toLocaleUpperCase()))
  })
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>

    <div class="options-container">
      <RouterLink  :to="`/quizes/${quiz.id}`" v-for="quiz in quizes" :key="quiz.id">
        <Card :key="quiz.id" :quiz="quiz"/>
      </RouterLink>
    </div>
    
  </div>
</template>

<style scoped>

.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.5);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  text-decoration: none;
  
}
</style>