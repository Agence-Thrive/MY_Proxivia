<template>
    <div style="margin-right:25px">
        <div class="homepage-section">
            <div class="content">
                <b-tabs no-nav-style id="iVisible" align="left">
                    <b-tab active title="Documents divers">
                        <sectionDivers></sectionDivers>
                    </b-tab>
                    <b-tab title="Collectif vertical">
                        <sectionVertical></sectionVertical>
                    </b-tab>
                    <b-tab title="Collectif Horizontal">
                        <sectionHorizontal></sectionHorizontal>
                    </b-tab>
                    <b-tab title="Habitat individuel">
                        <sectionIndividuel></sectionIndividuel>
                    </b-tab>
                    <b-tab title="VT hors viager"
                        ><sectionHorsViager></sectionHorsViager>
                    </b-tab>
                    <b-tab title="Lotissement"
                        ><sectionlotissement></sectionlotissement>
                    </b-tab>
                    <template v-slot:tabs-end>
                        <li role="presentation" class="nav-item btn_add_circle">
                            <a href=""
                                ><span class="circle_btn material-icons"
                                    >add_circle_outline</span
                                ></a
                            >
                        </li>
                    </template>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

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

.circle_btn {
    color: #d23367;
    font-size: 40px;
    margin: 0 auto;
    vertical-align: middle;
}

.btn_add_circle {
    position: absolute;
    right: 24px;
}
</style>

<script>
import sectionDivers from "./juridique/divers";
import sectionVertical from "./juridique/vertical";
import sectionHorizontal from "./juridique/horizontal";
import sectionIndividuel from "./juridique/individuel";
import sectionHorsViager from "./juridique/horsviager";
import sectionlotissement from "./juridique/lotissement";

export default {
    name: "juridique",
    metaInfo: {
        title: "Juridique",
        titleTemplate: "%s | Proxivia first try",
    },
    components: {
        sectionDivers: sectionDivers,
        sectionVertical: sectionVertical,
        sectionHorizontal: sectionHorizontal,
        sectionIndividuel: sectionIndividuel,
        sectionHorsViager: sectionHorsViager,
        sectionlotissement: sectionlotissement,
    },
};
</script>
