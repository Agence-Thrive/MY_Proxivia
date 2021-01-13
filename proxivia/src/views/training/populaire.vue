<template>
    <div v-if="trends">
        <div class="trends">
            <div class="trends-grid">
                <router-link
                    class="card"
                    :to="{
                        name: 'formation-detail',
                        params: { id: trends[0]._id },
                    }"
                >
                    <div>
                        <h6>{{ trends[0].title }}</h6>
                        <small
                            >{{ trends[0].trainer.firstname }}
                            {{ trends[0].trainer.firstname }}</small
                        >
                        <img
                            src="../../assets/images/play-btn.svg"
                            alt="Play button"
                        />
                        <div class="time">
                            <p class="clock-icon">
                                {{ trends[0].length }} min
                                <md-icon
                                    style="margin-left: 8px; color: white;"
                                >
                                    history
                                </md-icon>
                            </p>
                        </div>
                    </div>
                </router-link>

                <router-link
                    class="card"
                    :to="{
                        name: 'formation-detail',
                        params: { id: trends[1]._id },
                    }"
                >
                    <h6>{{ trends[1].title }}</h6>
                    <small
                        >{{ trends[1].trainer.firstname }}
                        {{ trends[1].trainer.firstname }}</small
                    >
                    <img
                        src="../../assets/images/play-btn.svg"
                        alt="Play button"
                    />
                </router-link>

                <router-link
                    class="card"
                    :to="{
                        name: 'formation-detail',
                        params: { id: trends[2]._id },
                    }"
                >
                    <h6>{{ trends[2].title }}</h6>
                    <small
                        >{{ trends[2].trainer.firstname }}
                        {{ trends[2].trainer.firstname }}</small
                    >
                    <img
                        src="../../assets/images/play-btn.svg"
                        alt="Play button"
                    />
                </router-link>

                <router-link
                    class="card"
                    :to="{
                        name: 'formation-detail',
                        params: { id: trends[3]._id },
                    }"
                >
                    <h6>{{ trends[3].title }}</h6>
                    <small
                        >{{ trends[3].trainer.firstname }}
                        {{ trends[3].trainer.firstname }}</small
                    >
                    <img
                        src="../../assets/images/play-btn.svg"
                        alt="Play button"
                    />
                </router-link>
            </div>
        </div>

        <div class="formations">
            <h5>Les formations les plus populaires</h5>
            <p>Les vidéos les plus consultées par les experts Proxivia</p>

            <div class="formations-grid">
                <b-card
                    class="formations-card"
                    align="center"
                    v-for="(formation, index) in formations"
                    :key="index"
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
    </div>
</template>

<script>
import axios from "axios";
import storageService from "../../services/storage.service.js";

export default {
    data() {
        return {
            trends: null,
            formations: null,
            token: null,
        };
    },
    mounted() {
        this.token = storageService.getToken();

        axios
            .get(`${process.env.VUE_APP_ROOT_API}/api/v1/training/popular`, {
                params: {
                    offset: 0,
                    size: 4,
                },
                headers: { Authorization: `Bearer ${this.token}` },
            })
            .then(
                function(result) {
                    this.trends = result.data;
                }.bind(this)
            );

        axios
            .get(`${process.env.VUE_APP_ROOT_API}/api/v1/training/popular`, {
                params: {
                    offset: 4,
                    size: 8,
                },
                headers: { Authorization: `Bearer ${this.token}` },
            })
            .then(
                function(result) {
                    this.formations = result.data;
                }.bind(this)
            );
    },
};
</script>

<style lang="scss" scoped>
.trends-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 18vh);
    grid-gap: 20px 30px;
    margin: 20px 0;

    .card {
        border-radius: 10px;
        color: white;
        padding: 4% 8%;
        box-shadow: 0 9px 15px rgba(0, 0, 0, 0.2);
        transition: 0.2s ease-out;
        cursor: pointer;

        &:hover {
            transform: translateY(-3px);
            color: white;
        }

        &:before {
            z-index: 0;
            content: "";
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.45;
            border-radius: 10px;
            position: absolute;
            left: 0;
            top: 0;
        }

        div,
        h6,
        small,
        img {
            z-index: 2;
        }

        h6 {
            margin: 0;
            color: white !important;
            font-weight: 400 !important;
        }

        img {
            position: absolute;
            bottom: 2%;
            left: 6%;
            max-height: 75px;
            height: 30%;
        }

        .time {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 35%;
            max-width: 130px;
            height: 20%;
            background: var(--color-primary);
            border-radius: 33px 0 10px 0;
            display: flex;
            align-items: center;
            justify-content: center;

            .clock-icon {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
            }
        }
    }

    .card:nth-child(1) {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
        background: url("../../assets/images/training/training1.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: none;
    }
    .card:nth-child(2) {
        grid-column: 3 / 5;
        grid-row: 1 / 2;
        background: url("../../assets/images/training/training3.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: none;
    }
    .card:nth-child(3) {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
        background: url("../../assets/images/training/training4.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: none;
    }
    .card:nth-child(4) {
        grid-column: 4 / 5;
        grid-row: 2 / 3;
        background: url("../../assets/images/training/training2.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: none;
    }
}

.formations {
    margin-top: 40px;

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

        a {
            color: black;

            &:hover {
                color: inherit;
            }
        }

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

        .card-body {
            padding: 0;
        }
    }
}
</style>
