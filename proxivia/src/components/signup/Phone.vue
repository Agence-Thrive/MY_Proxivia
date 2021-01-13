<template>
  <div class="left-center">
    <h2>Dernière ligne droite</h2>
    <b-form class="login-form" @submit="onClickButton">
      <md-field class="input-form md-accent">
        <label class="label-form" for="phone">Numéro de téléphone</label>
        <md-icon>call</md-icon>
        <md-input
          class="form-input"
          id="phone"
          type="tel"
          v-model="form.phone"
          required
          pattern="[0-9]{10}"
          placeholder="Numéro de téléphone"
        ></md-input>
      </md-field>
      <b-form-group>
        <b-button
          v-bind:class="form.agent ? activated : notActivated"
          :pressed.sync="form.agent"
          style="margin-right: 5%"
          ><span v-bind:class="form.agent ? fontActivated : fontNotActivated"
            >Agent Immobilier</span
          ></b-button
        >
        <b-button
          v-bind:class="form.agent ? notActivated : activated"
          :pressed.sync="form.agent"
          ><span v-bind:class="form.agent ? fontNotActivated : fontActivated"
            >Mandataire</span
          ></b-button
        >
      </b-form-group>
      <b-form-group
        ><b-form-checkbox
          onKeyUp="format(this)"
          id="checkbox-1"
          v-model="form.status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
          class="regular-checkbox"
          required
        >
          Je valide les conditions générales de vente
        </b-form-checkbox></b-form-group
      >
      <md-button type="submit" class="form-button input-btn">Terminer</md-button>
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

.activated {
  background-color: rgba(57, 177, 109, 0.1) !important;
  box-shadow: 0px 2px 4px #1717172e;
  border-radius: 5px;
  border-color: rgba(57, 177, 109, 0.1) !important;
  width: 45%;
}

.notActivated {
  background: #f7fafc 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #1717172e;
  border-radius: 5px;
  opacity: 0.8;
  border-color: #f7fafc;
  width: 45%;
}

.fontNotActivated {
  text-align: left;
  letter-spacing: 0px;
  color: #8898aa;
  opacity: 1;
  font-size: 15px;
}

.fontActivated {
  text-align: left;
  letter-spacing: 0px;
  color: #39b16d;
  opacity: 1;
  font-size: 15px;
}

.font .form-title {
  text-align: left;
  font-size: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 7%;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        agent: true,
        status: false,
      },
      activated: "activated",
      fontActivated: "fontActivated",
      notActivated: "notActivated",
      fontNotActivated: "fontNotActivated",
    };
  },
  methods: {
    onClickButton(event) {
      this.$emit("clicked", {
        phone: this.form.phone,
        type: this.form.agent ? "agent" : "mandataire",
      });
      event.preventDefault();
    },
  },
};
</script>
