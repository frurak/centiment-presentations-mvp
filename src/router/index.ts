import { createRouter, createWebHistory } from "vue-router";
import SlideView from "@/views/SlideView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/slide",
            component: SlideView,
        },
    ],
});

export default router;
