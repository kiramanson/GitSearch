<template>
  <div>
    <div class="header">
      <i class="fas fa-arrow-left" @click="back"/>
      <span>
        {{label}}
      </span>
    </div>
    <div class="divided" v-if="divided"/>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Ação'
    },
    divided: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back () {
      history.back()
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 20px;
  left: 20px;
  display: block;
  justify-content: center;
  color: #263238;
  font-weight: bold;
}

span {
  padding-left: 20px;
}

@media ( min-width: 769px ) {
  div {
    display: none;
  }
}
</style>
