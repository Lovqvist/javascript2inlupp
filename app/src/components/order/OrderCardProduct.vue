<template>
  <div>
      <p>Artiklar: {{ product.product.name }}</p>
      <p>Antal: {{product.quantity }}</p>
      <p>Pris: {{product.product.price}}</p>
      <hr>
  </div>
</template>

<script>

export default {
props: ['product']
}
</script>

<style>

</style>