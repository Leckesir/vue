<script setup>
    import { defineProps, defineEmits } from 'vue'

    const {question} = defineProps(['question'])

    var emit = defineEmits(["selectOption"])

    var emitSelectedOption = (isCorrect) => {
        emit("selectOption", isCorrect)
    }
</script>

<template>
    <div class="question-cotainer">
        <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-cotainer">
        <div v-for="option in question.options"
         :key="option.id" 
         class="option"
         @click="emitSelectedOption(option.isCorrect)">
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-cotainer {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
}

.option-value {
    background-color: rgb(244, 239, 239);
    color: black;
    width: 75%;
    font-size: 30px;
}
</style>