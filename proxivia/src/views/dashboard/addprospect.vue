<template>
    <div>
        <form class="needs-validation" novalidate @submit="updateProspect">
            <b-row class="row-content">
                <b-col align="start" md="4">
                    <h2>Ajouter un prospect</h2>
                </b-col>
                <b-col md="4"></b-col>
                <b-col align="end" md="4">
                    <md-button type="submit" class="btn-prospect"
                        >Enregistrer</md-button
                    >
                </b-col>
            </b-row>

            <b-row class="row-content">
                <b-col
                    ><p v-if="error">Veuillez remplir tout les champs</p></b-col
                >
            </b-row>

            <b-row class="row-content">
                <b-col row="3">
                    <div>
                        <div class="mt-2">Prénom</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="text"
                            placeholder="Prénom"
                            v-model="firstname"
                        >
                        </b-form-input>
                        <div class="invalid-feedback">
                            Le Prénom est incorrect, 2 caractères minimum.
                        </div>
                    </div>
                </b-col>
                <b-col row="3">
                    <div>
                        <div class="mt-2">Nom</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="text"
                            placeholder="Nom"
                            v-model="lastname"
                        >
                        </b-form-input>
                        <div class="invalid-feedback">
                            Le Nom est incorrect, 2 caractères minimum.
                        </div>
                    </div>
                </b-col>
                <b-col row="3">
                    <div>
                        <div class="mt-2">Adresse Mail</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="email"
                            placeholder="Adresse Mail"
                            v-model="email"
                        >
                        </b-form-input>
                        <div class="invalid-feedback">
                            L'adresse Mail est incorrect, 2 caractères minimum.
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row class="row-content">
                <b-col row="3">
                    <div>
                        <div class="mt-2">Téléphone</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="tel"
                            placeholder="Téléphone"
                            v-model="phone"
                        >
                        </b-form-input>
                        <div class="invalid-feedback">
                            Le Téléphone est incorrect, 10 caractères minimum.
                        </div>
                    </div>
                </b-col>
                <b-col row="3">
                    <div>
                        <div class="mt-2">Âge</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="number"
                            placeholder="Âge"
                            v-model="age"
                        >
                        </b-form-input>
                        <div class="invalid-feedback">
                            L'âge est incorrect, 2 caractères minimum.
                        </div>
                    </div>
                </b-col>
                <b-col row="3">
                    <div>
                        <div class="mt-2">Adresse</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="text"
                            placeholder="Adresse"
                            v-model="address"
                        >
                        </b-form-input>
                        <div class="invalid-feedback">
                            L'adresse est incorrecte, 1 caractère minimum.
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row class="row-content">
                <b-col row="3">
                    <div>
                        <div class="mt-2">Pays</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="tel"
                            placeholder="Pays"
                            v-model="country"
                        >
                        </b-form-input>
                        <div class="invalid-feedback">
                            Le Pays est incorrect, 2 caractères minimum.
                        </div>
                    </div>
                </b-col>
                <b-col row="3">
                    <div>
                        <div class="mt-2">Ville</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="text"
                            placeholder="Ville"
                            v-model="city"
                        >
                        </b-form-input>
                        <div class="invalid-feedback">
                            La ville est incorrect, 1 caractère minimum.
                        </div>
                    </div>
                </b-col>
                <b-col row="3">
                    <div>
                        <div class="mt-2">Code postal</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="text"
                            placeholder="Code postal"
                            v-model="postal"
                        >
                        </b-form-input>
                        <div class="invalid-feedback">
                            Le Code postal est incorrect, 5 caractères minimum.
                        </div>
                    </div>
                </b-col>
            </b-row>
            <li class="divider"></li>
            <b-row class="row-content">
                <b-col row="3">
                    <div>
                        <div class="mt-2">Statut</div>
                        <select
                            id="validationCustom01"
                            class="form-input-edit"
                            type="select"
                            v-model="status"
                        >
                            <option disabled value="">Choisissez</option>
                            <option value="oui">Oui</option>
                            <option value="non">Non</option>
                            <option value="peut-être">Peut-être</option>
                        </select>
                    </div>
                </b-col>
                <b-col row="3">
                    <div>
                        <div class="mt-2">Valeur maison</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="text"
                            placeholder="Valeur de la maison en €"
                            v-model="houseValue"
                        >
                        </b-form-input>
                    </div>
                </b-col>
                <b-col row="3">
                    <div>
                        <div class="mt-2">Commission</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="text"
                            placeholder="Commission en €"
                            v-model="commission"
                        >
                        </b-form-input>
                    </div>
                </b-col>
                <b-col row="3">
                    <div>
                        <div class="mt-2">Zone</div>
                        <b-form-input
                            id="validationCustom01"
                            class="form-input-edit"
                            type="text"
                            placeholder="Zone"
                            v-model="area"
                        >
                        </b-form-input>
                    </div>
                </b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import storageService from "../../services/storage.service.js";

export default {
    data() {
        return {
            firstname: undefined,
            lastname: undefined,
            email: undefined,
            phone: undefined,
            age: undefined,
            address: undefined,
            country: undefined,
            city: undefined,
            postal: undefined,
            houseValue: undefined,
            commission: undefined,
            area: undefined,
            status: undefined,
            error: false,

            token: null,
            user: null,
        };
    },
    mounted() {
        this.user = storageService.getUserID();
        this.token = storageService.Token();
    },
    methods: {
        updateProspect: function(e) {
            e.preventDefault();
            axios
                .post(
                    `${process.env.VUE_APP_ROOT_API}/api/v1/users/${this.user}/prospect`,
                    {
                        firstname: this.firstname,
                        lastname: this.lastname,
                        email: this.email,
                        phone: this.phone,
                        age: this.age,
                        address: this.address,
                        country: this.country,
                        city: this.city,
                        postal: this.postal,
                        houseValue: this.houseValue,
                        commission: this.commission,
                        area: this.area,
                        status: this.status,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${this.token}`,
                        },
                    }
                )
                .then(function(response) {
                    return response;
                })
                .catch(
                    function(err) {
                        if (err.response.status === 422) {
                            this.error = true;
                        }
                    }.bind(this)
                );
        },
    },
};
</script>

<style scoped>
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
</style>
