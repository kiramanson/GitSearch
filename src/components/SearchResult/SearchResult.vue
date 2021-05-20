<template>
  <div class="wrap">
    <div class="header">
      <custom-header label="Lista de Usuários" divided/>
    </div>
    <search-bar :value.sync="search" :initSearch.sync="initSearch" class="search-bar"/>
    <infinite-scroll :endList="endList" :bottom.sync="bottom">
      <div slot="content">
        <search-result-item v-for="(item, index) in searchResult" :key="item.id" :index="index" :model="item"/>
      </div>
    </infinite-scroll>
    <div class="loading">
      <loading v-if="loading"/>
    </div>
  </div>
</template>

<script>
import SearchBar from '../Utils/SearchBar'
import CustomHeader from '../Utils/CustomHeader'
import SearchResultItem from './SearchResultItem'
import Loading from '../Utils/Loading'
import InfiniteScroll from '../Utils/InfiniteScroll'
import { searchUser } from '../../helpers/axios'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'search-result',
  data () {
    return {
      bottom: false,
      page: 1,
      loading: false,
      endList: false,
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
      this.loading = true
      this.setSearchvalue(this.search)
      const result = this.getAll ? await searchUser('', this.page) : await searchUser(this.search, this.page)
      if (result && typeof result === 'object') {
        this.searchResult = this.searchResult.concat(result)
      }
      if (result.length < 10) {
        this.endList = true
      }
      this.setGetAll(false)
      this.loading = false
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
    },
    bottom (bottom) {
      if (bottom && !this.endList) {
        this.page++
        this.searchUser()
      }
    }
  },
  components: {
    SearchBar,
    CustomHeader,
    SearchResultItem,
    Loading,
    InfiniteScroll
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

.loading {
  position: relative;
  margin: 20px auto;
  height: 50px;
}
</style>
