<template>
  <div class="wrap">
    <div class="header">
      <custom-header label="Perfil"/>
    </div>
    <div class='profile-header'>
      <div class="banner"/>
      <img :src="user.avatar_url" class="avatar"/>
      <span class="name"> {{user.name}} </span>
      <div class="username">
        <i class="fas fa-user"/> {{user.login}}
      </div>
    </div>
    <infor-bar :model="inforModel"/>
    <div class="menu">
      <menu-bar :model.sync="menuModel"/>
    </div>
    <div class="content">
      <about :model="user" v-if="menuModel[0].active"/>
      <projects :model="user" v-else-if="menuModel[1].active"/>
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
  width: 90vw;
}

.profile-header {
  position: relative;
}

.banner {
  width: 100.5vw;
  height: 145px;
  margin-left: -8px;
  margin-bottom: 40px;
  background-image: url('../../assets/banner.jpg');
  background-size: cover;
}

.avatar {
  position: absolute;
  left: 30vw;
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
  margin: 10px 0 0 10px;
}

.username {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #90A4AE;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 0 10px;
}

.fa-user {
  font-size: .6em;
  padding-right: 10px;
}

</style>
