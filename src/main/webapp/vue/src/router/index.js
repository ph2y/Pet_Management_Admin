import { createWebHistory, createRouter } from "vue-router";
import LoginView from "@/components/intro/LoginView";
import RegisterView from "@/components/intro/RegisterView";
import FindView from "@/components/intro/FindView";
import ProfileView from "@/components/profile/ProfileView";
import IntroView from "@/components/intro/IntroView";

const routes = [
    {path: "/", component: IntroView},
    {path: "/auth", component: LoginView},
    {path: "/auth/register", component: RegisterView},
    {path: "/auth/find", component: FindView},
    {path: "/login", component: LoginView},
    {path: "/profile", component: ProfileView}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
