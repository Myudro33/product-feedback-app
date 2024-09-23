import { defineStore } from 'pinia'
import actions from './actions'
export const usePostStore = defineStore('postStore', {
  state: () => ({
    loading: false,
    posts: [],
    singlePost: '',
    singlePostComments: []
  }),
  actions
})
