<template>
    <div class="products">
        <Product-card-deck />
    </div>
</template>

<script>
import ProductCardDeck from '../components/products/ProductCardDeck.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Products',
  components: { ProductCardDeck 
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>

<style scoped>
.products {
  min-height: 835px;
}
</style>