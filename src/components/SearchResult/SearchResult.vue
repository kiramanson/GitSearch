<template>
  <div class="wrap">
    <div class="header">
      <custom-header label="Lista de Usuários" divided/>
    </div>
    <search-bar :value.sync="search" :initSearch.sync="initSearch" class="search-bar"/>
    <search-result-item v-for="(item, index) in searchResult.items" :key="item.id" :index="index" :model="item"/>
  </div>
</template>

<script>
import SearchBar from '../Utils/SearchBar'
import CustomHeader from '../Utils/CustomHeader'
import SearchResultItem from './SearchResultItem'
import { searchUser } from '../../helpers/axios'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'search-result',
  data () {
    return {
      search: '',
      initSearch: false,
      searchResult: []
    }
  },
  mounted () {
    this.search = this.searchValue
    this.searchUser()
  },
  methods: {
    ...mapActions(['setSearchvalue', 'setGetAll']),
    async searchUser () {
      this.setSearchvalue(this.search)
      this.searchResult = this.getAll ? await searchUser('') : await searchUser(this.search)
      this.setGetAll(false)
      console.log(this.searchResult)
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
    CustomHeader,
    SearchResultItem
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  width: 90vw;
}

.search-bar {
  margin-bottom: 30px;
}
</style>
