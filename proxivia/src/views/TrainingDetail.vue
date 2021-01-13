<template>
    <div v-if="training" style="margin-right:25px">
        <div class="homepage-section">
            <div class="content">
                <div class="detail-grid">
                    <div class="training-content">
                        <div class="training-content-header">
                            <h4>{{ training.title }}</h4>
                            <div class="align-icon">
                                <md-icon style="margin:0 10px 0 0;">
                                    history
                                </md-icon>
                                Dernière mise à jour le
                                {{ training.updatedAt | moment("DD/MM/YYYY") }}
                            </div>
                            <div class="align-icon">
                                <md-icon style="margin:0 10px 0 0;">
                                    help_outline </md-icon
                                >Durée de
                                {{
                                    training.length
                                        | timeInHoursAndMinutes(training.length)
                                }}
                            </div>
                            <div class="align-icon">
                                <md-icon style="margin:0 10px 0 0;">
                                    equalizer </md-icon
                                >293 participants
                            </div>
                            <div class="align-icon">
                                <md-icon style="margin:0 10px 0 0;">
                                    grade
                                </md-icon>
                                {{ training.grade }} (90 notes)
                            </div>
                            <div class="align-icon">
                                <md-icon style="margin:0 10px 0 0;">
                                    trending_up
                                </md-icon>
                                +{{ training.xpPoint }} points d'expérience pour
                                votre profil
                            </div>

                            <div
                                role="alert"
                                class="btn-badge"
                                :class="
                                    training.difficulty === 'Expert'
                                        ? 'alert-warning'
                                        : training.difficulty ===
                                          'Intermédiaire'
                                        ? 'alert-dark'
                                        : 'alert-success'
                                "
                            >
                                {{ training.difficulty }}
                            </div>
                        </div>

                        <div class="training-content-body">
                            <h5>Ce que vous apprenderez</h5>

                            <p>{{ training.description }}</p>

                            <b-card class="notions-card">
                                <div class="global-notions">
                                    <p
                                        v-for="(notion,
                                        index) in training.subject"
                                        :key="notion + index"
                                    >
                                        - {{ notion }}
                                    </p>
                                </div>
                            </b-card>
                        </div>

                        <div class="training-chapitres">
                            <h5>Detail de la formation</h5>

                            <div role="tablist">
                                <b-card
                                    no-body
                                    class="mb-2 border-0"
                                    v-for="(item, index) in training.details
                                        .chapter"
                                    :key="item + index"
                                >
                                    <b-card-header
                                        header-tag="header"
                                        class="p-0 border-0"
                                        role="tab"
                                    >
                                        <b-button
                                            block
                                            v-b-toggle="'accordion' + index"
                                            class=" training-card-header"
                                        >
                                            <div class="flex-accordion">
                                                <p class="chapitre-title">
                                                    {{ index + 1 }}.
                                                    {{ item.title }}
                                                </p>
                                                <p>{{ item.timecode }}</p>
                                            </div>
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse
                                        :id="'accordion' + index"
                                        visible
                                        accordion="my-accordion"
                                        role="tabpanel"
                                        class="accordion-shadow"
                                    >
                                        <b-card-body>
                                            <b-card-text>
                                                <div class="accordion-notions">
                                                    <p
                                                        v-for="(n,
                                                        index) in item.notions"
                                                        :key="n + index"
                                                    >
                                                        - {{ n }}
                                                    </p>
                                                </div>
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                        </div>
                    </div>

                    <div class="trainer-content">
                        <b-card class="trainer-card">
                            <img
                                class="trainer-cover"
                                src="../assets/images/training/training4.jpg"
                                :alt="
                                    training.trainer.firstname +
                                        ' ' +
                                        training.trainer.lastname +
                                        ' cover'
                                "
                            />
                            <b-card-header class="bg-white p-0">
                                <b-img
                                    rounded="circle"
                                    thumbnail
                                    class="trainer-content-avatar border-0"
                                    src="../assets/images/training/avatar1.jpg"
                                    :alt="
                                        training.trainer.firstname +
                                            ' ' +
                                            training.trainer.lastname +
                                            ' cover'
                                    "
                                />
                                <div class="trainer-card-info">
                                    <h5>
                                        {{ training.trainer.firstname }}
                                        {{ training.trainer.lastname }}
                                    </h5>
                                    <p>{{ training.trainer.about }}</p>
                                </div>

                                <div class="training-interaction">
                                    <button class="training-btn">
                                        Commencer le cours
                                    </button>
                                    <button
                                        @click="addTrainingToFavorite"
                                        class="training-btn training-btn-outline"
                                    >
                                        Enregistrer dans les favoris
                                    </button>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <div class="flex-trainer-body">
                                    <div>
                                        <h5>
                                            {{ training.trainer.totalTraining }}
                                        </h5>
                                        <p>formations</p>
                                    </div>
                                    <div>
                                        <h5>
                                            {{ training.trainer.totalViews }}
                                        </h5>
                                        <p>stagiaires</p>
                                    </div>
                                    <div>
                                        <h5>
                                            {{ training.trainer.totalArticle }}
                                        </h5>
                                        <p>articles</p>
                                    </div>
                                </div>
                            </b-card-body>
                            <b-card-footer
                                class="bg-white border-top p-0 trainer-footer"
                            >
                                Contacter le formateur
                            </b-card-footer>
                        </b-card>

                        <div class="ressources">
                            <h5>Ressources</h5>

                            <div v-if="training.ressources.length === 0">
                                <p>
                                    Il n'y a pas de ressources disponible pour
                                    ce cours
                                </p>
                            </div>

                            <div v-else>
                                <div
                                    class="flex-ressources"
                                    v-for="(ressource,
                                    index) in training.ressources"
                                    :key="index"
                                >
                                    <md-icon class="ressources-icon">
                                        description
                                    </md-icon>
                                    <p>{{ ressource }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="formations" class="homepage-section">
            <div class="formations">
                <h6>Formations que vous pourriez apprécier</h6>

                <div class="formations-grid">
                    <b-card
                        class="formations-card"
                        :key="index"
                        v-for="(formation, index) in formations"
                        align="center"
                    >
                        <router-link
                            :to="{
                                name: 'formation-detail',
                                params: { id: formation._id },
                            }"
                        >
                            <img
                                class="formations-card-img"
                                :src="formation.image"
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
        </div>
    </div>
