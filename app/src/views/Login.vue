<template>
  <div class="container mt-5">
      <form class="border p-5 col-6 mx-auto" @submit.prevent="onSub">
          <h4 class="text-center">Logga In</h4>
          <div class="mb-4">
              <label for="email" class="form-label ">Email</label>
              <input type="email" id="email" class="form-control" v-model="email">
                
          </div>

          <div class="mb-3">
              <label for="password" class="form-label ">Lösenord</label>
              <input type="password" id="password" class="form-control" v-model="password">
          </div>
            <!-- <h6 class="text-danger">Emailadress eller lösenord är felaktig!</h6> -->
          <button class="btn btn-grey btn-block">Logga in</button>

          <div class="text-center">
              <small>Saknar du konto? <router-link to="/register" class="register-link">Registrera</router-link> </small>
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
                console.log(user)
            }
        }
    }
}
</script>

<style scoped>

.register-link {
    color: rgba(182, 142, 173, 0.788);
    text-decoration: bold;
    
}

</style>