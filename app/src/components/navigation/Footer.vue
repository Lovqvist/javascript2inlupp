<template>
  <footer class="border-top border-dark text-dark text-center p-2">
      <p>&copy; {{ new Date().getFullYear() }} Copyright</p>

  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
footer {
  background-color: rgba(182, 142, 173, 0.788);
}
</style>