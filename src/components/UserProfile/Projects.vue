<template>
  <div class="wrap" id="projects-list">
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

</template>

<script>
import { getRepos } from '../../helpers/axios'

export default {
  data () {
    return {
      reposList: []
    }
  },
  mounted () {
    this.infiniteLoad()
    this.getRepo()
  },
  methods: {
    async getRepo () {
      this.reposList = await getRepos(this.$route.params.id)
      console.log(this.reposList)
    },
    formateDate (date) {
      const formatedDate = new Date(date)
      return formatedDate.toLocaleDateString('pt-BR')
    },
    openBlog () {
      let url = ''
      if (this.model.blog.indexOf('http') === -1) {
        url = 'https://' + this.model.blog
      } else {
        url = this.model.blog
      }
      window.open(url, '_blank')
    },
    infiniteLoad () {
      console.log(1)
      // Detect when scrolled to bottom.
      let listElm = document.querySelector('#projects-list')
      listElm.addEventListener('scroll', function () {
        console.log(3)
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          console.log(3)
          this.loadMore()
        }
      })
    },
    loadMore () {
      console.log(2)
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

.title {
  color: #0366D6;
  font-size: 14px;
  margin-top: 10px;
}

.description {
  color: #586069;
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 5px;
}

.item {
  color: #162668;
  margin-top: 40px;
  margin-bottom: -20px;
}

.footer {
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
</style>
