<template>
  <div class="w-full bg-white h-20 rounded-xl relative p-5 flex items-center justify-between">
    <div class="w-1/2 flex items-center">
      <SuggestIcon />
      <h1 class="ml-2 text-xl">{{ postStore.posts.length }}</h1>
      <p @click="() => (dropDown = !dropDown)" class="flex items-center ml-5 cursor-pointer">
        Sort by: {{ postStore.sortBy }}
      </p>
      <ArrowDown class="ml-1" />
    </div>
    <div v-if="dropDown" class="w-64 absolute left-80 top-14 rounded-lg overflow-hidden">
      <div
        @click="sort('most-upvotes')"
        class="w-full cursor-pointer h-14 px-5 py-3 border-b bg-red-600"
      >
        <h1>Most Upvotes</h1>
      </div>
      <div
        @click="sort('least-upvotes')"
        class="w-full cursor-pointer h-14 px-5 py-3 border-b bg-red-600"
      >
        <h1>Least Upvotes</h1>
      </div>
      <div
        @click="sort('most-comments')"
        class="w-full cursor-pointer h-14 px-5 py-3 border-b bg-red-600"
      >
        <h1>Most Comments</h1>
      </div>
      <div
        @click="sort('least-comments')"
        class="w-full cursor-pointer h-14 px-5 py-3 border-b bg-red-600"
      >
        <h1>Least Comments</h1>
      </div>
    </div>
    <RouterLink
      :to="{ name: 'add-feedback' }"
      class="p-4 font-bold h-full bg-purple-600 flex items-center rounded-xl"
      >+ Add Feedback</RouterLink
    >
  </div>
</template>

<script setup>
import SuggestIcon from './icons/SuggestIcon.vue'
import ArrowDown from './icons/ArrowDown.vue'
import { ref } from 'vue'
import { usePostStore } from '@/stores'
const dropDown = ref(false)
const postStore = usePostStore()
const sort = (by) => {
  postStore.sortBy = by
}
</script>
