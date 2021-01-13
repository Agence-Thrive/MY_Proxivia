<template>
    <div class="my-4">
        <b-row>
            <b-col cols="5">
                <div class="section-profil">
                    <b-img
                        rounded="circle"
                        class="profil-avatar shadow"
                        thumbnail
                        :src="'data:image/jpeg;base64,' + profilePhoto"
                        :alt="
                            ' photo de profil de ' +
                                user.firstname +
                                ' ' +
                                user.lastname
                        "
                    />
                    <div style="line-height: 30px">
                        <span class="profil-name mt-3">
                            {{ user.firstname }} {{ user.lastname }}
                        </span>
                        <span class="profil-info">Reponsable d'agence</span>
                        <b-button
                            class="button btn-outline-primary mt-3"
                            v-b-modal.profilePhotoModal
                        >
                            Modifier la photo de profil
                        </b-button>

                        <b-modal
                            id="profilePhotoModal"
                            centered
                            size="lg"
                            title="Modifier la photo de profil"
                        >
                            <b-row class="d-flex align-items-center">
                                <b-col md="7">
                                    <b-form>
                                        <b-form-group
                                            label="Choisissez une nouvelle photo de profil"
                                        >
                                            <b-form-file
                                                placeholder="Faire glisser le fichier"
                                                browse-text="Sélectionner"
                                                accept=".jpg, .png"
                                                @change="changePreviewPhoto"
                                            >
                                            </b-form-file>
                                        </b-form-group>
                                    </b-form>
                                </b-col>

                                <b-col
                                    md="5"
                                    class="d-flex justify-content-center align-items-center"
                                >
                                    <b-img
                                        fluid
                                        thumbnail
                                        :src="
                                            'data:image/jpeg;base64,' +
                                                profilePhoto
                                        "
                                        alt="Photo de profil"
                                        class="shadow rounded profil-avatar-preview"
                                    />
                                </b-col>
                            </b-row>

                            <template v-slot:modal-footer="{ hide }">
                                <div class="float-right">
                                    <b-button
                                        variant="secondary"
                                        @click="hide()"
                                    >
                                        Fermer
                                    </b-button>
                                    <b-button
                                        :disabled="disabledButton"
                                        variant="primary"
                                        class="ml-2"
                                        @click="updateProfilePhoto"
                                    >
                                        Enregistrer
                                    </b-button>
                                </div>
                            </template>
                        </b-modal>
                    </div>

                    <li class="divider"></li>

                    <span class="profil-info">Mon niveau d'expertise</span>

                    <div
                        style="margin-top: 10px; margin-bottom: 10px; display: flex; place-content: center;"
                    >
                        <b-progress
                            class="progress-profil"
                            :value="value"
                            :max="max"
                        ></b-progress>
                        <p style="padding-left: 10px;">{{ value }} %</p>
                    </div>

                    <div>
                        <a style="text-decoration: underline; " href="#"
                            >Suivre une formation</a
                        >
                    </div>

                    <li class="divider"></li>
                    <img
                        class="profil-photo social-network"
                        src="../../assets/images/socialnetwork.png"
                    />
                </div>

                <div style="margin-top: 20px;" class="section-parrainage">
                    <div class="row row-content">
                        <b-col class="text-center" cols="3"
                            ><i class="material-icons"
                                >supervisor_account</i
                            ></b-col
                        >
                        <b-col cols="9"
                            ><a class="no-coloration" href="#"
                                >Parrainer un utilisateur</a
                            ></b-col
                        >
                    </div>
                </div>

                <div style="margin-top: 20px;" class="section-stats">
                    <div class="row row-content">
                        <b-col class="text-center" cols="3"
                            ><i class="material-icons">timeline</i></b-col
                        >
                        <b-col cols="9"
                            ><a class="no-coloration" href="#"
                                >Mes statistiques utilisateur</a
                            ></b-col
                        >
                    </div>
                </div>
            </b-col>

            <b-col cols="7">
                <div class="section-edition">
                    <div class="edition-action">
                        <b-col md="6" class="pl-3">
                            <h6>Éditer le profil personnel</h6>
                        </b-col>

                        <b-col md="6" class="pr-1">
                            <b-button
                                class="button btn-outline-primary float-right mr-2"
                            >
                                Enregistrer
                            </b-button>
                        </b-col>
                    </div>

                    <div class="divider my-0"></div>
                    <form
                        class="needs-validation"
                        novalidate
                        @submit="updateUser"
                    >
                        <b-col>
                            <div>
                                <div class="mt-2">Prénom</div>
                                <b-form-input
                                    id="validationCustom01"
                                    class="form-input-edit"
                                    type="text"
                                    placeholder="Prénom"
                                    v-model="info.firstname"
                                ></b-form-input>
                                <div class="invalid-feedback">
                                    Le Prénom est incorrect, 2 caractères
                                    minimum.
                                </div>
                            </div>
                        </b-col>

                        <b-col>
                            <div>
                                <div class="mt-2">Nom</div>
                                <b-form-input
                                    id="validationCustom02"
                                    required
                                    class="form-input-edit"
                                    type="text"
                                    placeholder="Nom"
                                    v-model="info.lastname"
                                ></b-form-input>
                                <div class="valid-feedback">
                                    Le Nom est correct.
                                </div>
                                <div class="invalid-feedback">
                                    Le Nom est incorrect, 2 caractères minimum.
                                </div>
                            </div>
                        </b-col>
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <div class="mt-2">Adresse mail</div>
                                    <b-form-input
                                        required
                                        id="emailadress"
                                        class="form-input-edit"
                                        type="email"
                                        placeholder="Adresse mail"
                                        v-model="info.email"
                                    ></b-form-input>
                                    <div class="valid-feedback">
                                        L'adresse mail est valide.
                                    </div>
                                    <div class="invalid-feedback">
                                        L'adresse mail est invalide.
                                    </div>
                                </div>
                            </b-col>
                            <b-col>
                                <div>
                                    <div class="mt-2">Téléphone</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="tel"
                                        placeholder="Téléphone"
                                        v-model="info.phone"
                                    ></b-form-input>
                                    <div class="invalid-feedback">
                                        Le numéro de téléphone est invalide.
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <div class="mt-2">Adresse</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="ex : 38 cours de l'intendance"
                                        v-model="info.address"
                                    ></b-form-input>
                                    <div class="invalid-feedback">
                                        L'adresse est incorrecte.
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <div class="mt-2">Ville</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="Ville"
                                        v-model="info.city"
                                    ></b-form-input>
                                    <div class="invalid-feedback">
                                        La ville renseignée est incorrecte.
                                    </div>
                                </div>
                            </b-col>
                            <b-col>
                                <div>
                                    <div class="mt-2">Pays</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="Pays"
                                        v-model="info.country"
                                    ></b-form-input>
                                    <div class="invalid-feedback">
                                        Le pays renseigné est incorrect.
                                    </div>
                                </div>
                            </b-col>
                            <b-col>
                                <div>
                                    <div class="mt-2">Code Postal</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="Code Postal"
                                        v-model="info.postal"
                                    ></b-form-input>
                                    <div class="invalid-feedback">
                                        Le code postal renseigné est incorrecte.
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col cols="8">
                                <div>
                                    <div class="mt-2">Carte T</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="ex: 2016-173"
                                    ></b-form-input>
                                    <div class="invalid-feedback">
                                        Veuillez renseigner une carte T valide.
                                    </div>
                                </div>
                            </b-col>
                            <b-col>
                                <div>
                                    <div class="mt-2">Date d'obtention</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="ex: 2018"
                                    ></b-form-input>
                                    <div class="invalid-feedback">
                                        Veuillez renseigner une date valide.
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <div class="mt-2">À propos de moi</div>
                                    <b-form-textarea
                                        required
                                        class="form-input-edit-area"
                                        type="text"
                                        placeholder="Présentez vous en quelques lignes. Ces informations seront partagés aux autres utilisateurs du réseau Proxivia"
                                    ></b-form-textarea>
                                </div>
                            </b-col>
                        </b-row>
                    </form>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from "axios";
