<template>
  <div class="search_wrap">
    <div class="input-wrap">
      <input type="text" class="search_input" :value="value" placeholder="Pesquisar..." @input="updateInput($event.target.value)" @keyup.enter="updateInput($event.target.value, true)"/>
      <i v-if="showIcon" class="fas fa-search"/>
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
    },
    showIcon: {
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
  position: relative;
}

.search_input {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  height: 20px;
  width: 300px;
  padding: 5px 10px 5px 30px;
  font-weight: bold;
}

.input-wrap {
  position: relative;
  margin: 0 auto;
}
.fa-search {
  display: block;
  position: absolute;
  top: 9px;
  left: 7px;
  color: #EDEDED;
  font-size: 12px;
}

/* desktop */
@media ( min-width: 769px ) {
  .search_input {
    width: 400px;
  }
}
</style>
