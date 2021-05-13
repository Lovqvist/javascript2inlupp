<template>
  <div>
    <div class="border border-4 p-4 text-start">
      <h6>Order id: {{ order._id }}</h6>
      <hr>
      <Order-card-product v-for="(product, index) in order.list" :key="index" :product="order.list[index]"/>
      <h6>Total pris: {{ order.price }}</h6>
    </div>
    
  </div>
  
</template>

<script>

import OrderCardProduct from './OrderCardProduct'

export default {
  name: 'OrderCard',
  components: { 
    OrderCardProduct 
    },

  props: ['order'],
  
 
}
</script>

<style>

</style>