import fileUpload from "fuctbase64";
import storageService from "../../services/storage.service.js";

export default {
    data() {
        return {
            value: 70,
            max: 100,
            token: null,
            userID: null,
            user: null,
            profilePhoto: "",
            disabledButton: false,
        };
    },
    props: ["info"],
    created() {},
    methods: {
        updateUser(e) {
            e.preventDefault();
            let currentObj = this;
            axios
                .put(
                    `${process.env.VUE_APP_ROOT_API}/api/v1/users/${this.user}`,
                    this.info,
                    {
                        headers: {
                            Authorization: `Bearer ${this.token}`,
                        },
                    }
                )
                .then(function(response) {
                    currentObj.output = response.data;
                })
                .catch(function(error) {
                    currentObj.output = error;
                });
        },
        changePreviewPhoto: function(e) {
            // console.log(e.target.files[0].size);
            // if (e.target.files[0].size > 1000000) {
            //     this.$bvToast.toast(
            //         `Le fichier que vous souhaitez charger est trop lourd, choisissez en un autre ou réduisez la taille de celui-ci.`,
            //         {
            //             title: "Taille du fichier trop élevé.",
            //             variant: "danger",
            //             autoHideDelay: 5000,
            //         }
            //     );

            //     this.disabledButton = true;
            // } else {
            fileUpload(e).then(
                function(data) {
                    this.profilePhoto = data.base64;
                }.bind(this)
            );
            //     this.disabledButton = false;
            // }
        },
        updateProfilePhoto() {
            var updatedUser = {
                ...this.info,
            };
            updatedUser.avatar = this.profilePhoto;

            axios
                .put(
                    `${process.env.VUE_APP_ROOT_API}/api/v1/users/${this.info._id}`,
                    updatedUser,
                    {
                        headers: {
                            Authorization: `Bearer ${this.token}`,
                        },
                    }
                )
                .then(
                    function() {
                        axios
                            .get(
                                `${process.env.VUE_APP_ROOT_API}/api/v1/users/${this.info._id}`,
                                {
                                    headers: {
                                        Authorization: `Bearer ${this.token}`,
                                    },
                                }
                            )
                            .then(
                                function(data) {
                                    this.user = data.data;
                                    this.profilePhoto = data.data.avatar;

                                    this.$bvModal.hide("profilePhotoModal");
                                }.bind(this)
                            );
                    }.bind(this)
                );
        },
    },
    mounted() {
        this.token = storageService.getToken();
        this.userID = storageService.getUserID();
        this.user = this.info;
        this.profilePhoto = this.info.avatar;
    },
    watch: {},
};
</script>

