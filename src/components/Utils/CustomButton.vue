<template>
  <div>
    <button class="button" :value="searchValue" :style="{'background-color':bgColor}" @click="action">{{label}}</button>
  </div>
</template>

<script>
export default {
  props: {
    searchValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Ação'
    },
    bgColor: {
      type: String,
      default: 'grey'
    },
    action: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.button {
  border-radius: 4px;
  border: none;
  height: 50px;
  width: 40vw;
  max-width: 200px;
  padding: 5px 10px;
  margin: 5px 10px;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
}
</style>
