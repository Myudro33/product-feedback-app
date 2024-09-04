export default {
  async getPosts() {
    const res = await fetch('http://localhost:3000/posts')
    const data = await res.json()
    this.posts = data
  }
}
