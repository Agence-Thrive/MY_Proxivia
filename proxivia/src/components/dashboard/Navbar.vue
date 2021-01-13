<!--<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Hello world
        </vs-navbar-title>
      </div>
      <vs-input placeholder="Search" v-model="search" />
      <vs-navbar-item @click="logout" index="0">
        <a @click="logout" href="#">Déconection</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a @click="logout" href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("auth", ["logout"]),
  },
  data: () => ({
    activeItem: 0,
    search: "",
  }),
};
</script>
-->