</template>

<script>
import axios from "axios";
import storageService from "../services/storage.service.js";

export default {
    name: "TrainingDetail",
    data() {
        return {
            training: null,
            formations: null,
            token: null,
        };
    },
    filters: {
        timeInHoursAndMinutes: function(val) {
            const hours = Math.floor(val / 60);
            const minutes = val % 60;
            return `${hours} heures et ${minutes} minutes`;
        },
    },
    mounted() {
        this.token = storageService.getToken();

        axios
            .get(
                `${process.env.VUE_APP_ROOT_API}/api/v1/training/${this.$route.params.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                    },
                }
            )
            .then(
                function(training) {
                    this.training = training.data;
                    return training;
                }.bind(this)
            )
            .then(
                function() {
                    axios
                        .get(
                            `${process.env.VUE_APP_ROOT_API}/api/v1/training/popular`,
                            {
                                params: {
                                    offset: 0,
                                    size: 4,
                                },
                                headers: {
                                    Authorization: `Bearer ${this.token}`,
                                },
                            }
                        )
                        .then(
                            function(formations) {
                                this.formations = formations.data;
                            }.bind(this)
                        );
                }.bind(this)
            )
            .catch(
                function() {
                    this.$router.push("/formation");
                }.bind(this)
            );
    },
    methods: {
        addTrainingToFavorite() {
            axios.post(
                `${process.env.VUE_APP_ROOT_API}/api/v1/training/${this.$route.params.id}/favorite`,
                {
                    refId: this.$route.params.id,
                },
                {
                    headers: { Authorization: `Bearer ${this.token}` },
                }
            );
        },
    },
};
</script>

<style scoped lang="scss">
.detail-grid {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    .training-content {
        grid-column: 1 / 4;
        margin-right: 10px;

        .align-icon {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            margin-top: 15px;
        }

        .btn-badge {
            display: inline-block;
            padding: 10px 30px;
            border-radius: 50vh;
            margin: 20px 0;
        }

        &-body {
            margin: 25px 0 40px;
        }

        .notions-card {
            margin-top: 35px;
            padding: 0 20px;
            border: none;
            box-shadow: -2px 6px 9px rgba(0, 0, 0, 0.2),
                0 2px 5px rgba(0, 0, 0, 0.1);

            .global-notions {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: auto;
            }
        }

        .training-chapitres {
            margin-top: 50px;

            .training-card-header {
                background-color: var(--color-primary);

                .flex-accordion {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 15px;
                }
            }

            .accordion-notions {
                padding: 10px 15px 0;
            }

            .accordion-shadow {
                box-shadow: 0 6px 9px rgba(0, 0, 0, 0.15);
                border-radius: 7px;
            }
        }
    }

    .trainer-content {
        grid-column: 4 / 6;
        margin-left: 20px;
        padding: 0;

        .trainer-cover {
            height: 200px;
            width: 100%;
            object-fit: cover;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

        .card-body {
            padding: 0;
        }

        .trainer-card {
            border: none;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.175);

            &-info {
                padding-top: 90px;
                text-align: center;

                h5 {
                    margin: 0 0 10px;
                }

                p {
                    margin-bottom: 30px;
                }
            }

            .training-interaction {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 15px;

                .training-btn {
                    color: white;
                    background: var(--color-secondary);
                    padding: 10px 20px;
                    margin-bottom: 10px;
                    border: 1px solid var(--color-secondary);
                    border-radius: 5px;
                    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

                    &-outline {
                        background: white;
                        color: var(--color-secondary);
                    }
                }
            }

            .flex-trainer-body {
                display: flex;
                justify-content: space-around;
                align-items: center;

                div {
                    text-align: center;
                    padding: 30px 0 15px;

                    h5 {
                        margin: 0;
                    }
                }
            }

            .trainer-footer {
                padding: 40px 0 !important;
                text-align: center;
                color: var(--color-secondary);
            }
        }

        &-avatar {
            width: 125px;
            height: 125px;
            object-fit: cover;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.175);
        }

        .ressources {
            margin-top: 50px;

            .flex-ressources {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin-bottom: 20px;

                p {
                    flex-grow: 4;
                    margin: 0;
                    padding: 0;
                }
            }

            &-icon {
                width: 50px;
                height: 50px;
                padding: 20px;
                border: none;
                border-radius: 50vh;
                box-shadow: 0 2px 12px rgba(0, 0, 0, 0.175);
                margin-right: 20px;
            }
        }
    }
}

.formations {
    padding: 2rem;
}

a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    width: 100%;
}

.formations-grid {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 40px 10px;

    .btn-badge {
        margin-top: 20px;
        height: 40px;
        border-radius: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .formations-card {
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
            color: black;
        }

        .card-content {
            padding: 30px 15px 20px;
            color: black;
        }

        .card-body {
            padding: 0;
        }
    }
}

.line-after {
    position: relative;

    &:after {
        position: absolute;
        content: "";
        height: 2px;
        width: 100%;
        top: 50%;
        right: 0;
        background: #333;
    }
}

h4,
h5 {
    font-weight: 600;
    margin-bottom: 20px;
}
</style>
