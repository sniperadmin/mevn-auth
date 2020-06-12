<template>
  <v-row justify="center" class="my-5">
    <Card
      no-title
      width="900"
    >
    <v-card-text class="p-7 headline font-weight-bold">
      <div class="headline font-weight-bold mb-5">
        About the Project
      </div>

      <v-container>
        <v-row justify="space-between">
          <v-col>
            <Card title="Project sponsored by:" width="400">
              <v-card-text class="headline font-weight-bold">
                <v-list-item class="grow">
                  <v-list-item-avatar size="100" color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://ca.slack-edge.com/TL3730RM2-UL3M9347P-92bef61e84aa-512"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      Eng. Mohamed Farag
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Founder & CEO of SubsBase
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>       
            </Card>
          </v-col>
          <!--  -->
          <v-col>
            <Card title="Project Author:" width="400">
                <v-card-text class="headline font-weight-bold">
                  <v-list-item class="grow">
                    <v-list-item-avatar size="100" color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        src="https://ca.slack-edge.com/TL3730RM2-URS9KH5PC-bb1e525f0f7a-512"
                      ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        Eng. Mohamed Farag
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        Nuxtjs/Vuejs Developer
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-text>       
              </Card>
          </v-col>
        </v-row>
      </v-container>
        <v-alert
        dense
        text
        type="success"
      >
        The next versions will include GraphQl Support
      </v-alert>
      Project technologies:
      <Logos />
    </v-card-text>
    </Card>
  </v-row>
</template>

<script>
import Logos from '../components/Logos.vue'
import Card from '../components/Card.vue'
  export default {
    name: 'About',
    components: { Card, Logos }
  }
</script>

<style scoped>

</style>