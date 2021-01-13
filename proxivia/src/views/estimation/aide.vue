<template>
    <div class="container-fluid">
        <b-row>
            <b-col class="left-column p-0 mt-4" cols="7">
                <h2 class="title-infos mb-3">Estimation Viagère</h2>
                <div class="section_infos mb-5">
                    <div class="section_history">
                        <span
                            style="vertical-align:middle;"
                            class="material-icons"
                            >history</span
                        >
                        <span style="vertical-align:middle;"
                            >Dernière mise à jour : Il y a</span
                        >
                    </div>
                    <div class="section_time mb-4">
                        <span
                            style="vertical-align:middle;"
                            class="material-icons"
                            >help_outline</span
                        >
                        <span style="vertical-align:middle;"
                            >Temps de remplissages : Il y a</span
                        >
                    </div>
                    <b-button variant="warning">Expert</b-button>
                    <b-button variant="secondary">Expert</b-button>
                </div>

                <b-col class="section_col" cols="12">
                    <div class="menu-title">
                        <h5>Objectif du calcul</h5>
                    </div>
                    <p>
                        Présentation de l'objectif du document en quelques
                        phrases : lorem Ipsum. Présentation de la formation en
                        quelques phrases : lorem Ipsum. Présentation de la
                        formation en quelques phrases : lorem Ipsum.
                        Présentation de la formation en.
                    </p>
                </b-col>

                <b-col class="section_col" cols="12">
                    <div class="menu-title">
                        <h5>Données prises en compte</h5>
                    </div>
                    <div class="border rounded py-2 px-4">
                        Informations du vendeur
                    </div>

                    <div class=" mt-2 border rounded py-2 px-4">
                        Informations du vendeur
                    </div>
                </b-col>

                <b-col class="section_col" cols="12">
                    <div class="menu-title">
                        <h5>Historique mise à jour</h5>
                    </div>

                    <b-table
                        stripped
                        borderless
                        outlined
                        head-variant="light"
                        hover
                        stacked="lg"
                        :items="updateTable"
                    ></b-table>

                    <p class="direction-historic">
                        Voir l'historique des mises à jour
                    </p>
                </b-col>
            </b-col>

            <b-col class="right-column pl-4" cols="5">
                <div class="section-profil">
                    [video]
                </div>

                <div style="margin-top: 20px;" class="section-calcul">
                    <div class="row row-content">
                        <b-col class="text-center" cols="3">
                            <i style="color: #c8d2e2;" class="material-icons"
                                >description</i
                            >
                        </b-col>
                        <b-col cols="9">
                            <a class="no-coloration" href="#"
                                >Débuter le calcul simplifié</a
                            >
                        </b-col>
                    </div>
                </div>
                <div style="margin-top: 20px;" class="section-calcul">
                    <div class="row row-content">
                        <b-col class="text-center" cols="3">
                            <i style="color: #c8d2e2;" class="material-icons"
                                >attach_money</i
                            >
                        </b-col>
                        <b-col cols="9">
                            <a class="no-coloration" href="#"
                                >Utiliser le calculateur avancé</a
                            >
                        </b-col>
                    </div>
                </div>
                <!-- <div style="margin-top: 20px;" class="section-calcul">
                    <div class="row row-content">
                        <b-col class="text-center" cols="3">
                            <i style="color: #c8d2e2;" class="material-icons"
                                >trending_up</i
                            >
                        </b-col>
                        <b-col cols="9">
                            <a class="no-coloration" href="#"
                                >Accéder à ViagInsight</a
                            >
                        </b-col>
                    </div>
                </div> -->
            </b-col>

            <div class="formations" v-if="formations">
                <h5>Formations complémentaires</h5>

                <div class="formations-grid">
                    <b-card
                        class="formations-card"
                        align="center"
                        v-for="formation in formations"
                        :key="formation._id"
                    >
                        <router-link
                            :to="{
                                name: 'formation-detail',
                                params: { id: formation._id },
                            }"
                        >
                            <img
                                class="formations-card-img"
                                :src="formation.cover"
                                :alt="formation.title + ' - cover'"
                            />
                            <div class="card-content">
                                <h6>{{ formation.title }}</h6>
                                <small
                                    >{{ formation.trainer.firstname }}
                                    {{ formation.trainer.lastname }}</small
                                >
                                <div
                                    role="alert"
                                    class="btn-badge"
                                    :class="
                                        formation.difficulty === 'Expert'
                                            ? 'alert-warning'
                                            : formation.difficulty ===
                                              'Intermédiaire'
                                            ? 'alert-dark'
                                            : 'alert-success'
                                    "
                                >
                                    {{ formation.difficulty }}
                                </div>
                            </div>
                        </router-link>
                    </b-card>
                </div>
            </div>
        </b-row>
    </div>
