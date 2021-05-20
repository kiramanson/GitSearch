<template>
  <div>
    <div v-show="index" class="divided"/>
    <div class="item" @click="gotoUser">
      <img :src="model.avatar_url"/>
      <span class="username">
        {{model.login}}
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions(['setSearchvalue', 'setGetAll', 'setUserModel']),
    async gotoUser () {
      this.$router.push(`/user-profile/${this.model.login}`)
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

img {
  display: flex;
  height: 50px;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  border: #ECEFF1 3px solid;
}

.username {
  color: #162668;
  font-weight: bold;
}

.divided {
  display: block;
  border-top: 1px solid #e6dfdf;
  height: 10px;
  width: 100%;
}
</style>
