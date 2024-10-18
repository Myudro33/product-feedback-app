<template>
  <div class="w-full h-screen p-24 flex justify-center">
    <div class="w-2/5 flex flex-col">
      <router-link :to="{ name: 'home' }" class="flex items-center"
        ><ArrowLeft class="mr-2" /> Go Back</router-link
      >
      <div class="bg-blue-400 w-full h-4/5 mt-16 p-10">
        <NewFeedbackIcon class="-translate-y-16" />
        <h1>Create New Feedback</h1>
        <p>Add a short, descriptive headline</p>
        <input v-model="data.title" class="w-full h-12 rounded-md outline-none p-2" type="text" />
        <h1>Category</h1>
        <p>Choose a category for your feedback</p>
        <select class="w-full h-12 rounded-md outline-none p-2" v-model="data.selected">
          <option>Feature</option>
          <option>AI</option>
          <option>UX</option>
          <option>Enhancement</option>
          <option>Bug</option>
        </select>
        <h1>Feedback detail</h1>
        <p>Include any specific comments on what should be improved, added, etc.</p>
        <textarea
          v-model="data.description"
          class="w-full h-20 resize-none outline-none p-2 rounded-md"
        ></textarea>
        <div class="flex justify-end items-center">
          <router-link :to="{ name: 'home' }">Cancel</router-link>
          <button @click="postStore.addPost(data)" class="ml-4">Add feedback</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import NewFeedbackIcon from '@/components/icons/NewFeedbackIcon.vue'
import { ref } from 'vue'
import { usePostStore } from '@/stores'
const postStore = usePostStore()
const data = ref({
  title: '',
  selected: '',
  description: ''
})
</script>
