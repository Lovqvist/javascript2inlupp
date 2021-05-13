<template>
  <div class="container">
    <article class="card ">
        <h1 class="card-header text-center my-4"> Din beställning </h1>
        <div class="card-body ">
            
            <Shopping-cart-product v-for="item in shoppingCart" :key="item.product.id" :item="item"/>
            
            <div class="d-flex justify-content-end">
                <h5 class="mx-5">Antal produkter: </h5>
                <div class="d-flex justify-content-end">
                    <h5>{{ cartItemCount }}</h5>
                    <h5 class="mx-1">st</h5>  
                </div> 
            </div>
            <div class="d-flex justify-content-end">
                <h5 class="mx-5">Att betala: </h5>
                <div class="d-flex justify-content-end">
                    <h5>{{ shoppingCartTotal }}</h5>
                    <h5 class="mx-1">kr</h5>  
                </div> 
            </div>    
    
            <div class="d-flex justify-content-between align-items-center mt-4">
                <div>
                    <router-link to="/products" class="btn" data-abc="true"> <i class="fa fa-chevron-left"></i> Fortsätt handla</router-link>
                </div>
                <div >
                    <button v-if="shoppingCart.length < 1" class="btn btn-grey" disabled @click="orders">Kundvagn tom </button>
                    <button v-else class="btn btn-grey"  @click="orders">  Lägg order </button>
                </div>
            </div>
        </div>
    </article>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ShoppingCartProduct from '../components/shoppingCart/ShoppingCartProduct.vue'

export default {
  components: { ShoppingCartProduct },
  computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal', 'cartItemCount', 'user'])
  },
  methods: {
      ...mapActions(['confirmOrder']),
      orders(){
          let order1 = {
              email: this.user,
              list: this.shoppingCart,
              price: this.shoppingCartTotal
          }
          this.confirmOrder(order1)
      }
  }
}
</script>

<style scoped>

.height {
    min-height: 400px;
}


</style>