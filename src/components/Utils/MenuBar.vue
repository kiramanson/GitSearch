<template>
  <div class="wrap">
    <div v-for="item in model" :key="item.id">
      <menu-item :label="item.label" :active="item.active" @click.native="setMenu(item)"/>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem'

export default {
  props: {
    model: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    setMenu (obj) {
      this.model.map(item => {
        item.active = false
        if (item.id === obj.id) {
          item.active = true
        }
      })
      this.$emit('update:model', this.model)
    }
  },
  components: {
    MenuItem
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: bold;
  margin-top: 20px;
  font-size: 16px;
}

@media ( min-width: 769px ) {
  .wrap {
    display: flex;
    flex-direction: column;
    width: 220px;
  }
}
</style>
