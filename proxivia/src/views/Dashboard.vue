<template>
    <div style="margin-right:25px">
        <div class="homepage-section">
            <sectionSuivi v-if="user" :info="user" />
        </div>
        <div class="homepage-section">
            <sectionCard />
        </div>
        <div class="homepage-section">
            <sectionFormation />
        </div>
        <div class="homepage-section">
            <sectionHistorique />
        </div>
    </div>
</template>
<style>
/* section */
.homepage-section {
    filter: drop-shadow(0px 2px 4px rgba(23, 23, 23, 0.18));
    background: #ffffff;
    border-radius: 10px;
    width: 100%;
    margin-right: 200px;
    margin-bottom: 15px;
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
</style>

<script>
import sectionSuivi from "./dashboard/suivi-vente.vue";
import sectionCard from "./dashboard/new-prospect.vue";
import sectionFormation from "./dashboard/last-formation.vue";
import sectionHistorique from "./dashboard/historique.vue";

import storageService from "../services/storage.service.js";
import axios from "axios";

export default {
    name: "dashboard",
    metaInfo: {
        title: "Dashboard",
        titleTemplate: "%s | Proxivia first try",
    },
    components: {
        sectionSuivi: sectionSuivi,
        sectionCard: sectionCard,
        sectionFormation: sectionFormation,
        sectionHistorique: sectionHistorique,
    },
    data() {
        return {
            userID: null,
            token: null,
            user: null,
        };
    },
    mounted() {
        this.userID = storageService.getUserID();
        this.token = storageService.getToken();
        axios
            .get(`${process.env.VUE_APP_ROOT_API}/api/v1/users/${this.userID}`)
            .then(
                function(result) {
                    this.user = result.data;
                }.bind(this)
            );
    },
};
</script>
