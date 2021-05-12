<template>
  <div class="container border border-4 rounded">
    <div class="my-2 shopping-card">
        <h5>Varukorg</h5>
        <Shopping-cart-product v-for="item in shoppingCart" :key="item.product._id" :item ="item"/>
        <div v-if="shoppingCart.length < 1">
      <div class="p-2 d-flex justify-content-center align-items-center">
        Din kundvagn är tom.
      </div>
      <div class="dropdown-divider"></div>
    </div>
        
    </div>
    
    <div class="dropdown-divider"></div>
    <div>
        <div class="d-flex justify-content-between">
            <h5>Total summa:</h5>
            <h5>{{ shoppingCartTotal }} SEK</h5>
        </div>
        <div class="d-grid my-3">
            <router-link class="btn btn-grey" to="/checkout">TILL KASSAN</router-link>
        </div>
        <div class="d-grid my-3">
            <a @click="router.go(-1)" class="btn">Fortsätt handla</a>
        </div>
    </div>  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct.vue'

export default {
  components: { 
      ShoppingCartProduct 
  },
    name: 'ShoppingCart',
    computed: {
        ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
    }
}
</script>

<style scoped>

.shopping-card {
    min-height: 200px;
}



</style>