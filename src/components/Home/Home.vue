<template>
  <div class="wrap">
    <img src="../../assets/logo.png">
    <h1 class="title">
      GitSearch
    </h1>
    <search-bar :value.sync="search" :initSearch.sync="initSearch"/>
    <div class="buttons">
      <custom-button bgColor="#344FA5" label="Ver Todos" :action="getAllUsers"/>
      <custom-button bgColor="#6FCF97" label="Buscar" :action="searchUser"/>
    </div>
  </div>
</template>

<script>
import CustomButton from '../Utils/CustomButton.vue'
import SearchBar from '../Utils/SearchBar.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      search: '',
      initSearch: false
    }
  },
  mounted () {
    this.search = this.searchValue
  },
  methods: {
    ...mapActions(['setSearchvalue', 'setGetAll']),
    searchUser () {
      this.setSearchvalue(this.search)
      this.$router.push(`/search-result`)
    },
    getAllUsers () {
      this.setGetAll(true)
      this.searchUser()
    }
  },
  computed: {
    ...mapGetters(['getAll', 'searchValue'])
  },
  watch: {
    initSearch (val) {
      if (val) {
        this.searchUser()
        this.initSearch = false
      }
    }
  },
  components: {
    SearchBar,
    CustomButton
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  width: 90vw;
}

img {
  display: flex;
  margin: 0 auto;
  max-height: 150px;
  max-width: 150px;
  padding-bottom: 10px;
}

.buttons {
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
