<template>
  <div>
    <slot name="content"/>
  </div>

</template>

<script>
export default {
  props: {
    endList: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    }
  },
  created () {
    window.addEventListener('scroll', () => { this.$emit('update:bottom', this.bottomVisible()) })
  },
  methods: {
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight - 10
      return bottomOfPage || pageHeight < visible
    }
  }
}
</script>
