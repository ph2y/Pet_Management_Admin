import VueRouter from "vue-router";
import IntroView from "@/components/intro/IntroView";
import IntroDevView from "@/components/intro/IntroDevView";
import IntroPartnersView from "@/components/intro/IntroPartnersView";
import LoginView from "@/components/auth/LoginView";
import RegisterView from "@/components/auth/RegisterView";
import FindView from "@/components/auth/FindView";
import ProfileView from "@/components/profile/ProfileView";
import ReviewView from "@/components/review/ReviewView";

const routes = [
    {path: "/", component: IntroView},
    {path: "/partners", component: IntroPartnersView},
    {path: "/development", component: IntroDevView},
    {path: "/auth", redirect: "/auth/login"},
    {path: "/auth/login", component: LoginView},
    {path: "/auth/register", component: RegisterView},
    {path: "/auth/find", component: FindView},
    {path: "/manage", redirect: "/manage/profile"},
    {path: "/manage/profile", component: ProfileView},
    {path: "/manage/review", component: ReviewView},
    {path: "/manage/product", redirect: "/manage/profile"},
    {path: "/manage/service", redirect: "/manage/profile"},
    {path: "/manage/reservation", redirect: "/manage/profile"},
    {path: "/manage/receipt", redirect: "/manage/profile"}
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
