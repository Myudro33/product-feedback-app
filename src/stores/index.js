import { defineStore } from 'pinia'
import actions from './actions'
export const usePostStore = defineStore('postStore', {
  state: () => ({
    loading: false,
    posts: [],
    singlePost: '',
    singlePostComments: [],
    sortBy: ''
  }),
  actions,
  getters: {
    sortedPosts: (state) => {
      if (state.sortBy == 'most-upvotes') {
        return state.posts.slice().sort((a, b) => b.likes - a.likes)
      }
      if (state.sortBy == 'least-upvotes') {
        return state.posts.slice().sort((b, a) => b.likes - a.likes)
      }
      if (state.sortBy == 'most-comments') {
        return state.posts.slice().sort((a, b) => b.comments.length - a.comments.length)
      }
      if (state.sortBy == 'least-comments') {
        return state.posts.slice().sort((b, a) => b.comments.length - a.comments.length)
      }
      return state.posts
    }
  }
})
