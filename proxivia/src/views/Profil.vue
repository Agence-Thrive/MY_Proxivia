<template>
    <div style="margin-right:25px">
        <div class="homepage-section">
            <div class="content">
                <b-tabs
                    class="profil-tabs"
                    no-nav-style
                    id="iVisible"
                    align="left"
                >
                    <b-tab active title="Mon profil personnel">
                        <sectionPersonnel
                            v-if="info"
                            :info="info"
                        ></sectionPersonnel>
                    </b-tab>
                    <b-tab title="Mon agence">
                        <sectionAgence v-if="info" :info="info"></sectionAgence>
                    </b-tab>
                    <b-tab title="Paiement">
                        <sectionPayment></sectionPayment>
                    </b-tab>
                    <b-tab title="Mes documents">
                        <sectionDocument></sectionDocument>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import sectionPersonnel from "./profil/personnal.vue";
import sectionAgence from "./profil/agence.vue";
import sectionPayment from "./profil/payment.vue";
import sectionDocument from "./profil/documents.vue";
import axios from "axios";
import storageService from "../services/storage.service.js";

export default {
    data() {
        return {
            info: null,
            token: null,
            user: null,
        };
    },
    mounted() {
        this.token = storageService.getToken();
        this.user = storageService.getUserID();

        axios
            .get(`${process.env.VUE_APP_ROOT_API}/api/v1/users/${this.user}`, {
                headers: { Authorization: `Bearer ${this.token}` },
            })
            .then((response) => {
                this.info = response.data;
            });
    },
    name: "profil",
    metaInfo: {
        title: "Gestion du profil",
        titleTemplate: "%s | Proxivia first try",
    },
    components: {
        sectionPersonnel: sectionPersonnel,
        sectionAgence: sectionAgence,
        sectionPayment: sectionPayment,
        sectionDocument: sectionDocument,
    },
};
</script>

<style lang="css">
.md-button-content {
    display: contents !important;
}
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

.profil-tabs > div > .justify-content-start {
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
