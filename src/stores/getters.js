export default {
  sortedPosts: (state) => {
    if (state.sortByType == 'All') {
      return state.posts
    } else if (state.sortByType != '') {
      if (state.sortBy == 'most-upvotes') {
        return state.posts
          .slice()
          .sort((a, b) => b.likes - a.likes)
          .filter((item) => item.type == state.sortByType)
      }
      if (state.sortBy == 'least-upvotes') {
        return state.posts
          .slice()
          .sort((b, a) => b.likes - a.likes)
          .filter((item) => item.type == state.sortByType)
      }
      if (state.sortBy == 'most-comments') {
        return state.posts
          .slice()
          .sort((a, b) => b.comments.length - a.comments.length)
          .filter((item) => item.type == state.sortByType)
      }
      if (state.sortBy == 'least-comments') {
        return state.posts
          .slice()
          .sort((b, a) => b.comments.length - a.comments.length)
          .filter((item) => item.type == state.sortByType)
      }
      return state.posts.filter((item) => item.type == state.sortByType)
    } else {
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
    }
    return state.posts
  }
}
