<template>
  <v-card
    class="mx-auto my-5"
    max-width="434"
    :disable="!getProfile"
    :loading="!getProfile"
  >
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content v-if="user">
              <v-list-item-title class="title">{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
    <v-snackbar
      v-model="snackbar"
      multi-line
      color="success"
    >
      Logged in successfully!
      You can check the browser local storage
      <v-btn
        color="red"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Profile',
    data: () => ({ snackbar: false }),
    computed: { ...mapGetters(['user', 'isLoggedIn']), ...mapActions(['getProfile']) },
    methods: {  },
    created() {
      if (this.isLoggedIn) {
        this.snackbar = true
      }
    }
  }
</script>

<style scoped>

</style>