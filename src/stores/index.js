import { defineStore } from 'pinia'
import actions from './actions'
export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    singlePost: {},
    singlePostComments: []
  }),
  actions
})
