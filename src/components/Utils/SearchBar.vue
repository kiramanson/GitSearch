<template>
  <div class="search_wrap">
    <div>
      <input type="text" class="search_input" :value="value" placeholder="Pesquisar..." @input="updateInput($event.target.value)" @keyup.enter="updateInput($event.target.value, true)"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    initSearch: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateInput (val, submit = false) {
      this.$emit('update:value', val)
      if (submit) {
        this.$emit('update:initSearch', submit)
      }
    }
  }
}
</script>

<style scoped>
.search_wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.search_input {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  height: 20px;
  width: 80vw;
  max-width: 400px;
  padding: 5px 10px;
}
</style>
