export default {
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
    if (state.sortBy == 'UI') {
      return state.posts.filter((item) => item.type == 'UI')
    }
    if (state.sortBy == 'UX') {
      return state.posts.filter((item) => item.type == 'UX')
    }
    if (state.sortBy == 'Feature') {
      return state.posts.filter((item) => item.type == 'Feature')
    }
    if (state.sortBy == 'Bug') {
      return state.posts.filter((item) => item.type == 'Bug')
    }
    if (state.sortBy == 'Enhancement') {
      return state.posts.filter((item) => item.type == 'Enhancement')
    }
    return state.posts
  }
}
