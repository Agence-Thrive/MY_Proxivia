<template>
    <div v-if="!isMobile()" class="page-container">
        <md-app>
            <md-app-toolbar
                md-persistent="clipped"
                class="md-large navbar"
                md-elevation="0"
            >
                <div class="md-toolbar-row md-toolbar-offset">
                    <div class="md-toolbar-section">
                        <!-- Burger btn -->
                        <!-- Search Bar -->
                        <div class="form-group has-search">
                            <i class="material-icons-outlined">search</i>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Recherche"
                            />
                        </div>
                    </div>
                    <!-- End Navbar -->
                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button btn-morevert">
                            <md-icon class="i-morevert">more_vert</md-icon>
                        </md-button>
                        <md-button class="md-icon-button">
                            <md-icon style="color: white;"
                                >notifications_none</md-icon
                            >
                        </md-button>
                        <md-button class="md-icon-button">
                            <md-icon style="color: white;"
                                >help_outline</md-icon
                            >
                        </md-button>
                        <md-button
                            style="text-decoration: none;"
                            to="profil"
                            class="md-icon-button"
                        >
                            <b-avatar
                                variant="secondary"
                            ></b-avatar> </md-button
                        ><span style="color: white;">Léa T</span>
                    </div>
                </div>
                <!-- Titre page -->
                <div class="md-toolbar-row md-toolbar-offset">
                    <h3 style="color: white;" class="md-title">
                        {{ $route.meta.title }}
                    </h3>
                </div>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
                <md-toolbar class="md-transparent pl-0 pr-3" md-elevation="0">
                    <a href="entonnoir">
                        <span id="proxiviaTitle"
                            >Pro<span style="color: var(--color-secondary);"
                                >x</span
                            >ivia</span
                        >
                    </a>
                    <div class="md-toolbar-section-end">
                        <md-button
                            class="md-icon-button md-dense"
                            @click="toggleMenu"
                        >
                            <md-icon>menu_open</md-icon>
                        </md-button>
                    </div>
                </md-toolbar>
                <!-- Menu navigation -->
                <md-list>
                    <md-list-item @click="toggleMenu" v-if="!menuVisible">
                        <md-icon style="margin: 0;">menu</md-icon>
                    </md-list-item>
                    <!-- Home -->
                    <md-list-item to="/dashboard">
                        <md-icon>home</md-icon>
                        <span class="md-list-item-text">
                            Page accueil
                        </span>
                    </md-list-item>
                    <!-- About -->
                    <md-list-item to="/mes-ventes">
                        <md-icon>attach_money</md-icon>
                        <span class="md-list-item-text">Suivi des ventes</span>
                    </md-list-item>

                    <!-- Juridique -->
                    <md-list-item to="/juridique">
                        <i class="material-icons-outlined">description</i>
                        <span class="md-list-item-text">
                            Juridique
                        </span>
                    </md-list-item>

                    <!-- Page Estimation viager -->
                    <md-list-item to="/estimation-viager">
                        <md-icon>trending_up</md-icon>
                        <span class="md-list-item-text">
                            Estimation viager
                        </span>
                    </md-list-item>

                    <!-- Page Commerce -->
                    <md-list-item to="/commerce">
                        <md-icon>description</md-icon>
                        <span class="md-list-item-text">
                            Commerce
                        </span>
                    </md-list-item>
                    <!-- Page Formation -->
                    <md-list-item to="/formation">
                        <md-icon>inbox</md-icon>
                        <span class="md-list-item-text"> Formation</span>
                    </md-list-item>

                    <!-- Page Aide & documentation -->
                    <md-list-item to="/aide-et-documentation">
                        <md-icon>search</md-icon>
                        <span class="md-list-item-text">
                            Aide & Documentation
                        </span>
                    </md-list-item>

                    <li class="divider"></li>

                    <!-- Messages -->
                    <md-list-item to="/messages">
                        <md-icon>chat_bubble_outline</md-icon>
                        <span class="md-list-item-text">
                            Messages
                        </span>
                    </md-list-item>

                    <!-- Calendrier -->
                    <md-list-item to="/calendrier">
                        <i class="material-icons-outlined">calendar_today</i>
                        <span class="md-list-item-text">
                            Calendrier
                        </span>
                    </md-list-item>

                    <!-- Contacts -->
                    <md-list-item to="/contact">
                        <md-icon>perm_identity</md-icon>
                        <span class="md-list-item-text">
                            Contact
                        </span>
                    </md-list-item>

                    <!-- Paramètres -->
                    <md-list-item to="/settings">
                        <i class="material-icons-outlined">settings</i>
                        <span class="md-list-item-text">
                            Paramètres
                        </span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content class="homepage">
                <router-view :key="$route.fullPath"></router-view>
            </md-app-content>
        </md-app>
    </div>
    <div v-else>
        <b-navbar toggleable type="dark" variant="dark">
            <i
                v-b-toggle.sidebar-1
                style="color: white;"
                class="material-icons-outlined"
                >sort</i
            >
        </b-navbar>
        <b-sidebar id="sidebar-1" title="Proxivia" backdrop shadow>
            <div class="px-3 py-2">
                <b-nav active-class vertical>
                    <b-nav-item to="dashboard">Accueil</b-nav-item>
                    <b-nav-item to="profil">Suivi des ventes</b-nav-item>
                    <b-nav-item to="connexion">Juridique</b-nav-item>
                    <b-nav-item to="inscription">Estimation viager</b-nav-item>
                    <b-nav-item to="profil">Commerce</b-nav-item>
                    <b-nav-item to="formations">Formation</b-nav-item>
                    <b-nav-item to="aide-et-documentation"
                        >Aide & Documentation</b-nav-item
                    >
                    <li class="divider"></li>
                    <b-nav-item to="profil">Messages</b-nav-item>
                    <b-nav-item to="profil">Calendrier</b-nav-item>
                    <b-nav-item to="profil">Contacts</b-nav-item>
                    <b-nav-item to="profil">Paramètres</b-nav-item>
                </b-nav>
            </div>
        </b-sidebar>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "PersistentMini",
    data: () => ({
        menuVisible: true,
        searchNavigation: null,
    }),
    methods: {
        isMobile() {
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            ) {
                return true;
            } else {
                return false;
            }
        },
        toggleMenu() {
            this.menuVisible = !this.menuVisible;
        },
    },
    watch: {
        searchNavigation: {
            handler(newRoute) {
                if (newRoute) {
                    this.$router.push({ path: newRoute.path });
                }
            },
        },
    },
};
</script>

