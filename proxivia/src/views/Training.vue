<template>
    <div style="margin-right:25px">
        <div class="homepage-section">
            <div class="content">
                <div class="search-form">
                    <i class="material-icons-outlined">search</i>
                    <input type="text" placeholder="Recherchez une formation" />
                </div>

                <b-tabs no-nav-style id="iVisible" align="left">
                    <b-tab active title="Populaire">
                        <sectionPopulaire></sectionPopulaire>
                    </b-tab>
                    <b-tab title="Ajout récents"
                        ><sectionNewest></sectionNewest>
                    </b-tab>
                    <b-tab title="Favoris">
                        <sectionFavoris></sectionFavoris>
                    </b-tab>
                    <b-tab title="Mes formations en cours">
                        <sectionEnrolled></sectionEnrolled>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import sectionPopulaire from "./training/populaire";
import sectionNewest from "./training/newest";
import sectionFavoris from "./training/favoris";
import sectionEnrolled from "./training/enrolled";

export default {
    name: "Training",
    metaInfo: {
        title: "Catalogue de formation",
        titleTemplate: "%s | Proxivia first try",
    },
    components: {
        sectionPopulaire: sectionPopulaire,
        sectionNewest: sectionNewest,
        sectionFavoris: sectionFavoris,
        sectionEnrolled: sectionEnrolled,
    },
};
</script>

<style scoped lang="scss">
.search-form {
    position: relative;
    padding: 3rem 0 1rem;
    margin-left: 5%;

    i {
        position: absolute;
        color: var(--color-primary);
        top: 55%;
        left: 10px;
    }

    input {
        border-radius: 50vh;
        border: none;
        width: 50%;
        padding: 10px;
        padding-left: 45px;
        font-size: 1rem;
        box-shadow: 0px 2px 4px rgba(23, 23, 23, 0.18);
    }
}
</style>
