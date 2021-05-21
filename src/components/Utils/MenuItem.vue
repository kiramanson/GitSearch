<template>
  <div>
    <div class="menu-item mobile" :style="{ borderBottom: active ? '#5C97D2 2px solid' : 'none' }">
      {{label}}
    </div>
    <div class="menu-item desktop" :style="{ borderRight: active ? '#5C97D2 2px solid' : 'none' }">
      {{label}}
    </div>
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
.menu-item {
  background: #F7F9FA;
  padding: 20px 5px;
  width: 50vw;
  cursor: pointer;
  border-left: 1px #ECEFF1 solid;
  font-size: 16px;
}

.desktop {
  display: none;
}

@media ( min-width: 769px ) {
  .menu-item {
    width: 200px;
    border-top: 1px #ECEFF1 solid;
  }
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
}
</style>
