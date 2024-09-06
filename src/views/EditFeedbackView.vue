<template>
  <div class="bg-red-900 w-full p-24 flex justify-center">
    <div class="w-2/5 flex flex-col bg-green-950">
      <button @click="$router.go(-1)" class="flex items-center">
        <ArrowLeft class="mr-2" /> Go Back
      </button>
      <div class="bg-blue-400 w-full mt-16 p-10">
        <EditIcon class="-translate-y-16" />
        <h1>Editing 'Add a dark theme option</h1>
        <h1>feedback title</h1>
        <p>Add a short, descriptive headline</p>
        <input v-model="data.title" class="w-full h-12 rounded-md outline-none p-2" type="text" />
        <h1>Category</h1>
        <p>Choose a category for your feedback</p>
        <select class="w-full h-12 rounded-md outline-none p-2" v-model="data.type">
          <option>Feature</option>
          <option>AI</option>
          <option>UX</option>
          <option>Enhancement</option>
          <option>Bug</option>
        </select>
        <h1>Update Status</h1>
        <p>Change feature state</p>
        <select class="w-full h-12 rounded-md outline-none p-2" v-model="data.status">
          <option>suggestion</option>
          <option>planned</option>
          <option>in-progress</option>
          <option>live</option>
        </select>
        <h1>Feedback detail</h1>
        <p>Include any specific comments on what should be improved, added, etc.</p>
        <textarea
          v-model="data.description"
          class="w-full h-20 resize-none outline-none p-2 rounded-md"
        ></textarea>
        <div class="flex justify-end items-center">
          <button @click="$router.go(-1)">Cancel</button>
          <button @click="submit" class="ml-4">Add feedback</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import { ref } from 'vue'
import { usePostStore } from '@/stores'
import EditIcon from '@/components/icons/EditIcon.vue'
import { useRoute, useRouter } from 'vue-router'
const postStore = usePostStore()
const route = useRoute()
const router = useRouter()
const index = (element) => element.id == route.params.id
const item = postStore.posts.findIndex(index)
const data = ref({
  title: postStore.posts[item].title,
  type: postStore.posts[item].type,
  status: postStore.posts[item].status,
  description: postStore.posts[item].description
})
const submit = () => {
  postStore.editPost(route.params.id, data.value)
  router.go(-1)
}
</script>
