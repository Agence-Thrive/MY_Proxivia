<template>
    <div class="section_collaps mt-4" role="tablist">
        <!-- Agent immobilier -->
        <b-card no-body class="border-0 mb-1">
            <b-card-header header-tag="header" class="p-0 border-0" role="tab">
                <b-button block v-b-toggle.accordion-1 class="btn_collaps">
                    <div class="flex-accordion">
                        <p>1. Informations de l'agent immobilier</p>
                        <p>10/10</p>
                    </div>
                </b-button>
            </b-card-header>
            <b-collapse
                id="accordion-1"
                accordion="my-accordion"
                class="accordion_collaps"
                role="tabpanel"
            >
                <b-card-body class="px-5">
                    <b-form>
                        <b-row>
                            <b-col lg="4">
                                <div>
                                    <label class="font-weight-bold"
                                        >Genre</label
                                    >
                                </div>
                                <div class="buttons-flex">
                                    <b-form-checkbox button class="mr-2"
                                        >Madame</b-form-checkbox
                                    >
                                    <b-form-checkbox button class="mt-md-0"
                                        >Monsieur</b-form-checkbox
                                    >
                                </div>
                            </b-col>

                            <b-col lg="4">
                                <label
                                    for="agentFirstname"
                                    class="font-weight-bold"
                                    >Prénom</label
                                >
                                <b-form-input
                                    id="agentFirstname"
                                    placeholder="Sylvain"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label
                                    for="agentLastname"
                                    class="font-weight-bold"
                                    >Nom</label
                                >
                                <b-form-input
                                    id="agentLastname"
                                    placeholder="Journet"
                                    trim
                                ></b-form-input>
                            </b-col>
                        </b-row>

                        <b-row class="mt-4">
                            <b-col lg="4">
                                <label
                                    for="agentFonction"
                                    class="font-weight-bold"
                                    >Fonction</label
                                >
                                <b-form-input
                                    id="agentFonction"
                                    placeholder="Agent commercial"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label for="agentMail" class="font-weight-bold"
                                    >E-mail</label
                                >
                                <b-form-input
                                    id="agentMail"
                                    placeholder="sylvainjournet@mail.com"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label for="agentPhone" class="font-weight-bold"
                                    >Téléphone</label
                                >
                                <b-form-input
                                    id="agentPhone"
                                    placeholder="0123456789"
                                    trim
                                ></b-form-input>
                            </b-col>
                        </b-row>

                        <b-row class="mt-4">
                            <b-col lg="12">
                                <label
                                    for="agentAddress"
                                    class="font-weight-bold"
                                    >Numéro et nom de rue</label
                                >
                                <b-form-input
                                    id="agentAddress"
                                    placeholder="108 cours de la république"
                                    trim
                                ></b-form-input>
                            </b-col>
                        </b-row>

                        <b-row class="mt-4">
                            <b-col lg="4">
                                <label for="agentCity" class="font-weight-bold"
                                    >Ville</label
                                >
                                <b-form-input
                                    id="agentCity"
                                    placeholder="Clermont-Ferrand"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label
                                    for="agentZipCode"
                                    class="font-weight-bold"
                                    >Code Postal</label
                                >
                                <b-form-input
                                    id="agentZipCode"
                                    placeholder="40000"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label
                                    for="agentCountry"
                                    class="font-weight-bold"
                                    >Pays</label
                                >
                                <b-form-input
                                    id="agentCountry"
                                    placeholder="France"
                                    trim
                                ></b-form-input>
                            </b-col>
                        </b-row>

                        <span class="divider mt-5"></span>

                        <b-row>
                            <b-col lg="12">
                                <label class="font-weight-bold"
                                    >Informations de l'agence immobilière</label
                                >
                            </b-col>
                        </b-row>

                        <b-row class="mt-4">
                            <b-col lg="4">
                                <label for="agenceName" class="font-weight-bold"
                                    >Nom</label
                                >
                                <b-form-input
                                    id="agenceName"
                                    placeholder="Agence du soleil"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label for="agenceCard" class="font-weight-bold"
                                    >Numéro agence</label
                                >
                                <b-form-input
                                    id="agenceCard"
                                    placeholder="123456789"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label
                                    for="agenceSiret"
                                    class="font-weight-bold"
                                    >Numéro siret</label
                                >
                                <b-form-input
                                    id="agenceSiret"
                                    placeholder="123456789"
                                    trim
                                ></b-form-input>
                            </b-col>
                        </b-row>

                        <b-row class="mt-4">
                            <b-col lg="4">
                                <label
                                    for="agenceAdress"
                                    class="font-weight-bold"
                                    >Numéro et nom de rue</label
                                >
                                <b-form-input
                                    id="agenceAdress"
                                    placeholder="38 cours de l'Intendance"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label for="agenceCity" class="font-weight-bold"
                                    >Ville</label
                                >
                                <b-form-input
                                    id="agenceCity"
                                    placeholder="Bordeaux"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label
                                    for="agenceZipCode"
                                    class="font-weight-bold"
                                    >Code postal</label
                                >
                                <b-form-input
                                    id="agenceZipCode"
                                    placeholder="33000"
                                    trim
                                ></b-form-input>
                            </b-col>
                        </b-row>
                    </b-form>
                </b-card-body>
            </b-collapse>
        </b-card>
        <!-- Viager -->
        <b-card no-body class="border-0 mb-1">
            <b-card-header header-tag="header" class="p-0 border-0" role="tab">
                <b-button block v-b-toggle.accordion-2 class="btn_collaps">
                    <div class="flex-accordion">
                        <p>2. Informations du viager</p>
                        <p>8/8</p>
                    </div>
                </b-button>
            </b-card-header>
            <b-collapse
                id="accordion-2"
                visible
                accordion="my-accordion"
                class="accordion_collaps"
                role="tabpane2"
            >
                <b-card-body class="px-5">
                    <b-form>
                        <b-row>
                            <b-col lg="12" class="mb-3">
                                <div>
                                    <label class="font-weight-bold"
                                        >Type de viager</label
                                    >
                                </div>
                                <div class="buttons-flex">
                                    <b-form-checkbox button class="mr-2 mt-2"
                                        >Viager occupé avec
                                        rente</b-form-checkbox
                                    >
                                    <b-form-checkbox button class="mr-2 mt-2"
                                        >Viager occupé sans
                                        rente</b-form-checkbox
                                    >
                                    <b-form-checkbox button class="mr-2 mt-2"
                                        >Vente à terme</b-form-checkbox
                                    >
                                    <b-form-checkbox button class="mr-2 mt-2"
                                        >Viager libre</b-form-checkbox
                                    >
                                    <b-form-checkbox button class="mr-2 mt-2"
                                        >Viager libre loué</b-form-checkbox
                                    >
                                </div>
                            </b-col>
                        </b-row>

                        <b-row class="mt-2">
                            <b-col lg="12" class="mb-3">
                                <div>
                                    <label class="font-weight-bold"
                                        >Paiement</label
                                    >
                                </div>
                                <div class="buttons-flex">
                                    <b-form-checkbox button class="mr-2 mt-2"
                                        >DUH Perpétuel</b-form-checkbox
                                    >
                                    <b-form-checkbox button class="mr-2 mt-2"
                                        >DUH Limité: indiquez le nombre de
                                        mois</b-form-checkbox
                                    >
                                    <b-form-checkbox button class="mr-2 mt-2"
                                        >Paiement limité à 5
                                        ans</b-form-checkbox
                                    >
                                </div>
                            </b-col>
                        </b-row>

                        <b-row class="mt-2">
                            <b-col lg="6">
                                <label
                                    for="viagerValeur"
                                    class="font-weight-bold"
                                    >Valeur vénale (h.honnaires)</label
                                >
                                <b-form-input
                                    id="viagerValeur"
                                    placeholder="ex: 300 000€"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="6">
                                <label
                                    for="viagerNetVendeur"
                                    class="font-weight-bold"
                                    >Bouquet net vendeur</label
                                >
                                <b-form-input
                                    id="viagerNetVendeur"
                                    placeholder="ex: 50 000€"
                                    trim
                                ></b-form-input>
                            </b-col>
                        </b-row>

                        <b-row class="mt-4">
                            <b-col lg="4">
                                <label
                                    for="viagerMontantRente"
                                    class="font-weight-bold"
                                    >Montant de la rente</label
                                >
                                <b-form-input
                                    id="viagerMontantRente"
                                    placeholder="ex: 750€"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label
                                    for="viagerReversible"
                                    class="font-weight-bold"
                                    >Réversible</label
                                >
                                <b-form-input
                                    id="viagerReversible"
                                    placeholder="ex: 100%"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="4">
                                <label
                                    for="viagerPeriodicite"
                                    class="font-weight-bold"
                                    >Périodicité</label
                                >
                                <b-form-select
                                    id="viagerPeriodicite"
                                    :options="periodicite"
                                ></b-form-select>
                            </b-col>
                        </b-row>

                        <b-row class="mt-4">
                            <b-col lg="12" class="mb-3">
                                <div>
                                    <label class="font-weight-bold"
                                        >Choix des méthodes de calcul</label
                                    >
                                </div>
                                <div class="buttons-flex">
                                    <b-form-checkbox button class="mr-2 mt-2"
                                        >Méthode du loyer
                                        similaire</b-form-checkbox
                                    >
                                    <b-form-checkbox button class="mr-2 mt-2"
                                        >Méthode du taux de rendement
                                        immobilier</b-form-checkbox
                                    >
                                </div>
                            </b-col>
                        </b-row>

                        <b-row class="mt-4">
                            <b-col lg="6">
                                <label
                                    for="viagerLoyer"
                                    class="font-weight-bold"
                                    >Préciser le montant du loyer</label
                                >
                                <b-form-input
                                    id="viagerLoyer"
                                    placeholder="ex: 750€"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="6">
                                <label
                                    for="viagerRendement"
                                    class="font-weight-bold"
                                    >Taux de rendement</label
                                >
                                <b-form-input
                                    id="viagerRendement"
                                    placeholder="ex: 2%"
                                    trim
                                ></b-form-input>
                            </b-col>
                        </b-row>

                        <b-row class="mt-4">
                            <b-col lg="6">
                                <label
                                    for="viagerProgressionLoyers"
                                    class="font-weight-bold"
                                    >Taux de progression des loyers</label
                                >
                                <b-form-input
                                    id="viagerProgressionLoyers"
                                    placeholder="ex: 1%"
                                    trim
                                ></b-form-input>
                            </b-col>

                            <b-col lg="6">
                                <label
                                    for="viagerProgressionImmo"
                                    class="font-weight-bold"
                                    >Taux de progression de l'immobilier</label
                                >
                                <b-form-input
                                    id="viagerProgressionImmo"
                                    placeholder="ex: 4%"
                                    trim
                                ></b-form-input>
                            </b-col>
                        </b-row>
                    </b-form>
                </b-card-body>
            </b-collapse>
        </b-card>
        <!-- Vendeurs -->
        <b-card no-body class="border-0 mb-1">
            <b-card-header header-tag="header" class="p-0 border-0" role="tab">
                <b-button block v-b-toggle.accordion-3 class="btn_collaps">
                    <div class="flex-accordion">
                        <p>3. Information vendeur</p>
                        <p>15/15</p>
                    </div>
                </b-button>
            </b-card-header>
            <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                class="accordion_collaps"
                role="tabpane3"
            >
                <b-card-body class="px-3">
                    <b-card-text
                        >I start opened because <code>visible</code> is
                        <code>true</code></b-card-text
                    >
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            periodicite: ["mensuelle", "annuelle"],
        };
    },
};
</script>

<style scoped lang="scss">
.section_collaps {
    .btn-secondary.btn_collaps {
        background-color: var(--color-primary);
    }

    .accordion_collaps {
        box-shadow: 0 6px 9px rgba(0, 0, 0, 0.15);
        border-radius: 0px;
    }
}

.flex-accordion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
}

.font-weight-bold {
    color: var(--color-primary);
}
</style>
