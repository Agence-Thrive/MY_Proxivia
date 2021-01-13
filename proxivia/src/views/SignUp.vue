<template>
  <div class="md-layout">
    <div class="md-layout-item login-left">
      <div class="login-img">
        <img src="../assets/images/login.png" />
        <div class="login-title" >
          <h1>Bienvenue sur Proxivia</h1>
          <span>Rejoignez le plus grand réseau de France d'agents immobilier spécialisés Viager.</span>
        </div>
      </div>
    </div>
    <div class="md-layout-item login-right">
      <div class="login-connexion">
        <b-row align="end"  cols="3">
          <b-col><img src="../assets/images/proxivia.png" /></b-col>
          <b-col></b-col>
          <b-col>
            <Sidebar />
          </b-col>
        </b-row>
        <form-signup />
      </div></div>
  </div>

</template>

<style scoped>
/* Structure */
.row{
  margin-left: 0;
  margin-right: 0;
}

.md-layout {
  height: 100vh;
  min-height: 100vh;
  padding: 0 !important;
  background: #fff;
}

/* Image */
.login-img {
  background-color: var(--color-primary);
}

.login-img > img{
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  display: block;
}

.login-img-proxivia{
  display: inline-grid;
  justify-content: center;
  align-items: center;
}

.login-title {
  width: 56%;
  margin-left: 20vh;
  margin-right: auto;
}

/* LEFT */
.md-layout-item.login-left {
  height: 100%;
  min-height: 100%;
  flex: 1 1;
  background-color: #3c485b;
}

.md-layout-item.login-right {
  height: 100%;
  min-height: 100%;
  flex: 1 1;
  background-color: #fff;
}

.md-theme-default a:not(.md-button) {
  color: var(--color-primary) !important;
}

.login-title > h1{
  white-space: nowrap;
  text-align: left;
  font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 43px;
  color: rgba(255, 255, 255, 1);
}

.login-title > span {
  text-align: left;
  font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}

/* RIGHT */

.md-layout-item.login-right {
  height: 100%;
  min-height: 100%;
  flex: 1 1;
  background-color: #fff;
}

.login-connexion {
  display: block;
  width: 80%;
  margin-left: 20%;
  padding-right: 20px;
}

.row.row-cols-3 {
    margin-top: 20px;
    margin-bottom: 80px;
}

</style>

<script>
import formSignUp from "./../components/signup/Form";
import Sidebar from "./../components/login/SideBar";
export default {
  name: "SignUp",
  metaInfo: {
    title: "SignUp",
    titleTemplate: "%s | signup Example",
  },
  data() {
    return {};
  },
  components: {
    "form-signup": formSignUp,
    Sidebar: Sidebar,
  },
};
</script>
