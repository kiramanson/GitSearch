import axios from 'axios'

export const searchUser = async (searchValue, params = { limit: 10, offset: 0, page: 1 }) => {
  const query = `q=${encodeURIComponent(searchValue + 'in:user type:user')}`
  const result = await getUrl(`https://api.github.com/search/users?${query}&per_page=${params.limit}`)
  return {
    items: result.data.items,
    maxResult: result.data.total_count
  }
}

export const getUser = async (username) => {
  const result = await getUrl(`https://api.github.com/users/${username}`)
  return result.data
}

export const getRepos = async (username) => {
  const result = await getUrl(`https://api.github.com/users/${username}/repos?per_page=8`)
  return result.data
}

export const getUrl = (url, model) => {
  return new Promise((resolve, reject) => {
    axios.get(url, model)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        console.log('GET ERROR: ', err)
        reject(err)
      })
  })
}
