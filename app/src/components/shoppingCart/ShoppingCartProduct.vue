<template>
    <div v-if="item.quantity > 0" class="cart-item">
        <div class="py-2 d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img :src="item.product.image" alt="" class="img-fluid image-width">
                <div class="m-2"><strong>{{ item.product.name }}</strong>
                    <div><small>{{ item.product.price }}kr x {{ item.quantity }}st</small></div>
                </div>
            </div>
            <div >
                <div class="btn-group btn-group-sm me-2" role="group">
                    <button class="btn btn-grey" @click.stop="item.quantity -=1">-</button>
                    <button class="btn btn-grey" @click.stop="item.quantity +=1">+</button>
                </div>
                    <button class="btn text-danger btn-sm" @click.stop="item.quantity = 0"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>
            <div class="dropdown-divider"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    
 name: 'ShoppingCartProduct',
 props: ['item'],
 computed: {
        ...mapGetters(['removeProductFromCart'])
    }
}
</script>

<style scoped>
.image-width {
  width: 70px;
}
</style>