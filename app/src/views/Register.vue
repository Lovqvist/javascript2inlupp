<template>
  <div class="container mt-5">
      <form class="border p-5 col-6 mx-auto" @submit.prevent="onSub">
          <h4 class="text-center">Registrering</h4>

          <div class="row">
              <div class="col">
                    <div class="mb-4">
                        <label for="firstName" class="form-label ">Förnamn</label>
                        <input type="firstName" id="firstName" class="form-control" v-model="firstName">
                    </div>
              </div>

              <div class="col">
                    <div class="mb-4">
                        <label for="lastName" class="form-label ">Efternamn</label>
                        <input type="lastName" id="lastName" class="form-control" v-model="lastName">
                    </div>
              </div>
          </div>


          <div class="mb-4">
              <label for="email" class="form-label ">Email</label>
              <input type="email" id="email" class="form-control" v-model="email">
          </div>

          <div class="mb-4">
              <label for="password" class="form-label ">Lösenord</label>
              <input type="password" id="password" class="form-control" v-model="password">
          </div>

          <button class="btn btn-primary btn-block">Skapa konto</button>

          <div class="text-center">
              <small>Konto sen tidigare? <router-link to="/login">Login</router-link> </small>
          </div>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            firstName: '',
            lastName:'',
            email: '',
            password: '' 
        }
    },
    methods: {
        ...mapActions(['register']),
        onSub() {
            if(this.firstName !== '' && this.lastName !== '' && this.email !== '' && this.password !== '' ){
                 let user = {
                     firstName: this.firstName,
                     lastName: this.lastName,
                     email: this.email,
                     password: this.password
                 }
                 let route = this.$route.query.redirect

                 this.register({user, route})
                 console.log(user)
            }
        }
    }
}
</script>

<style>

</style>