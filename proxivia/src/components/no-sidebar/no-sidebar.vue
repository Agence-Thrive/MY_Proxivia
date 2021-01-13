<template>
  <router-view></router-view>
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

<style lang="css" scoped>

</style>
