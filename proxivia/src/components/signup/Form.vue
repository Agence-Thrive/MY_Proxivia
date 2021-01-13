<template>
  <div id="login-form" class="login-form">
    <city-form id="cityForm" @clicked="onCityFormSubmited" />
    <personnal-details-form
      id="personnalDetailsForm"
      @clicked="onPersonnalDetailsFormSubmited"
      class="hiddenForm"
    />
    <phone-form
      id="phoneForm"
      @clicked="onPhoneFormSubmited"
      class="hiddenForm"
    />
    <sign-up-done id="signUpDone" class="hiddenForm" />
    <div align="end" class="fixed-bottom login-inscription">
      <span>Une question ? <b><a href="/inscription"> Contactez un conseiller Proxivia</a></b></span>
    </div>
  </div>
</template>

<style scoped>
.fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
    margin-bottom: 30px;
    margin-right: 30px;
}

.login-inscription > span {
 font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(60, 72, 91, 1);
}

a {
  color: var(--color-primary) !important;
  font-weight: bold;
}

.hiddenForm {
  display: none;
}
</style>

<script
  src="https://code.jquery.com/jquery-3.5.0.js"
  integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc="
  crossorigin="anonymous"
></script>

<script>
import cityForm from "./City";
import personnalDetailsForm from "./PersonnalDetails";
import phoneForm from "./Phone";
import signUpDone from "./SingUpDone";

export default {
  name: "signUp",
  metaInfo: {
    title: "Connection",
    titleTemplate: "%s | First try",
    description: "Connection à proxivia en first try",
  },
  components: {
    "city-form": cityForm,
    "phone-form": phoneForm,
    "personnal-details-form": personnalDetailsForm,
    "sign-up-done": signUpDone,
  },
  data() {
    return {
      signin: {
        city: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        type: "",
      },
    };
  },
  methods: {
    onCityFormSubmited(value) {
      this.signin.city = value;
      $("#cityForm").addClass("hiddenForm");
      $("#personnalDetailsForm").removeClass("hiddenForm");
    },
    onPersonnalDetailsFormSubmited(value) {
      this.signin.firstname = value.firstname;
      this.signin.lastname = value.lastname;
      this.signin.email = value.email;
      $("#personnalDetailsForm").addClass("hiddenForm");
      $("#phoneForm").removeClass("hiddenForm");
    },
    onPhoneFormSubmited(value) {
      this.signin.phone = value.phone;
      this.signin.type = value.type;
      $("#phoneForm").addClass("hiddenForm");
      $("#signUpDone").removeClass("hiddenForm");
      console.log(this.signin);
    },
  },
};
</script>
