<template>
  <div>
    <Navbar />
    <div class="container, height">
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.btn-grey {
  background-color: lightgray;
}



.height{
  min-height: 835px;
}

</style>