<style lang="css" scoped>
nav.navbar.navbar-dark.bg-dark {
    height: 60px;
}

.btn-morevert {
    background-color: var(--color-secondary);
    border-radius: 4px !important;
    width: 55px;
}

i.i-morevert.md-icon.md-icon-font.md-theme-default {
    color: white;
}

span#proxiviaTitle {
    font-weight: bold;
    color: var(--color-primary);
    font-size: 34px;
    padding-left: 45px;
}

.md-toolbar .md-toolbar-offset {
    margin-left: 0px;
}

.md-list-item-router.md-list-item-container.md-button-clean {
    border-radius: 5px;
}

#app
    > div.page-container
    > div.md-app.md-app-side-drawer.md-layout-row.md-theme-default
    > main.md-app-container.md-flex.md-layout-column.md-theme-default.md-scrollbar:last-child
    > div.md-toolbar.md-app-toolbar.md-large.navbar.md-theme-default.md-elevation-0:first-child
    > div.md-toolbar-row.md-toolbar-offset {
    margin-left: 75px;
    transition: 0.5s;
}

#app
    > div.page-container
    > div.md-app.md-app-side-drawer.md-layout-row.md-theme-default
    > main.md-app-container.md-flex.md-layout-column.md-theme-default.md-scrollbar:last-child
    > div.md-toolbar.md-app-toolbar.md-large.navbar.md-theme-default.md-elevation-0:first-child
    > div.md-toolbar-row:first-child
    > div.md-toolbar-section-start:first-child
    > div.form-group.has-search {
    margin-left: 35px;
    transition: 0.5s;
}

