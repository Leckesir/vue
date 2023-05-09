<script setup>
    import { defineProps } from 'vue'
    import { RouterLink } from 'vue-router';

    var {quizQuestionLenght, numberOfCorrecranswers} = defineProps(['quizQuestionLenght', 'numberOfCorrecranswers'])
</script>

<template>
    <div class="results">
        <p>Your results ...</p>
        <h1>{{ numberOfCorrecranswers }}/{{ quizQuestionLenght }}</h1>
        <RouterLink to="/" style="color: wheat;">Go Back</RouterLink>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0px;
    }

    p {
        font-size: 25px;
    }

    h1 {
        font: 30px;
    }

</style>