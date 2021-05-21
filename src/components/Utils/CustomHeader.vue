<template>
  <div>
    <div class="mobile">
      <div class="header">
        <i class="fas fa-arrow-left" @click="back"/>
        <span>
          {{label}}
        </span>
      </div>
      <div class="divided" v-if="divided"/>
    </div>
    <div class="desktop">
      <div class="home" @click="goHome">
        <img src="../../assets/logo.png">
        <span class="title">
          GitSearch
        </span>
      </div>
    </div>
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
    },
    goHome () {
      this.$router.push('/')
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
  padding-left: 10px;
}

.desktop {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  height: 55px;
  width: 100vw;
  background-color: white;
  font-weight: bold;
  box-shadow: 0 3px 5px rgba(36, 35, 35, 0.2);
  padding: 3px;
}

img {
  max-height: 50px;
}

.home {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 880px;
  cursor: pointer;
}

.title {
  margin-top: 3px;
}

.divided {
  display: block;
  border-top: 1px solid #e6dfdf;
  height: 10px;
  width: 100%;
}

/* desktop */
@media ( min-width: 769px ) {
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
}
</style>
