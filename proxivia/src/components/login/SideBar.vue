<template lang="html">
  <div id="parentx">
    <font-awesome-icon
      class="sidebar-toggle"
      @click="active = !active"
      icon="align-right"
    />
    <vs-sidebar
      position-right
      parent="body"
      default-index="1"
      color="primary"
      class="sidebarx"
      spacer
      v-model="active"
    >
      <div style="margin-top: 70%;">
        <vs-sidebar-item>
          <a class="sidebar-link">Découvrez Proxivia</a>
        </vs-sidebar-item>

        <vs-sidebar-item>
          <a class="sidebar-link">Prix et abonnement</a>
        </vs-sidebar-item>

        <vs-sidebar-item>
          <a class="sidebar-link">Solutions</a>
        </vs-sidebar-item>
        <vs-sidebar-item>
          <a class="sidebar-link">Un réseau national</a>
        </vs-sidebar-item>
        <b-button class="sidebar-button">
          Contactez un conseiller
        </b-button>
      </div>
    </vs-sidebar>
  </div>
</template>

<script
  src="https://code.jquery.com/jquery-3.5.0.js"
  integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc="
  crossorigin="anonymous"
></script>

<script>
export default {
  data: () => ({
    active: false,
  }),
  mounted() {
    $(".vs-sidebar").css("max-width", "25vw");
    $(".vs-sidebar").css("padding-left", "3%");
  },
};
</script>

<style scoped>
.vs-sidebar--item a{
  opacity: 1;
}
.sidebar-link {
  color: black !important;
  font-size: 20px;
  font-weight: 500;
  line-height: 0.5;
}
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50%;
}
.header-sidebar h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.header-sidebar h4 > button {
  margin-left: 10px;
}
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.sidebar-toggle {
  z-index: 100000;
  position: relative;
}
.footer-sidebar > button {
  border: 0px solid rgba(0, 0, 0, 0) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
  border-radius: 0px !important;
}

.sidebar-button {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #2c28281c;
  border: 1px solid #d23367;
  border-radius: 5px;
  opacity: 1;
  color: #d23367;
  margin-left: 10%;
  margin-top: 20%;
}
</style>
