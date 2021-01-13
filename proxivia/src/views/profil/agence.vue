<template>
    <div class="my-3">
        <b-row>
            <b-col cols="5">
                <div class="section-profil">
                    <div style="line-height: 30px">
                        <img
                            class="border shadow rounded logo-agence-img"
                            :src="'data:image/jpeg;base64,' + company.avatar"
                        />
                    </div>

                    <li class="divider"></li>

                    <div>
                        <b-button
                            class="button btn-outline-primary"
                            v-b-modal.logoModal
                        >
                            Modifier le logotype
                        </b-button>

                        <b-modal
                            id="logoModal"
                            centered
                            size="lg"
                            title="Modifier le logotype"
                        >
                            <b-row class="d-flex align-items-center">
                                <b-col md="7">
                                    <b-form>
                                        <b-form-group
                                            label="Choisissez un nouveau logotype"
                                        >
                                            <b-form-file
                                                class="form-file-logo"
                                                placeholder="Faire glisser le fichier"
                                                browse-text="Sélectionner"
                                                accept=".jpg, .png"
                                                @change="changePreview"
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
                                                agenceLogo
                                        "
                                        alt="logo agence"
                                        class="shadow rounded"
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
                                        variant="primary"
                                        class="ml-2"
                                        @click="updateAvatar"
                                    >
                                        Enregistrer
                                    </b-button>
                                </div>
                            </template>
                        </b-modal>
                    </div>
                    <li class="divider"></li>
                    <img
                        style="width: 80%"
                        src="../../assets/images/adduser.png"
                    />

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
                                >Ajouter un collaborateur</a
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
                                >Statistique de l'agence</a
                            ></b-col
                        >
                    </div>
                </div>

                <div style="margin-top: 20px;" class="section-stats">
                    <div class="row row-content">
                        <b-col class="text-center" cols="3"
                            ><i class="material-icons">all_inbox</i></b-col
                        >
                        <b-col cols="9"
                            ><a class="no-coloration" href="#"
                                >Suivi des factures Proxivia</a
                            ></b-col
                        >
                    </div>
                </div>
            </b-col>

            <b-col cols="7">
                <div class="section-edition">
                    <div class="edition-action">
                        <b-col md="6" class="pl-3"
                            ><h6>Éditer le profil d'agence</h6></b-col
                        >
                        <b-col md="6" class="pr-1">
                            <b-button
                                class="button btn-outline-primary float-right mr-2"
                                >Enregistrer</b-button
                            >
                        </b-col>
                    </div>

                    <div class="divider my-0"></div>

                    <b-form @submit="onClickButton">
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <div class="mt-2">Raison social</div>
                                    <b-form-input
                                        required
                                        chips
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="Raison social"
                                        v-model="company.name"
                                    ></b-form-input>
                                </div>
                            </b-col>
                            <b-col>
                                <div>
                                    <div class="mt-2">Forme juridique</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="ex: SAS"
                                        v-model="company.legalType"
                                    ></b-form-input>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <div class="mt-2">
                                        Adresse mail générique
                                    </div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="email"
                                        placeholder="Adresse mail"
                                        v-model="company.email"
                                    ></b-form-input>
                                </div>
                            </b-col>
                            <b-col>
                                <div>
                                    <div class="mt-2">
                                        Numéro de téléphone fixe
                                    </div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="tel"
                                        placeholder="Téléphone"
                                        v-model="company.phone"
                                    ></b-form-input>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <div class="mt-2">
                                        Adresse du siège social
                                    </div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="ex : 38 cours de l'intendance"
                                        v-model="company.address"
                                    ></b-form-input>
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
                                        v-model="company.city"
                                    ></b-form-input>
                                </div>
                            </b-col>
                            <b-col>
                                <div>
                                    <div class="mt-2">Pays</div>
                                    <b-form-input
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="Pays"
                                        v-model="company.country"
                                    ></b-form-input>
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
                                        v-model="company.postcode"
                                    ></b-form-input>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col lg="12">
                                <div>
                                    <div class="mt-2">Siret</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="ex : 855663820012"
                                        v-model="company.siret"
                                    ></b-form-input>
                                </div>
                            </b-col>
                            <b-col lg="12">
                                <div>
                                    <div class="mt-2">
                                        TVA Intracommunautaire
                                    </div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="ex : FR76538849002846"
                                        v-model="company.tva"
                                    ></b-form-input>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <div class="mt-2">Carte T</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="ex: 2016-173"
                                        v-model="company.tCard"
                                    ></b-form-input>
                                </div>
                            </b-col>
                            <b-col>
                                <div>
                                    <div class="mt-2">Chambre de commerce</div>
                                    <b-form-input
                                        required
                                        class="form-input-edit"
                                        type="text"
                                        placeholder="ex: Toulouse"
                                        v-model="company.commercialChamber"
                                    ></b-form-input>
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
                                        v-model="company.date"
                                    ></b-form-input>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <div class="mt-2">
                                        Mentions obligatoires
                                    </div>
                                    <b-form-textarea
                                        required
                                        class="form-input-edit-area"
                                        type="text"
                                        placeholder="Indiquez les mentions obligatoires. Elles figurerons sur l'ensemble des documents que vous générerez via l'outil Proxivia."
                                        v-model="company.mendatoryParticulars"
                                    ></b-form-textarea>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <div class="mt-2">À propos de l'agence</div>
                                    <b-form-textarea
                                        required
                                        class="form-input-edit-area"
                                        type="text"
                                        placeholder="Indiquez les mentions obligatoires. Elles figurerons sur l'ensemble des documents que vous générerez via l'outil Proxivia."
                                        v-model="company.about"
                                    ></b-form-textarea>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="row-content">
                            <b-col>
                                <div>
                                    <b-form-checkbox
                                        v-model="mediateur"
                                        switch
                                        size="lg"
                                        >Indiquer un médiateur</b-form-checkbox
                                    >
                                </div>
                            </b-col>
                        </b-row>
                        <div
                            v-bind:class="[mediateur ? 'isActive' : 'isHidden']"
                            class="mediateur-section"
                        >
                            <b-row class="row-content">
                                <b-col>
                                    <div>
                                        <div class="mt-2">Prénom</div>
                                        <b-form-input
                                            class="form-input-edit"
                                            type="text"
                                            placeholder="Prénom"
                                            v-model="company.mediator"
                                        ></b-form-input>
                                    </div>
                                </b-col>
                                <b-col>
                                    <div>
                                        <div class="mt-2">Nom</div>
                                        <b-form-input
                                            class="form-input-edit"
                                            type="text"
                                            placeholder="Nom"
                                        ></b-form-input>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row class="row-content">
                                <b-col>
                                    <div>
                                        <div class="mt-2">Adresse mail</div>
                                        <b-form-input
                                            class="form-input-edit"
                                            type="email"
                                            placeholder="Adresse mail"
                                        ></b-form-input>
                                    </div>
                                </b-col>
                                <b-col>
                                    <div>
                                        <div class="mt-2">Téléphone</div>
                                        <b-form-input
                                            class="form-input-edit"
                                            type="tel"
                                            placeholder="Téléphone"
                                        ></b-form-input>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </b-form>
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
            mediateur: false,
            value: 70,
            max: 100,
            token: null,
            user: null,

            agency: false,
            company: {},
            agenceLogo: "",
        };
    },
    props: ["info"],
    methods: {
        onClickButton: function(e) {
            e.preventDefault();
            if (this.agency === false) {
                axios
                    .post(
                        `${process.env.VUE_APP_ROOT_API}/api/v1/company`,
                        {
                            name: this.company.name,
                            legalType: this.company.legalType,
                            email: this.company.email,
                            phone: this.company.phone,
                            address: this.company.address,
                            country: this.company.country,
                            city: this.company.city,
                            postcode: this.company.postcode,
                            siret: this.company.siret,
                            tva: this.company.tva,
                            tCard: this.company.tCard,
                            commercialChamber: this.company.commercialChamber,
                            date: this.company.date,
                            mendatoryParticulars: this.company
                                .mendatoryParticulars,
                            about: this.company.about,
                            mediator: this.company.mediator,
                            avatar: this.company.avatar,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${this.token}`,
                            },
                        }
                    )
                    .then(function(result) {
                        return result;
                    })
                    .catch(function(err) {
                        throw err;
                    });
            } else {
                axios
                    .put(
                        `${process.env.VUE_APP_ROOT_API}/api/v1/company/${this.company._id}`,
                        {
                            name: this.company.name,
                            legalType: this.company.legalType,
                            email: this.company.email,
                            phone: this.company.phone,
                            address: this.company.address,
                            country: this.company.country,
                            city: this.company.city,
                            postcode: this.company.postcode,
                            siret: this.company.siret,
                            tva: this.company.tva,
                            tCard: this.company.tCard,
                            commercialChamber: this.company.commercialChamber,
                            date: this.company.date,
                            mendatoryParticulars: this.company
                                .mendatoryParticulars,
                            about: this.company.about,
                            mediator: this.company.mediator,
                            avatar: this.company.avatar,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${this.token}`,
                            },
                        }
                    )
                    .then(function(result) {
                        return result;
                    })
                    .catch(function(err) {
                        throw err;
                    });
            }
        },
        changePreview: function(e) {
            fileUpload(e).then(
                function(data) {
                    this.agenceLogo = data.base64;
                }.bind(this)
            );
        },
        updateAvatar() {
            // console.log(this.company._id);
            var updatedCompany = {
                ...this.company,
            };
            updatedCompany.avatar = this.agenceLogo;

            axios
                .put(
                    `${process.env.VUE_APP_ROOT_API}/api/v1/company/${this.company._id}`,
                    updatedCompany,
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
                                `${process.env.VUE_APP_ROOT_API}/api/v1/company/${this.company._id}`,
                                {
                                    headers: {
                                        Authorization: `Bearer ${this.token}`,
                                    },
                                }
                            )
                            .then(
                                function(data) {
                                    this.agency = true;
                                    this.company = data.data;
                                    this.agenceLogo = data.data.avatar;

                                    this.$bvModal.hide("logoModal");
                                }.bind(this)
                            )
                            .catch(
                                function() {
                                    this.agency = false;
                                }.bind(this)
                            );
                    }.bind(this)
                );
        },
    },
    created() {},
    mounted() {
        this.token = storageService.getToken();
        this.user = storageService.getUserID();

        axios
            .get(`${process.env.VUE_APP_ROOT_API}/api/v1/users/${this.user}`)
            .then(function(result) {
                if (!result.data.company) {
                    return;
                } else {
                    return result.data;
                }
            })
            .then(
                function(data) {
                    if (data.company !== undefined) {
                        axios
                            .get(
                                `${process.env.VUE_APP_ROOT_API}/api/v1/company/${data.company._id}`,
                                {
                                    headers: {
                                        Authorization: `Bearer ${this.token}`,
                                    },
                                }
                            )
                            .then(
                                function(data) {
                                    this.agency = true;
                                    this.company = data.data;
                                    this.agenceLogo = data.data.avatar;
                                }.bind(this)
                            )
                            .catch(function() {
                                this.agency = false;
                            });
                    } else {
                        this.agency = false;
                    }
                }.bind(this)
            )
            .catch(
                function() {
                    this.agency = false;
                }.bind(this)
            );
    },
    watch: {},
};
</script>