.md-list-item-router.md-list-item-container.md-button-clean.router-link-exact-active.router-link-active {
    background: var(--color-light);
}

.md-list-item-router.md-list-item-container.md-button-clean.router-link-exact-active.router-link-active
    > .md-list-item-content.md-ripple
    > i.md-icon.md-icon-font.md-theme-default {
    color: var(--color-secondary);
}

.divider {
    border-top: 1px solid #cccccc;
    width: 70%;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
}

.md-list-item-content > i:first-child {
    margin-right: 25px;
}

.md-list-item-content {
    padding: 4px 8px !important;
}

#app
    > div.page-container
    > div.md-app.md-app-side-drawer.md-layout-row.md-drawer-active.md-theme-default
    > div.md-drawer.md-app-drawer.md-theme-default.md-left.md-persistent.md-active.md-persistent-mini
    > ul.md-list.md-theme-default:last-child
    > li.md-list-item
    > a.md-list-item-router.md-list-item-container.md-button-clean
    > div.md-list-item-content.md-ripple
    > i.md-icon {
    margin-left: 30px !important;
}

#app
    > div.page-container
    > div.md-app.md-app-side-drawer.md-layout-row.md-drawer-active.md-theme-default
    > div.md-drawer.md-app-drawer.md-theme-default.md-left.md-persistent.md-active.md-persistent-mini
    > ul.md-list.md-theme-default:last-child
    > li.md-list-item
    > a.md-list-item-router.md-list-item-container.md-button-clean
    > div.md-list-item-content.md-ripple
    > i.material-icons-outlined {
    margin-left: 30px !important;
}

.md-list-item-content > .md-icon {
    color: var(--color-primary);
}

i.material-icons-outlined {
    color: var(--color-primary);
}

.md-list-item a {
    color: var(--color-primary);
    font-size: 15px;
}

.md-list-item {
    height: auto;
    position: relative;
    z-index: 2;
    padding: 0;
}

.md-drawer.md-persistent-mini:not(.md-active) .md-list-item-content {
    padding: 0px 21px;
}

.md-drawer.md-persistent-mini:not(.md-active) {
    border: none;
    margin-top: -68px !important;
    box-shadow: 0px 2px 4px rgba(23, 23, 23, 0.18);
}

.md-drawer.md-theme-default.md-persistent-mini.md-left {
    border-right-color: #f8f8f8 important;
}

.md-drawer.md-persistent-mini {
    box-shadow: 0px 2px 4px rgba(23, 23, 23, 0.18);
    border-right-color: none !important;
    width: 300px;
}

.md-drawer.md-persistent-mini:not(.md-active) {
    width: 70px !important;
    z-index: 9999;
    white-space: nowrap;
    margin-top: -4%;
}

.md-app.md-app-side-drawer.md-layout-row.md-theme-default {
    height: 100vh !important;
    min-height: 100vh !important;
}

.md-toolbar.md-large {
    position: relative;
}

.homepage {
    padding: 3vh;
    background: linear-gradient(
        to bottom,
        #3c485b,
        #3c485b 5%,
        #f8f8f8 0%,
        #f8f8f8 100%
    );
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

.has-search .form-control {
    padding-left: 2.375rem;
    color: var(--color-primary);
}

.has-search .material-icons-outlined {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: var(--color-primary);
}

input.form-control::placeholder {
    color: var(--color-primary);
}

.form-group.has-search {
    border-radius: 25px;
    overflow: hidden;
}

.form-group {
    margin-bottom: 0rem;
}

.md-button:not([disabled]).md-focused:before,
.md-button:not([disabled]):active:before,
.md-button:not([disabled]):hover:before {
    background-color: currentColor;
    opacity: 0.12;
    border-radius: 0px;
}
</style>
