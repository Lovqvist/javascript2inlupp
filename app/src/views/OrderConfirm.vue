<template>
  <div class="container">
    <article class="card ">
        <h1 class="card-header text-center my-4"> Dina order </h1>
        <div class="card-body ">
            
            <OrderCardDeck v-for="order in orders" :key="order.order.id" :order="order"/>
            
            
               
    
            
        </div>
    </article>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'



export default {
  components: {  },
  computed: {
    ...mapGetters(['orders'])
  },
  methods: {
      ...mapActions([]),
      
  }
}
</script>

<style scoped>

.height {
    min-height: 400px;
}


</style>