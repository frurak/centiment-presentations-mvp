import { createRouter, createWebHashHistory } from "vue-router";
import SlideView from "@/views/SlideView.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/slide",
            component: SlideView,
        },
    ],
});

export default router;