<style lang="scss" scoped>
.logo-agence-img {
    max-width: 300px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    object-fit: cover;
}

.custom-file-input:lang(en) ~ .custom-file-label::after {
    content: "" !important;
    display: none;
}

.isActive {
    display: block;
}

.isHidden {
    display: none;
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
    border: 0.5px outset #3c485b !important;
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
.upload-file {
    filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11)) !important;
    height: 40px !important;
    background-color: #fff !important;
    border: 1.5px solid #d23367 !important;
    color: #d23367 !important;
    border-radius: 4px !important;
}
label.custom-file-label {
    cursor: pointer !important;
}
.custom-file-input {
    width: 0% !important;
}
.custom-file-label {
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    left: 0 !important;
    z-index: 1 !important;
    height: calc(1.5em + 0.75rem + 2px) !important;
    padding: 7.5px !important;
    font-weight: normal;
    line-height: 1.5;
    color: #d23367 !important;
    background-color: transparent !important;
    border: 0px !important;
    border-radius: 0 !important;
}

.custom-file.b-form-file.upload-file:hover {
    background-color: #fae7ed !important;
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: all;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0s;
    will-change: background-color, opacity;
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
.custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    border-color: #d23367 !important;
    background-color: #d23367 !important;
}
.custom-switch .custom-control-label::after {
    background-color: var(--color-primary) !important;
}
.custom-control-input:checked ~ .custom-control-label::after {
    background-color: #f5f5f7 !important;
}

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
    font-size: 0.9rem !important;
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
</style>
