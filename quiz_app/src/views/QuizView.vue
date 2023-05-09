<script setup>
    import Question from "../components/Question.vue"
    import Header from "../components/QuizHeader.vue"
    import Result from "../components/Result.vue"
    import {useRoute, RouterView} from "vue-router"
    import {ref, computed} from"vue"
    import quizes from "../data/quizes.json"

    var route = useRoute()
    var quizId = parseInt(route.params.id)
    var quiz = quizes.find(q => q.id === quizId)
    var currentQuestionIndex = ref(0)
    
    var questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
    var barPercentage = computed (() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)
    var numberOfCorrecranswers = ref(0)
    var showResults = ref(false)
    
    var onOptionSelected = (isCorrect) => {
        if(isCorrect) {
            numberOfCorrecranswers.value++
        }

        if(quiz.questions.length -1 === currentQuestionIndex.value) {
            showResults.value = true
        }

        currentQuestionIndex.value++
    }
</script>


<template>
    <div>
       <Header 
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        />
        <div>
            <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]"
            @selectOption="onOptionSelected"/>
            <Result v-else 
            :quizQuestionLenght="quiz.questions.length"
            :numberOfCorrecranswers="numberOfCorrecranswers"/>
        </div>
    </div>
</template>