</template>

<script>
import axios from "axios";
import storageService from "../../services/storage.service.js";

export default {
    data() {
        return {
            token: null,
            user: null,
            formations: null,
            updateTable: [
                {
                    date: "27/10/2020",
                    explications: "Modification de l'algorithme",
                },
                {
                    date: "22/09/2020",
                    explications: "Ajouts des données sociétales",
                },
                {
                    date: "15/07/2020",
                    explications: "Intégration de l'API: Quai des notaires",
                },
            ],
        };
    },
    mounted() {
        this.token = storageService.getToken();
        this.user = storageService.getUserID();

        axios
            .get(`${process.env.VUE_APP_ROOT_API}/api/v1/training/popular`, {
                params: {
                    offset: 0,
                    size: 4,
                },
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            })
            .then(
                function(data) {
                    this.formations = data.data;
                }.bind(this)
            );
    },
};
</script>

<style lang="scss" scoped>
.formations {
    margin-bottom: 20px;
    width: 100%;

    &-grid {
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        grid-gap: 40px 10px;
    }

    .btn-badge {
        margin-top: 20px;
        height: 40px;
        border-radius: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &-card {
        border: none;
        box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
        padding: 0;
        margin: 0;
        transition: 0.2s ease-out;
        cursor: pointer;

        &:hover {
            transform: translateY(-5px);
        }

        &-img {
            height: 130px;
            width: 100%;
            object-fit: cover;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        .card-content {
            padding: 30px 15px 20px;
        }

        a {
            color: var(--color-primary);

            &:hover {
                color: inherit;
            }
        }

        .card-body {
            padding: 0;
        }
    }
}

.direction-historic {
    color: var(--color-secondary);
    text-decoration: underline;
    cursor: pointer;
}

.section-calcul {
    border-radius: 10px;
    box-shadow: 0px 2px 6px 0px rgba(125, 125, 125, 0.5);
}

.section-calcul:hover {
    background-color: #d23367;
}

.section-calcul:hover > div.row.row-content > div.col-9:last-child > a {
    color: #fff !important;
}

.section-calcul:hover
    > div.row.row-content
    > div.text-center.col-3:first-child
    > i {
    color: #fff !important;
}

.btn-outline-dark ~ .btn-outline-dark {
    margin-left: 25px;
}

.btn-warning {
    background-color: #fff3cd !important;
    border-color: #ffeeba !important;
    color: #856404 !important;
    border-radius: 22px !important;
    width: 163px;
}

.btn-secondary {
    background-color: #d6d8d9 !important;
    border-color: #d6d8d9 !important;
    color: #1b1e21 !important;
    border-radius: 22px !important;
    width: 163px;
}

.btn-warning ~ .btn-secondary {
    margin-left: 25px;
}

.btn-infos {
    cursor: pointer;
    margin: 0;
    width: 200px;
    text-align: center;
    display: inline-block;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 2%;
    border-radius: 22px;
}

.section_col {
    padding: 0 !important;
    overflow: hidden;
    margin-top: 30px;
    margin-bottom: 30px;
}

.menu-title {
    display: -webkit-box;
    -webkit-box-align: center;
}

h2.title-infos {
    font-weight: bold;
    font-size: 30px;
    color: var(--color-primary);
}

h5 {
    font-weight: bold;
    color: var(--color-primary);
    margin-bottom: 20px;
}

.section_history > span + span {
    margin-left: 10px;
}

.section_time > span + span {
    margin-left: 10px;
}

.section_time {
    margin-bottom: 10px;
}

.row-content {
    padding: 2vh;
    align-items: center;
}
.right-column {
    margin: 4% 0% 0% 0%;
}
.left-column {
    margin: 4% 0% 0% 0%;
}
.left-column.col-4 {
    padding: 0;
}
.divider-edit {
    border-top: 1px solid #cccccc;
    width: 100%;
    margin: 0 auto;
    display: block;
}
</style>
