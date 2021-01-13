<template>
    <div>
        <div class="formations">
            <h5>Mes formations en cours</h5>

            <div v-if="enrolled.length === 0" class="mt-4 pb-5">
                <p>
                    Vous n'avez pas débuté de formation pour le moment
                </p>
            </div>

            <div v-if="enrolled.length > 0" class="formations-grid">
                <b-card
                    class="formations-card"
                    align="center"
                    v-for="course in enrolled"
                    :key="course._id"
                >
                    <router-link
                        :to="{
                            name: 'formation-detail',
                            params: { id: course.refId },
                        }"
                    >
                        <img
                            class="formations-card-img"
                            :src="course.refId.cover"
                            :alt="course.refId.title + ' - cover'"
                        />
                        <div class="card-content">
                            <h6>{{ course.refId.title }}</h6>
                            <small
                                >{{ course.refId.trainer.firstname }}
                                {{ course.refId.trainer.lastname }}</small
                            >
                            <div
                                role="alert"
                                class="btn-badge"
                                :class="
                                    course.refId.difficulty === 'Expert'
                                        ? 'alert-warning'
                                        : course.refId.difficulty ===
                                          'Intermédiaire'
                                        ? 'alert-dark'
                                        : 'alert-success'
                                "
                            >
                                {{ course.refId.difficulty }}
                            </div>
                        </div>
                        <h1>{{ course.refId }}</h1>
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
            enrolled: null,
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
                    this.enrolled = result.data.trainings.filter((val) => {
                        return val.enrolled;
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
