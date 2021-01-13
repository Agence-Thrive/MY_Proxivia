<template>
    <div style="margin-right:25px">
        <div class="homepage-section">
            <div class="content">
                <div class="margin-box">
                    <button
                        type="submit"
                        class="button-box btn-outline-primary mr-sm-2"
                    >
                        Enregister
                    </button>
                    <button
                        type="submit"
                        class="button-box btn-publish mt-sm-2"
                    >
                        Publier
                    </button>
                </div>

                <b-tabs no-nav-style id="iVisible" align="left">
                    <b-tab active title="Aide">
                        <sectionAide></sectionAide>
                    </b-tab>
                    <b-tab title="Personnalisation">
                        <sectionPersonnalisation></sectionPersonnalisation>
                    </b-tab>
                    <b-tab title="Prévisualiser le document"> </b-tab>
                    <b-tab title="Partage"> </b-tab>
                    <!-- <b-tab title="ViagInsight"> </b-tab> -->
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import sectionAide from "./estimation/aide";
import sectionPersonnalisation from "./estimation/personnalisation";
import sectionDocument from "./estimation/document";
import sectionPartage from "./estimation/partage";
import sectionViagInsight from "./estimation/viagInsight";
/* eslint-disable */
export default {
    name: "juridique",
    metaInfo: {
        title: "Juridique",
        titleTemplate: "%s | Proxivia first try",
    },
    components: {
        sectionAide: sectionAide,
        sectionPersonnalisation: sectionPersonnalisation,
        sectionDocument: sectionDocument,
        sectionPartage: sectionPartage,
        sectionViagInsight: sectionViagInsight,
    },
};
</script>

<style lang="scss" scoped>
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
    color: var(--color-secondary);
    background: white;
    transition: 0.2s;
    outline: none !important;
}

.btn-outline-primary:hover {
    border: 1px solid var(--color-secondary) !important;
    background: var(--color-secondary) !important;
    color: white;
}

.btn-publish {
    background: var(--color-secondary) !important;
    border: 1px solid var(--color-secondary);
    color: white;
}

/* section */

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
