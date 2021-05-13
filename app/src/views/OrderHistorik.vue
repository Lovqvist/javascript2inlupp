<template>
<div class="container text-center my-3 py-3">  
    <h1>Orderhistorik</h1>    
    <order-card-deck />
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import OrderCardDeck from '../components/order/OrderCardDeck.vue'




export default {
  components: {OrderCardDeck  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
      ...mapActions(['getOrders']),
  },
  created() {
      this.getOrders(this.user)
  }
}
</script>

<style scoped>

.height {
    min-height: 400px;
}


</style>