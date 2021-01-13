<template>
    <div v-if="favoris">
        <div class="formations">
            <h5>Mes cours favoris</h5>

            <div class="formations-grid pb-5">
                <b-card
                    class="formations-card"
                    align="center"
                    v-for="fav in favoris"
                    :key="fav._id"
                >
                    <router-link
                        :to="{
                            name: 'formation-detail',
                            params: { id: fav.refId },
                        }"
                    >
                        <img
                            class="formations-card-img"
                            :src="fav.refId.cover"
                            :alt="fav.refId.title + ' - cover'"
                        />
                        <div class="card-content">
                            <h6>{{ fav.refId.title }}</h6>
                            <small
                                >{{ fav.refId.trainer.firstname }}
                                {{ fav.refId.trainer.lastname }}</small
                            >
                            <div
                                role="alert"
                                class="btn-badge"
                                :class="
                                    fav.refId.difficulty === 'Expert'
                                        ? 'alert-warning'
                                        : fav.refId.difficulty ===
                                          'Intermédiaire'
                                        ? 'alert-dark'
                                        : 'alert-success'
                                "
                            >
                                {{ fav.refId.difficulty }}
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
            favoris: null,
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
            .then(
                function(result) {
                    this.favoris = result.data.trainings.filter((val) => {
                        return val.favorite;
                    });
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
