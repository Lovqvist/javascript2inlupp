<template>
  <div>
      <p>Produkt: {{ product.product.name }}</p>
      <p>Antal: {{product.quantity }}</p>
      <p>Pris: {{product.product.price}}</p>
  </div>
</template>

<script>

export default {
props: ['product']
}
</script>

<style>

</style>