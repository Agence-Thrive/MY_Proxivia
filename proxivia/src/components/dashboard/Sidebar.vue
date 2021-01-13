<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="navbar" md-elevation="0">
        <md-button
          class="md-icon-button"
          @click="toggleMenu"
          v-if="!menuVisible"
        >
          <md-icon class="burgermenu">menu</md-icon>
        </md-button>

        <div class="md-toolbar-section-start">
          <md-autocomplete
            class="search"
            v-model="searchNavigation"
            :md-options="navigation"
            md-layout="box"
          >
            <label>Recherche...</label>
          </md-autocomplete>
        </div>
        <div class="md-toolbar-section-end">
          <router-link :to="{ name: 'login' }">Profil</router-link>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>PROXIVIA</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <!-- Menu navigation -->
        <md-list>
          <!-- Home -->
          <md-list-item>
            <md-icon>home</md-icon>
            <span class="md-list-item-text">
              <router-link :to="{ name: 'dashboard' }">Page accueil</router-link>
            </span>
          </md-list-item>

          <!-- About -->
          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">
              <router-link :to="{ name: 'about' }">About</router-link>
            </span>
          </md-list-item>

          <!-- Login -->
          <md-list-item>
            <md-icon>lock</md-icon>
            <span class="md-list-item-text">
              <router-link :to="{ name: 'login' }">Page connexion</router-link>
            </span>
          </md-list-item>

          <!-- Page inscription -->
          <md-list-item>
            <md-icon>lock_open</md-icon>
            <span class="md-list-item-text">
              <router-link :to="{ name: 'inscription' }">Page inscription</router-link>
            </span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "PersistentMini",
  data: () => ({
    menuVisible: false,
    searchNavigation: null,
    navigation: ["Viager", "Sans rente", "Avec rente"]
  }),
  meta: ["title"],
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  },
  watch: {
    searchNavigation: {
      handler(newRoute) {
        if (newRoute) {
          this.$router.push({ path: newRoute.path });
        }
      }
    }
  }
};
</script>

<style lang="css" scoped>
.md-app.md-app-side-drawer.md-layout-row.md-theme-default {
    height: 100vh !important;
    min-height: 100vh !important;
}

.burgermenu {
  color: #fff !important;
}

.navbar {
  background-color: var(--color-primary);
}

.md-app {
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.search {
  margin-left: 25px !important;
  width: 20%;
  max-width: 15%;
}
</style>

