<template>
  <div class="wrap">
    <div class="header">
      <custom-header label="Lista de Usuários" divided/>
    </div>
    <infinite-scroll :endList="endList" :bottom.sync="bottom" :listLength="searchResult.length" :loading="loading" :update.sync="checkInfiniteScroll">
      <div slot="content" >
        <div class="content">
          <h1> Search Results </h1>
          <search-bar :value.sync="search" :initSearch.sync="initSearch" class="search-bar" showIcon/>
          <div class="divided"/>
          <search-result-item v-for="(item, index) in searchResult" :key="item.id" :index="index" :model="item"/>
          <div class="loading">
            <loading v-if="loading"/>
          </div>
        </div>
      </div>
    </infinite-scroll>
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
      searchResult: [],
      checkInfiniteScroll: false
    }
  },
  mounted () {
    this.search = this.searchValue
    this.searchUser()
  },
  methods: {
    ...mapActions(['setSearchvalue', 'setGetAll']),
    async searchUser (isNewSearch = true) {
      this.loading = true
      this.setSearchvalue(this.search)
      if (isNewSearch) {
        this.searchResult = []
        this.page = 1
        this.endList = false
      }
      const result = this.getAll ? await searchUser('', this.page) : await searchUser(this.search, this.page)
      if (result && typeof result === 'object') {
        this.searchResult = this.searchResult.concat(result)
      }
      if (result.length < 10) {
        this.endList = true
      }
      this.setGetAll(false)
      this.loading = false
      setTimeout(() => { this.checkInfiniteScroll = true }, 1000)
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
        this.searchUser(false)
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
  width: 99vw;
}

.loading {
  margin: 0 auto;
  font-size: 1em;
}

h1 {
  display: none;
}

.divided {
  display: none;
  border-top: 1px solid #e6dfdf;
  width: 100%;
  margin-bottom: 30px;
}

@media ( min-width: 769px ) {
  .wrap {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    flex-direction: column;
  }
  .content {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    padding: 10px 60px 60px 60px;
    margin-top: 50px;
    margin-left: 5px;
    box-shadow: 0 0 5px rgba(36, 35, 35, 0.2);
    background-color: white;
  }
  h1 {
    display: flex;
  }
  .search-bar {
    position: absolute;
    right: -190px;
    top: -50px;
  }
  .divided {
    display: block;
  }
}
</style>
