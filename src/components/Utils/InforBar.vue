<template>
  <div class="wrap">
    <div class="infor-item" v-for="(item, index) in model" :key="index">
      <infor-icon :value="item.value" :label="item.label" :icon="item.icon"/>
    </div>
  </div>
</template>

<script>
import InforIcon from './InforIcon'

export default {
  props: {
    model: {
      type: Array,
      default: () => []
    }
  },
  components: {
    InforIcon
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 14px;
  margin-top: 20px;
}

.infor-item {
  padding: 20px;
}
</style>
