<template>
    <div class="col">
        <div class="card p-3">
            <img :src="product.image" alt="..." class="">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text lh-sm fw-light">{{ product.short }}</p>
                    <div class="d-flex justify-content-center mb-2"> 
                        <h4 class="my-auto">{{ product.price }} kr</h4>    
                    </div> 
                    <div class="d-flex justify-content-center">  
                        <router-link :to="{ name: 'ProductDetails', params: { id: product._id} }" type="button" class="btn btn-primary">Visa Produkt</router-link>
                    </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product']
}
</script>

<style scoped>


</style>