<template>
  <div>
    <v-row style="justify-content: center;">
      <v-alert
        v-if="error"
        type="error"
        dense
      >
        {{ error }}
      </v-alert>
    </v-row>

    <v-row style="justify-content: center;">
      <v-col
        cols="6"
      >
        <Card
          raised
        >
          <template v-slot:custom-title>
            <span class="ml-2">Register</span>
          </template>

          <v-card-text>
            <v-alert
              icon="mdi-shield-lock-outline"
              prominent
              text
              dense
              type="info"
            >
              Testing Credentials
              <v-spacer />
              email: test@me.com
              <v-spacer />
              password: 123456
            </v-alert>
            <v-form ref="register" v-model="valid">
              <Input
                v-model="user.name"
                :rules="[]"
                label="Name"
                type="name"
                placeholder="name"
              />
              <Input
                v-model="user.username"
                :rules="[]"
                label="Username"
                type="username"
                placeholder="username"
              />
              <Input
                v-model="user.email"
                :rules="[]"
                label="Email"
                type="email"
                placeholder="Email"
              />

              <Input
                v-model="user.password"
                :rules="[]"
                label="Password"
                type="password"
                placeholder="Password"
              />
              <Input
                v-model="user.confirmPassword"
                :rules="[]"
                @enter="registerUser"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />

            <v-btn
              @click.enter="registerUser"
              @keyup.enter="registerUser"
              color="primary"
              class="mb-3"
            >
              Register
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-chip
              to="../contact"
              color="primary"
              class="mr-2"
            >
              Contact Us
            </v-chip>
            <v-spacer />
          </v-card-actions>
        </Card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
export default {
  name: 'Register',
  components: { Input, Card },
  data () {
    return {
      valid: true,
      user: {
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      error: '',
      dialog: false,
      progress: false,
      disabled: false,
    }
  },
  methods: {
    ...mapActions(['register']),
    registerUser () {
      let user = this.user
      this.register(user).then((res) => {
        if (res.data.success) {
          this.$router.push("/login")
        }
      }).catch((error) => { console.log(error) })
    },
  },
}
</script>
