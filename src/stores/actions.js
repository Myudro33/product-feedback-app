export default {
  async addLike(id) {
    const index = (element) => element.id == id
    const item = this.posts.findIndex(index)
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...this.posts[item],
        likes: this.posts[item].liked
          ? (this.posts[item].likes -= 1)
          : (this.posts[item].likes += 1),
        liked: this.posts[item].liked ? false : true
      })
    })
    this.posts[item].liked = !this.posts[item].liked
  },
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
