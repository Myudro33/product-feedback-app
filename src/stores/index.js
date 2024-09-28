import { defineStore } from 'pinia'
import actions from './actions'
import getters from './getters'
export const usePostStore = defineStore('postStore', {
  state: () => ({
    loading: false,
    posts: [],
    singlePost: '',
    singlePostComments: [],
    sortBy: ''
  }),
  actions,
  getters
})
