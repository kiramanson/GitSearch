<template>
  <div :style="{ borderBottom: active ? '#5C97D2 2px solid' : 'none' }">
    {{label}}
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Label'
    }
  }
}
</script>

<style scoped>
div {
  background: #F7F9FA;
  padding: 20px 5px;
  width: 50vw;
  cursor: pointer;
  border-left: 1px #ECEFF1 solid;
  font-size: 16px;
}
</style>
