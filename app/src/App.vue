<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/navigation/Footer.vue'
import Navbar from './components/navigation/Navbar.vue'

export default {
  name: 'E-commersical',
  components: { 
    Navbar,
    Footer
  },
  
}

</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
