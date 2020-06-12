<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <Logos />
      </v-col>

      <v-col class="mb-2">
        <Card no-title>
          <v-card-text class="headline font-weight-bold">
            <div>MEVN-Auth APP</div>
            <v-avatar
              size="avatarSize"
              class="mt-9"
            >
              <img src="https://forums.coretabs.net/user_avatar/forums.coretabs.net/sniperadmin/120/2694_2.png" alt="nasr">
            </v-avatar>
            <h4 class="mt-7">
              This is a simple authentication/authorization app
              built with Mongo-Express-Vue-Node and boosted by
              <strong class="green--text">Unit testing with Jest</strong>
            </h4>
          </v-card-text>
        </Card>
      </v-col>
      <v-col>
        <v-alert
          outlined
          color="purple"
        >
          <div class="title">Instructions</div>
          <div>
            You can go to register or login to test authentication
          </div>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from './Card.vue'
  export default {
    name: 'HelloWorld',
    components: {
      Logos: () => import('@/components/Logos.vue'), Card
    },
    data: () => ({}),
  }
</script>
