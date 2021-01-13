import Vue from "vue";
import Router from "vue-router";
import TokenService from "../services/storage.service";

import Login from "./../views/Login.vue";
import PageNotFound from "./../views/PageNotFound.vue";
import SignUp from "./../views/SignUp.vue";
import Dashboard from "./../views/Dashboard.vue";
import About from "./../views/About.vue";
import Profil from "./../views/Profil.vue";
import Sales from "./../views/Sales.vue";
import Commerce from "./../views/Commerce.vue";
import Juridique from "./../views/Juridique.vue";
import Estimation from "./../views/Estimation.vue";
import Training from "./../views/Training.vue";
import TrainingDetail from "./../views/TrainingDetail.vue";
import AideDocumentation from "./../views/AideDocumentation.vue";

// ENTONOIR <à retirer>
import Entonnoir from "./../views/Entonnoir";
//import { faAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: { name: "dashboard" },
        },
        {
            path: "/entonnoir",
            name: "entonnoir ",
            component: Entonnoir,
            meta: {
                title: "Entonnoir",
                public: true, // Allow access to only loggedin user.
            },
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                public: true, // Allow access to guest user.
                onlyWhenLoggedOut: true,
            },
        },
        {
            path: "/inscription",
            name: "inscription",
            component: SignUp,
            meta: {
                public: true,
                onlyWhenLoggedOut: true,
            },
        },
        {
            path: "/mes-ventes",
            name: "sales ",
            component: Sales,
            meta: {
                title: "Suivi des ventes",
                public: false, // Allow access to only loggedin user.
            },
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            meta: {
                title: "Tableau de bord",
                public: false, // Allow access to only loggedin user.
            },
        },
        {
            path: "/about",
            name: "about",
            component: About,
            meta: {
                title: "About",
                public: false, // Allow access to only loggedin user.
            },
        },
        {
            path: "/profil",
            name: "profil",
            component: Profil,
            meta: {
                title: "Gestion du profil",
                public: false, // Allow access to only loggedin user.
            },
        },
        {
            path: "/commerce",
            name: "commerce",
            component: Commerce,
            meta: {
                title: "Commerce",
                public: false, // Allow access to only loggedin user.
            },
        },
        {
            path: "/juridique",
            name: "juridique",
            component: Juridique,
            meta: {
                title: "Juridique",
                public: false, // Allow access to only logged
            },
        },
        {
            path: "/estimation-viager",
            name: "estimation-viager",
            component: Estimation,
            meta: {
                title: "Estimation Viager",
                public: false, // Allow access to only logged
            },
        },
        {
            path: "/formation",
            name: "formation",
            component: Training,
            meta: {
                title: "Catalogue de formation",
                public: false,
            },
        },
        {
            path: "/formation/:id",
            name: "formation-detail",
            component: TrainingDetail,
            meta: {
                title: "Detail de la formation",
                public: false,
            },
        },
        {
            path: "/aide-et-documentation",
            name: "aide-et-documentation",
            component: AideDocumentation,
            meta: {
                title: "Aide et documentation",
                public: false, // Allow access to only logged
            },
        },
        {
            path: "*",
            component: PageNotFound,
            meta: {
                public: true,
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some((record) => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some(
        (record) => record.meta.onlyWhenLoggedOut
    );
    const loggedIn = !!TokenService.getToken();

    if (!isPublic && !loggedIn) {
        return next({
            path: "/login",
            query: { redirect: to.fullPath }, // Store the full path to redirect the user to after login
        });
    }

    // Do not allow user to visit login page or register page if they are logged in
    if (loggedIn && onlyWhenLoggedOut) {
        return next("/dashboard");
    }

    next();
});

export default router;
