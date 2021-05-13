<template>
  <div class="mt-5 row row-cols-1 row-cols-md-2 g-4">
      <Order-card v-for="order in orders" :key="order._id" :order="order" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrderCard from './OrderCard.vue'

export default {
  components: { OrderCard },


computed: {
  ...mapGetters(['orders'])
}

}
</script>

<style>

</style>