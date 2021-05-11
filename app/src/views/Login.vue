<template>
  <div class="container mt-5">
      <form class="border p-5 col-6 mx-auto" @submit.prevent="onSub">
          <h4 class="text-center">Logga In</h4>
          <div class="mb-4">
              <label for="email" class="form-label ">Email</label>
              <input type="email" id="email" class="form-control" v-model="email">
          </div>

          <div class="mb-4">
              <label for="password" class="form-label ">Password</label>
              <input type="password" id="password" class="form-control" v-model="password">
          </div>

          <button class="btn btn-primary btn-block">logg in</button>

          <div class="text-center">
              <small>Not a member? <router-link to="/register">Register</router-link> </small>
          </div>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        onSub() {
            if(this.email !== '' && this.password !== '') {
                let user = {
                    email: this.email,
                    password: this.password
                }

                this.login(user)
            }
        }
    }
}
</script>

<style>

</style>