<template>
    <div v-if="formations">
        <div class="formations">
            <h5>Formations récemment ajoutées</h5>

            <div class="formations-grid pb-5">
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
            formations: null,
            token: null,
        };
    },
    mounted() {
        this.token = storageService.getToken();

        axios
            .get(`${process.env.VUE_APP_ROOT_API}/api/v1/training/newer`, {
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
.formations {
    margin-top: 20px;

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
