<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.link"
          target="_blank"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon.name }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        This Project took a full day long working on it.
        Performance is optimized to the highest levels.
        Database accomplished using MongoDb.
        Server Initialized with expressjs.
        UI is handled by Vuejs + Vuetify.
        Unit tests done with Jest framework.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Nasr Galal</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      icons: [
        { name: 'mdi-facebook', link: 'https://www.facebook.com/nasr.galal' },
        { name: 'mdi-github', link: 'https://www.github.com/sniperadmin'},
        { name: 'mdi-linkedin', link: 'https://www.linkedin.com/in/nasr-galal-ab119660/'}
      ],
    }),
  }
</script>

<style scoped>

</style>