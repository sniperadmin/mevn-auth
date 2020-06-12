<template>
  <v-app-bar
    app
    color="indigo lighten-1"
    dark
  >
    <v-app-bar-nav-icon>
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    </v-app-bar-nav-icon>
    
    <v-toolbar-title>
      MEVN-Authentication & Authorization
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text to="/">
      Home
    </v-btn>
    <v-btn text to="/about">
      About
    </v-btn>
    <v-btn v-if="isLoggedIn" text to="/profile">
      Profile
    </v-btn>
    <v-btn v-if="!isLoggedIn" text to="/login">
      Login
    </v-btn>
    <v-btn v-if="!isLoggedIn" text to="/register">
      Register
    </v-btn>
    <v-btn v-if="isLoggedIn" text @click="logoutUser">
      Logout
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      multi-line
      color="success"
    >
      Logged out successfully!
      Browser local storage cleared from tokens...
      <v-btn
        color="red"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app-bar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Nav',
    data: () => ({ snackbar: false }),
    computed: { ...mapGetters(['isLoggedIn']) },
    methods: {
      ...mapActions(['logout']),
      logoutUser() {
        this.logout().then(() => { this.snackbar = true; this.$router.push('/') })
      }
    }
  }
</script>

<style scoped>

</style>