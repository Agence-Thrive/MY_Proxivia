<template>
    <div id="app">
        <proxivia
            v-if="$route.name != 'inscription' && $route.name != 'login'"
        ></proxivia>
        <nosidebar
            v-if="['login', 'inscription'].indexOf($route.name) > -1"
        ></nosidebar>
    </div>
</template>

<script>
import proxivia from "./components/navigation/Sidebar";
import nosidebar from "./components/navigation/no-sidebar";

export default {
    components: {
        proxivia,
        nosidebar,
    },

    name: "app",
    data() {
        return {
            appName: process.env.VUE_APP_NAME,
        };
    },
};
</script>

<style scoped>
.md-app.md-app-side-drawer.md-layout-row.md-theme-default {
    height: 100vh !important;
    min-height: 100vh !important;
}
#app {
    font-family: Gotham;
    height: 100vh;
    min-height: 100vh;
}

/* Find how to change the color of the input when is checked */
.custom-control-input:checked ~ .custom-control-label::after {
    background-color: blue !important;
}
</style>
