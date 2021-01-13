<template>
    <div style="margin-right:25px">
        <div class="homepage-section">
            <div class="content">
                <div class="margin-box">
                    <button
                        type="submit"
                        class="button-box btn-outline-primary"
                    >
                        Ajouter une affaire
                    </button>
                </div>

                <b-tabs no-nav-style id="iVisible" align="left">
                    <b-tab active title="Suivi des ventes">
                        <sectionSuivi v-if="info" :info="info"></sectionSuivi>
                    </b-tab>
                    <b-tab title="Demandes reçues">
                        <sectionDemandes
                            v-if="info"
                            :info="info"
                        ></sectionDemandes>
                    </b-tab>
                    <b-tab title="Ventes réalisées">
                        <sectionVentes v-if="info" :info="info"></sectionVentes>
                    </b-tab>
                    <b-tab title="Ventes perdues">
                        <sectionLosts v-if="info" :info="info"></sectionLosts>
                    </b-tab>
                    <b-tab title="Statistiques">
                        <sectionStats v-if="info" :info="info"></sectionStats>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.margin-box {
    padding: 20px 6vh 0 !important;
}

.button-box {
    padding: 8px 25px;
    border-radius: 5px;
    outline: none !important;
}

.btn-outline-primary {
    border: 1px solid var(--color-secondary) !important;
    color: white !important;
    background: var(--color-secondary) !important;
    transition: 0.2s;
    outline: none !important;
}

.btn-outline-primary:hover {
    border: 1px solid var(--color-secondary) !important;
    background: white !important;
    color: var(--color-secondary) !important;
}

.md-button-content {
    display: contents !important;
}

/* btn second */
.btn_secondary {
    filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
    width: 160px;
    height: 40px;
    background-color: #d23367;
    color: #fff;
    border: none;
    border-radius: 6px;
    transition: 0.8s;
}

.btn_secondary:hover {
    filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
    width: 160px;
    height: 40px;
    color: #d23367;
    border: none;
    border-radius: 6px;
    background: #fff radial-gradient(circle, transparent 1%, #fafafa 1%)
        center/15000%;
}

.btn_secondary:active {
    background-color: #fff;
    background-size: 100%;
    transition: background 0s;
}
/* fin btn secondary */

/* section */
.homepage-section {
    filter: drop-shadow(0px 2px 4px rgba(23, 23, 23, 0.18));
    background: #ffffff;
    border-radius: 10px;
    width: 100%;
    margin-right: 200px;
    margin-bottom: 15px;
}

.md-button .md-ripple {
    padding: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    padding: 0;
}

.col {
    align-self: center;
}

.row-content {
    padding: 2vh;
    align-items: center;
}

.tab-pane {
    padding: 0vh 6vh;
}

.nav-link {
    display: block;
    padding: 1rem 0 0.2rem 0 !important;
}

.nav-link.disabled {
    color: #6c757d !important;
    pointer-events: none;
    cursor: default;
    font-weight: 300;
}

a:not(.md-button) {
    text-decoration: none !important;
}

.justify-content-start {
    padding: 1vh 6vh !important;
}
.nav-item > a {
    font-weight: 600;
    color: var(--color-primary) !important;
}

a.active {
    color: var(--color-secondary) !important;
    border-bottom: 2px solid var(--color-secondary);
}

li.nav-item {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 2rem;
}
</style>

<script>
import sectionSuivi from "./sales/suivi.vue";
import sectionDemandes from "./sales/demandes.vue";
import sectionVentes from "./sales/ventes.vue";
import sectionLosts from "./sales/lost.vue";
import sectionStats from "./sales/stats.vue";

import storageService from "../services/storage.service.js";
import axios from "axios";

export default {
    name: "sales",
    metaInfo: {
        title: "Suivi des ventes",
        titleTemplate: "%s | Proxivia first try",
    },
    components: {
        /* eslint-disable */
        sectionSuivi: sectionSuivi,
        sectionDemandes: sectionDemandes,
        sectionVentes: sectionVentes,
        sectionLosts: sectionLosts,
        sectionStats: sectionStats,
    },
    data() {
        return {
            user: null,
            token: null,
            info: null,
        };
    },
    mounted() {
        this.user = storageService.getUserID();
        this.token = storageService.getToken();

        axios
            .get(`${process.env.VUE_APP_ROOT_API}/api/v1/users/${this.user}`, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then(
                function(result) {
                    this.info = result.data;
                }.bind(this)
            );
    },
};
</script>
