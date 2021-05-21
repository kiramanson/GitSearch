<template>
  <div class="wrap">
    <infinite-scroll :endList="endList" :bottom.sync="bottom" :listLength="reposList.length" :loading="loading">
      <div slot="content">
        <div v-for="(item, index) in reposList" class="item" :key="item.id">
          <div v-show="index" class="divided"/>
          <div class="title">{{item.name}}</div>
          <div class="description">{{item.description}}</div>
          <div class="footer">
            <div class="language" v-if="item.language"><div class="language-ball"/>{{item.language}}</div>
            <div class="updated">Atualizado em {{formateDate(item.updated_at)}}</div>
          </div>
        </div>
      </div>
    </infinite-scroll>
    <div class="loading">
      <loading v-if="loading"/>
    </div>
  </div>

</template>

<script>
import { getRepos } from '../../helpers/axios'
import Loading from '../Utils/Loading'
import InfiniteScroll from '../Utils/InfiniteScroll'

export default {
  data () {
    return {
      bottom: false,
      reposList: [],
      page: 1,
      loading: false,
      endList: false
    }
  },
  mounted () {
    this.getRepo()
  },
  methods: {
    async getRepo () {
      this.loading = true
      const result = await getRepos(this.$route.params.id, this.page)
      if (result && typeof result === 'object') {
        this.reposList = this.reposList.concat(result)
      }
      if (result.length < 8) {
        this.endList = true
      }
      this.loading = false
    },
    formateDate (date) {
      const formatedDate = new Date(date)
      return formatedDate.toLocaleDateString('pt-BR')
    }
  },
  watch: {
    bottom (bottom) {
      if (bottom && !this.endList) {
        this.page++
        this.getRepo()
      }
    }
  },
  components: {
    Loading,
    InfiniteScroll
  }
}
</script>

<style scoped>
.wrap {
  flex-direction: column;
  font-weight: bold;
  color: #263238;
  margin-left: 10px;
}

.title {
  color: #0366D6;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  color: #586069;
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 38px;
  width: 90vw;
}

.item {
  color: #162668;
  margin-top: 40px;
  margin-bottom: -20px;
  text-align: left;
}

.footer {
  position: relative;
  display: flex;
}

.language {
  display: flex;
  font-size: 8px;
  color: #586069;
}

.language-ball {
  font-size: 8px;
  border-radius: 50%;
  background-color: #0abffc;
  width: 8px;
  height: 8px;
  margin-right: 5px;
}

.updated {
  position: absolute;
  right: 30px;
  font-size: 8px;
  color: #586069;
}

.divided {
  display: block;
  border-top: 1px solid #e6dfdf;
  height: 10px;
  width: 100%;
  margin-top: -10px;
}

.loading {
  position: relative;
  margin: 20px auto;
  font-size: 32px;
}

/* desktop */
@media ( min-width: 769px ) {
  span {
    display: block;
  }
  .wrap {
    display: block;
    margin-top: 40px;
  }
  .item {
    width: 600px;
    height: 70px;
  }
  .updated {
    position: absolute;
    top: -30px;
    right: 0px;
    font-size: 8px;
    color: #586069;
  }
  .language {
    position: absolute;
    top: -50px;
    left: 492px;
    font-size: 8px;
    color: #586069;
  }
  .description {
    width: 400px;
  }
}
</style>