<style lang="css">
.edition-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
}

.button {
    width: 70%;
    padding: 6px 25px;
    border-radius: 5px;
    outline: none !important;
    font-size: 0.9rem;
}

.btn-outline-primary {
    border: 1px solid var(--color-secondary) !important;
    color: var(--color-secondary) !important;
    background: white !important;
    transition: 0.2s;
    outline: none !important;
}

.btn-outline-primary:hover {
    border: 1px solid var(--color-secondary) !important;
    background: var(--color-secondary) !important;
    color: white !important;
}

.invalid-feedback {
    color: #f53c56 !important;
}
.invalid-feedback,
.valid-feedback {
    position: absolute;
}

.was-validated .form-control:invalid,
.form-control.is-invalid {
    border: 1.49px solid #f53c56 !important;
}

.form-input-edit-area {
    height: max-content;
    padding: 4% !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
    filter: drop-shadow(0px 2px 4px rgba(23, 23, 23, 0.18)) !important;
    border: none !important;
    overflow: visible !important;
    width: 100% !important;
    color: black !important;
    background: #f7fafc !important;
}
.form-input-edit {
    padding: 4% !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
    filter: drop-shadow(0px 2px 4px rgba(23, 23, 23, 0.18)) !important;
    border: none !important;
    overflow: visible !important;
    width: 100% !important;
    height: 48px !important;
    color: black !important;
    background: #f7fafc !important;
}
.form-control {
    border-radius: 6px !important;
}
.form-control::placeholder {
    color: #8898aa;
}
.form-control:focus {
    color: #495057;
    background-color: #fff;
    border: 1.5px outset #3c485b !important;
    outline: 0;
    box-shadow: 0 0 0 1.1px rgba(0, 0, 0, 0.71) !important;
}
.btn-prospect {
    filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
    overflow: visible;
    width: 160px;
    height: 40px;
    background-color: #fff !important;
    border: 1.5px solid #d23367 !important;
    color: #d23367 !important;
    border-radius: 4px !important;
    cursor: pointer;
}
.row-content {
    padding: 2vh;
    align-items: center;
}
.right-column {
    margin: 4%;
}
.left-column {
    margin: 4%;
}
.left-column.col-4 {
    padding: 0;
}
.section-profil {
    border-radius: 10px;
    box-shadow: 0px 2px 6px 0px rgba(125, 125, 125, 0.5);
    text-align: center;
    padding-top: 30px !important;
}
.section-parrainage {
    border-radius: 10px;
    box-shadow: 0px 2px 6px 0px rgba(125, 125, 125, 0.5);
}
.section-stats {
    border-radius: 10px;
    box-shadow: 0px 2px 6px 0px rgba(125, 125, 125, 0.5);
}
.section-edition {
    border-radius: 10px;
    box-shadow: 0px 2px 6px 0px rgba(125, 125, 125, 0.5);
}
.profil-photo {
    width: 146px;
}
.profil-name {
    font-size: 25px;
    color: #172b4d;
    display: block;
    width: 100%;
}
.profil-info {
    font-size: 15px;
    display: block;
    color: var(--color-primary);
    width: 100%;
}
.btn-profil {
    filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
    overflow: visible;
    width: 70%;
    height: 40px;
    background-color: #fff !important;
    border: 1.5px solid #d23367 !important;
    color: #d23367 !important;
    border-radius: 4px !important;
    cursor: pointer;
    margin-top: 10px !important;
}
.divider {
    border-top: 1px solid #cccccc;
    width: 100%;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 25px;
    display: block;
}
.divider-edit {
    border-top: 1px solid #cccccc;
    width: 100%;
    margin: 0 auto;
    display: block;
}
.progress {
    margin: 0 !important;
}
.progress-profil {
    width: 50% !important;
    margin: 0 auto;
}
.social-network {
    margin-top: 20px;
    margin-bottom: 50px;
}
i.material-icons {
    font-size: 36px;
    color: #c8d2e2;
}
a.no-coloration {
    color: #172b4d !important;
    font-size: 15px;
    text-decoration: none !important;
    list-style: none !important;
}
a.no-coloration:hover {
    color: #172b4d !important;
    font-size: 15.1px;
    text-decoration: none !important;
    list-style: none !important;
}

.profil-avatar {
    height: 130px !important;
    width: 130px !important;
    object-fit: cover;
}

.profil-avatar-preview {
    max-height: 300px;
    max-width: 300px;
    object-fit: cover;
}
</style>
