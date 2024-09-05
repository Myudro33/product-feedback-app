export default {
  async addPost(data) {
    const feedback = {
      id: String(Math.floor(Math.random() * 99999)),
      title: data.title,
      description: data.description,
      type: data.selected,
      likes: 0,
      comments: []
    }
    try {
      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(feedback)
      })
      this.posts.push(feedback)
    } catch (error) {
      alert(error)
    }
  },
  async getPosts() {
    const res = await fetch('http://localhost:3000/posts')
    const data = await res.json()
    this.posts = data
  }
}
