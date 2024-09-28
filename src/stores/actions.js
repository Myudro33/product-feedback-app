import router from '@/router'

export default {
  async AddComment(id, text_value) {
    const newComment = {
      id: String(Math.floor(Math.random() * 99999)),
      postId: id,
      text: text_value
    }
    await fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch the item')
        }
        return response.json()
      })
      .then((item) => {
        const updatedComments = [...item.comments, newComment]
        return fetch(`http://localhost:3000/posts/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ comments: updatedComments })
        })
      })
      .then(() => {
        this.singlePost.comments.push(newComment)
      })
  },
  async deletePost(id) {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    })
    this.posts = this.posts.filter((post) => post.id !== id)
  },
  async editPost(id, data) {
    const index = (element) => element.id == id
    const item = this.posts.findIndex(index)
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...this.posts[item],
        title: data.title,
        type: data.type,
        status: data.status,
        description: data.description
      })
    })
    this.posts[item] = {
      ...this.posts[item],
      title: data.title,
      type: data.type,
      status: data.status,
      description: data.description
    }
  },
  async getSinglePost(id) {
    await fetch(`http://localhost:3000/posts/${id}`)
      .then((item) => item.json())
      .then((response) => {
        this.singlePost = response
      })
  },
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
      status: 'suggestion',
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
      router.push({ name: 'home' })
    } catch (error) {
      alert(error)
    }
  },
  commentQuantity(id) {
    const index = (element) => element.id == id
    const item = this.posts.findIndex(index)
    return this.posts[item].comments.filter((item) => item.postId == id).length
  },
  async getPosts() {
    const res = await fetch('http://localhost:3000/posts')
    const data = await res.json()
    this.posts = data
  }
}
