<template>
  <div :style="{color: color}">
    <i :class="icon"/>
    {{value}}
    <div class="label">
      {{label}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: 'Label'
    },
    icon: {
      type: String,
      default: 'user'
    },
    color: {
      type: String,
      default: '#162668'
    }
  }
}
</script>

<style scoped>
.label {
  margin-top: 8px;
}
</style>
