<template>
  <div>
    <div class="wrap">
      <slot name="content"/>
      <div class="feedback-msg"> {{feedbackMsg}} </div>
    </div>
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
    },
    loading: {
      type: Boolean,
      default: true
    },
    listLength: {
      type: Number,
      default: 0
    },
    update: {
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
  },
  computed: {
    feedbackMsg () {
      if (!this.listLength && !this.loading) {
        return 'Nenhum resultado encontrado.'
      } else if (this.endList && !this.loading) {
        return 'Sem mais resultados.'
      }
    }
  },
  watch: {
    update (val) {
      console.log(val)
      if (val) {
        this.$emit('update:bottom', this.bottomVisible())
        this.$emit('update:update', false)
      }
    }
  }
}
</script>

<style scoped>
.wrap {
  position: relative;
}
.feedback-msg {
  margin: 60px auto;
  font-size: 14px;
  font-weight: bold;
  color: #90A4AE;
}
</style>
