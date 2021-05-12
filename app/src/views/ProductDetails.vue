<template>
  <div>
      <div v-if="product" class="container my-3 py-5">
      
          <section class="text-center">
            
            <div class="row align-items-center">

              <div class="col-lg-6">
                <img :src="product.image" alt="" class="img-fluid">
              </div>

              <div class="col-lg-6 text-center text-lg-start">
                <h3 class="fw-bold"> {{ product.name }}</h3>
                <h4 class="fw-lighter fst-italic"> {{ product.price }} kr</h4>
                <p> {{ product.desc }}</p>
                <div class="input-group m-auto justify-content-center justify-content-lg-start align-items-center">
                  <input type="number" class="text-center form-control" min="1" v-model="quantity" aria-label="Quantity" aria-describedby="button-addon2">
                  <button class="btn" type="button" @click="addProductToCart({ product, quantity })"><i class="text-dark fas fa-shopping-cart"></i> Lägg i varukorgen</button>
                </div>
              </div>
              
            </div>
            
                <router-link to="/products" class="btn" data-abc="true"> <i class="fa fa-chevron-left"></i> Tillbaka</router-link>
            
          </section>
      </div>
      <div v-else>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProductDetails',
  props: ['id'],
  data() {
    return {
    quantity: 1
    }
  },
  methods: {
    ...mapActions(['getOneProduct', 'cleanup', 'addProductToCart'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getOneProduct(this.id)
  },
  destroyed() {
    this.cleanup()
  }
}
</script>

<style scoped>

input {
  max-width: 60px;
  border: solid 2px rgba(182, 142, 173, 0.788);
}



.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgba(182, 142, 173, 0.788);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>