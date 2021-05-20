<template>
  <div class="loading">
    <i class="fas fa-circle-notch"/>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.loading {
  position: absolute;
  animation: 3s linear infinite loading;
  color: rgb(52, 150, 207);
}

@keyframes loading {
  0%   { transform: rotate(0deg);   }
  100% { transform: rotate(360deg); }
}
</style>
