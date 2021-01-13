<template>
    <div class="md-layout">
        <div class="md-layout-item login-left">
            <div class="login-img">
                <img src="../../assets/images/login.png" />
                <div class="login-title">
                    <h1>Bienvenue sur Proxivia</h1>
                    <span
                        >Rejoignez le plus grand réseau de France d'agents
                        immobilier spécialisés Viager.</span
                    >
                </div>
            </div>
        </div>
        <div class="md-layout-item login-right">
            <div class="login-connexion">
                <b-row align="end" cols="3">
                    <b-col><img src="../../assets/images/proxivia.png"/></b-col>
                    <b-col></b-col>
                    <b-col>
                        <Sidebar />
                    </b-col>
                </b-row>

                <b-form id="login-form" @submit="onSubmit" class="login-form">
                    <h2>Connectez-vous</h2>
                    <!--Adresse mail-->
                    <md-field class="input-form md-accent">
                        <label class="label-form" for="email"
                            >Adresse mail</label
                        >
                        <md-icon>mail</md-icon>
                        <md-input
                            class="form-input"
                            id="email"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="adresse mail"
                        ></md-input>
                    </md-field>
                    <!-- Mot de passe -->
                    <md-field class="input-form">
                        <label class="label-form" for="password"
                            >Mot de passe</label
                        >
                        <md-icon>vpn_key</md-icon>
                        <md-input
                            class="form-input"
                            id="password"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="mot de passe"
                        ></md-input>
                    </md-field>
                    <!-- Connexion -->
                    <md-button type="submit" class="form-button input-btn"
                        >Se connecter</md-button
                    >
                    <b-button variant="primary" disabled v-if="authenticating">
                        <b-spinner small type="grow"></b-spinner>
                        Vérification de vos détails...
                    </b-button>
                </b-form>
                <div align="end" class="fixed-bottom login-inscription">
                    <span
                        >Vous n'avez pas de compte ?
                        <b><a href="/inscription"> Inscrivez-vous</a></b></span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Structure */
.row {
    margin-left: 0;
    margin-right: 0;
}

.md-layout {
    height: 100vh;
    min-height: 100vh;
    padding: 0 !important;
    background: #fff;
}

.md-field.md-focused:before {
    border: none;
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: none;
    transition: none;
    transition-property: none;
}

/* LEFT */
.md-layout-item.login-left {
    height: 100%;
    min-height: 100%;
    flex: 1 1;
    background-color: #3c485b;
}

/* Image */
.login-img {
    background-color: var(--color-primary);
}

.login-img > img {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    display: block;
}

.login-img-proxivia {
    display: inline-grid;
    justify-content: center;
    align-items: center;
}

.login-title {
    width: 56%;
    margin-left: 20vh;
    margin-right: auto;
}

.login-title > h1 {
    white-space: nowrap;
    text-align: left;
    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    font-size: 43px;
    color: rgba(255, 255, 255, 1);
}

.login-title > span {
    text-align: left;
    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
}

/* RIGHT */

.md-layout-item.login-right {
    height: 100%;
    min-height: 100%;
    flex: 1 1;
    background-color: #fff;
}

.login-connexion {
    display: block;
    width: 80%;
    margin-left: 20%;
    padding-right: 20px;
}

.fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
    margin-bottom: 30px;
    margin-right: 30px;
}

.row.row-cols-3 {
    margin-top: 20px;
    margin-bottom: 80px;
}

/* FORMULAIRE */
.login-form {
    text-align-last: left;
    display: inline-grid;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
}

/* Input */
.input-form {
    padding: 4%;
    margin-top: 10px;
    margin-bottom: 10px;
    filter: drop-shadow(0px 2px 4px rgba(23, 23, 23, 0.18));
    border: none;
    overflow: visible;
    width: 435px;
    background: #f3f5f7;
}

.md-input::placeholder {
    white-space: nowrap !important;
    text-align: left !important;
    font-family: Gotham !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 15px !important;
    color: rgba(136, 152, 170, 1) !important;
}

.md-field.md-theme-default:after {
    background-color: #f3f5f7;
}

.md-field.md-theme-default > .md-icon:after {
    background-color: #f3f5f7;
    background-color: #f3f5f7;
}

/* BTN */
.md-button {
    white-space: nowrap !important;
    text-align: center;
    font-family: Gotham !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 15px !important;
    text-transform: none;
    margin: 0;
    margin-top: 20px;
}

.input-btn {
    filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
    overflow: visible;
    width: 160px;
    height: 40px;
    background-color: #d23367;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

/* TEXTE */
.login-inscription > span {
    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: rgba(60, 72, 91, 1);
}

.md-theme-default a:not(.md-button) {
    color: var(--color-primary) !important;
}

h2 {
    white-space: nowrap;
    text-align: center;
    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import Sidebar from "./SideBar";
export default {
    name: "login",
    metaInfo: {
        title: "Connection",
        titleTemplate: "%s | First try",
        description: "Connection à proxivia en first try",
    },
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    components: {
        Sidebar: Sidebar,
    },
    computed: {
        ...mapGetters("auth", [
            "authenticating",
            "authenticationError",
            "authenticationErrorCode",
            "authenticationSuccess",
        ]),
    },
    methods: {
        ...mapActions("auth", ["login"]),
        onSubmit(evt) {
            evt.preventDefault();
            if (this.form.email != "" && this.form.password != "") {
                this.login({
                    email: this.form.email,
                    password: this.form.password,
                });
                this.form.password = "";
            }
        },
    },
};
</script>
