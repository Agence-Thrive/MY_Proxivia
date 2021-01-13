<template>
  <div class="left-center">
    <h2>Présentez-vous au réseau</h2>
    <b-form class="login-form" @submit="onClickButton">
      <md-field class="input-form md-accent">
        <label class="label-form" for="firstname">Prénom</label>
        <md-icon>face</md-icon>
        <md-input
          class="form-input"
          id="firstname"
          type="text"
          v-model="form.firstname"
          required
          placeholder="Prénom"
        ></md-input>
      </md-field>
      <md-field class="input-form md-accent">
        <label class="label-form" for="lastname">Nom</label>
        <md-icon>sentiment_satisfied_alt</md-icon>
        <md-input
          class="form-input"
          id="lastname"
          type="text"
          v-model="form.lastname"
          required
          placeholder="Nom"
        ></md-input>
      </md-field>
      <md-field class="input-form md-accent">
        <label class="label-form" for="email">Adresse mail</label>
        <md-icon>mail_outline</md-icon>
        <md-input
          class="form-input"
          id="email"
          type="email"
          v-model="form.email"
          required
          placeholder="Adresse mail"
        ></md-input>
      </md-field>
      <md-button type="submit" class="form-button input-btn">Continuer l'inscription</md-button>
    </b-form>
  </div>
</template>

<style scoped>
h2 {
  white-space: nowrap;
 font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  color: rgba(0, 0, 0, 1);
}

/* BTN */
.md-button {
  white-space: nowrap !important;
  text-align: center;
  font-family: Gotham !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 15px !important;
  text-transform: none;
  margin: 0;
  margin-top: 20px;
}

.input-btn {
  filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
  overflow: visible;
  width: 180px;
  height: 40px;
  background-color: #d23367;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* FORMULAIRE */
.login-form {
  text-align-last: left;
  display: inline-grid;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
}

/* Input */
.input-form {
  padding: 4%;
  margin-top: 10px;
  margin-bottom: 10px;
  filter: drop-shadow(0px 2px 4px rgba(23, 23, 23, 0.18));
  border: none;
  overflow: visible;
  width: 435px;
  background: #f3f5f7;
}

.md-input::placeholder {
  white-space: nowrap !important;
  text-align: left !important;
  font-family: Gotham !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 15px !important;
  color: rgba(136, 152, 170, 1) !important;
}

.md-field.md-focused:before {
  border: none;
  opacity: 0;
  -webkit-transform: scaleX(0);
  transform: none;
  transition: none;
  transition-property: none;
}

.md-field.md-theme-default:after {
  background-color: #f3f5f7;
}

.md-field.md-theme-default > .md-icon:after {
  background-color: #f3f5f7;
  background-color: #f3f5f7;
}
</style>

<script>
export default {
  name: "login",
  metaInfo: {
    title: "Inscription",
    titleTemplate: "%s | First try",
    description: "Inscription",
  },
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
      },
    };
  },
  methods: {
    onClickButton(event) {
      this.$emit("clicked", {
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        email: this.form.email,
      });
      event.preventDefault();
    },
  },
};
</script>
