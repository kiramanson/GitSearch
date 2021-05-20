import { loadStorage, saveStorage, removeStorage } from '../../helpers/localStorage'

const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
const CLEAR_SEARCH_VALUE = 'CLEAR_SEARCH_VALUE'
const SEARCH_VALUE = 'searchValue'
const SET_GET_ALL = 'SET_GET_ALL'
const GET_ALL = 'getAll'
const SET_USER_MODEL = 'SET_USER_MODEL'
const USER_MODEL = 'userModel'

const state = {
  searchValue: loadStorage(SEARCH_VALUE) || '',
  getAll: loadStorage(GET_ALL) || false,
  userModel: loadStorage(USER_MODEL) || {}
}

const mutations = {
  [SET_SEARCH_VALUE] (state, payload) {
    state.searchValue = payload
    saveStorage(SEARCH_VALUE, state.searchValue)
  },
  [CLEAR_SEARCH_VALUE] (state) {
    state.searchValue = ''
    removeStorage(SEARCH_VALUE)
  },
  [SET_GET_ALL] (state, payload) {
    state.getAll = payload
    saveStorage(GET_ALL, state.getAll)
  },
  [SET_USER_MODEL] (state, payload) {
    state.userModel = payload
    saveStorage(USER_MODEL, state.userModel)
  }
}

const actions = {
  setSearchvalue ({ commit }, data) {
    commit(SET_SEARCH_VALUE, data)
  },
  clearSearchvalue ({ commit }) {
    commit(CLEAR_SEARCH_VALUE)
  },
  setGetAll ({ commit }, data) {
    commit(SET_GET_ALL, data)
  },
  setUserModel ({ commit }, data) {
    commit(SET_USER_MODEL, data)
  }
}

const getters = {
  searchValue: state => state.searchValue,
  getAll: state => state.getAll,
  userModel: state => state.userModel
}

export default {
  state,
  mutations,
  actions,
  getters
}
