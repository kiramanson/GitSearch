<template>
  <div class="wrap">
    <div class="header">
      <custom-header label="Perfil"/>
    </div>
    <div class="container">
      <div class='profile-header'>
        <div class="banner"/>
        <img :src="user.avatar_url" class="avatar"/>
        <span class="name"> {{user.name}} </span>
        <div class="username">
          <i class="fas fa-user"/> {{user.login}}
        </div>
      </div>
      <infor-bar class="infor-bar" :model="inforModel"/>
      <div class="grid">
        <div class="menu">
          <menu-bar :model.sync="menuModel"/>
        </div>
        <div class="content">
          <about :model="user" v-if="menuModel[0].active"/>
          <projects :model="user" v-else-if="menuModel[1].active"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '../Utils/CustomHeader'
import InforBar from '../Utils/InforBar'
import MenuBar from '../Utils/MenuBar'
import About from './About'
import Projects from './Projects'
import { getUser } from '../../helpers/axios'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'user-profile',
  data () {
    return {
      user: {},
      menuModel: [
        { id: 1, label: 'Sobre', active: true },
        { id: 2, label: 'Projetos', active: false }
      ]
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    ...mapActions(['setSearchvalue', 'setGetAll']),
    async getUser () {
      this.user = await getUser(this.$route.params.id)
    }
  },
  computed: {
    ...mapGetters(['getAll', 'searchValue']),
    inforModel () {
      return [
        { id: 1, label: 'Seguindo', icon: 'fas fa-male', value: this.user.following },
        { id: 2, label: 'Projetos', icon: 'far fa-folder-open', value: this.user.public_repos },
        { id: 3, label: 'Seguidores', icon: 'fas fa-users', value: this.user.followers }
      ]
    }
  },
  components: {
    CustomHeader,
    InforBar,
    MenuBar,
    About,
    Projects
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.profile-header {
  position: relative;
}

.banner {
  width: 105vw;
  overflow-x: hidden;
  height: 145px;
  margin-left: -8px;
  margin-bottom: 40px;
  background-image: url('../../assets/banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .7;
}

.avatar {
  position: absolute;
  left: 32vw;
  top: 40px;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: #ECEFF1 3px solid;
  margin: 0 auto;
}

.name {
  color: #162668;
  font-weight: bold;
  font-size: 24px;
  margin: 10px 0 0 0;
}

.username {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #90A4AE;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 0 0;
}

.fa-user {
  font-size: .6em;
  padding-right: 10px;
}

/* desktop */
@media ( min-width: 769px ) {
  .wrap {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    flex-direction: column;
  }
  .container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    padding: 10px 60px 60px 60px;
    margin-top: 50px;
    margin-left: 5px;
    box-shadow: 0 0 5px rgba(36, 35, 35, 0.2);
    background-color: white;
    overflow-x: hidden;
  }
  .banner {
    position: absolute;
    top: -10px;
    left: -55px;
    width: 950px;
    height: 200px;
    background-size: cover;
    background-position: 25% 65%;;
  }
  .avatar {
    position: absolute;
    left: -45px;
    top: 60px;
    height: 170px;
    width: 170px;
  }
  .infor-bar {
    position: absolute;
    top: 110px;
    left: 600px;
    z-index: 2;
  }
  .name {
    position: absolute;
    top: 120px;
    left: 165px;
    z-index: 21;
    white-space: nowrap;
  }
  .username {
    position: absolute;
    top: 150px;
    left: 175px;
    font-size: 13px;
    z-index: 2;
  }
  .grid {
    display: flex;
    justify-content: flex-start;
    min-height: 600px;
  }
  .menu {
    border-right: #ECEFF1 1px solid;
    width: 217px;
    margin-top: 300px;
    margin-left: -70px;
  }
  .content {
    width: 588px;
    margin-top: 200px;
    margin-left: 40px;
    width: 610px;
  }
}
</style>
