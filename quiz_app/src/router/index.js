import { createRouter, createWebHistory } from 'vue-router';
import QuizView from "../views/QuizView.vue"
import HomeView from "../views/HomeView.vue"


var router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'home',
            component: HomeView
        },
        {
            path: "/quizes/:id",
            name: "quiz",
            component: QuizView
        }
    ]
})


export default router