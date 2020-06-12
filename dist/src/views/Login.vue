<template>
  <div>
    <v-row style="justify-content: center;">
      <v-alert
        v-if="componentError"
        type="error"
        dense
      >
        {{ componentError }}
      </v-alert>
    </v-row>

    <v-row style="justify-content: center;">
      <v-col
        cols="6"
      >
        <Card
          :loading="progress"
          :disabled="progress"
          raised
        >
          <template v-slot:custom-title>
            <span class="ml-2">Login</span>
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
              username: test
              <v-spacer />
              password: 123456
            </v-alert>
            <v-form ref="login" v-model="valid">
              <Input
                v-model="user.username"
                :rules="[
                  rules.required,
                  (v) => v.length > 2 || 'username must be with a minimum of 3 characters']"
                @enter="loginUser"
                label="Username"
                label-for="username"
                type="text"
                placeholder="Username"
              />

              <Input
                v-model.trim="user.password"
                :rules="[
                  rules.required,
                  rules.password.minchars,
                  rules.password.hasNumber
                ]"
                @enter="loginUser"
                label="Password"
                label-for="password"
                type="password"
                placeholder="Password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />

            <v-btn
              @click.enter="loginUser"
              @keyup.enter="loginUser"
              :disabled="!valid"
              color="primary"
              class="mb-3"
            >
              Login
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

    <v-row style="justify-content: center;">
      <v-alert
        v-if="error"
        type="error"
        dense
      >
        {{ error }}
      </v-alert>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
import formRules from '@/mixins/formRules'
export default {
  name: 'Login',
  components: { Input, Card },
  data () {
    return {
      valid: true,
      user: {
        username: "",
        password: "",
      },
      componentError: "",
      progress: false,
    }
  },
  mixins: [formRules],
  computed: {
    ...mapGetters(['error'])
  },
  methods: {
    ...mapActions(['login']),

    loginUser () {
      this.progress = true

      if (this.$refs.login.validate()) {
        let user = this.user
        this.login(user)
          .then((res) => {
            if (res.data.success) {
              this.progress = false
              this.$router.push('/profile')
            }
          })
          .catch((err) => {
            this.progress = false
            this.componentError = err
          })
      } else {
        // validation errs
        this.progress = false
        this.componentError = 'Kindly check your form fields'
      }
    },
  },
}
</script>
