<template>
  <div class="wrap">
    <span>Bio</span>
    {{model.bio}}
    <div v-if="model.location" class="item">
      <i class="fas fa-home"/> {{model.location}}
    </div>
    <div v-if="model.blog" class="item" @click="openBlog">
      <i class="fas fa-laptop"/> {{model.blog}}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    model: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    openBlog () {
      let url = ''
      if (this.model.blog.indexOf('http') === -1) {
        url = 'https://' + this.model.blog
      } else {
        url = this.model.blog
      }
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
  color: #263238;
  margin-top: 20px;
  margin-left: 10px;
}

span {
  color: #162668;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.item {
  color: #162668;
  margin-top: 40px;
  margin-bottom: -20px;
}
</style>
