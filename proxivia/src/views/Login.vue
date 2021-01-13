<template>
    <form-login />
</template>

<script>
import formLogin from "./../components/login/Form";

export default {
    name: "login",
    metaInfo: {
        title: "Home",
        titleTemplate: "%s | Login Example",
    },
    components: {
        "form-login": formLogin,
    },
};
</script>

<style scoped></style>
