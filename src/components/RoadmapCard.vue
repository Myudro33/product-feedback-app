<template>
  <div class="w-full p-5 h-72 border-t-8 first:mt-0 mt-5 rounded-xl border-t-green-600 bg-black">
    <span class="flex items-center my-2">
      <div :style="{ 'background-color': props.color }" class="w-3 h-3 rounded-full"></div>
      <p class="ml-2">{{ props.status }}</p>
    </span>
    <router-link :to="{ name: 'detail-feedback', params: { id: props.id } }" class="text-2xl">{{
      props.title
    }}</router-link>
    <p class="mt-2 text-base">{{ props.description }}</p>
    <div class="bg-gray-500 p-3 inline-block rounded-2xl mt-2">{{ props.type }}</div>
    <div class="w-full items-center flex justify-between">
      <div
        @click="postStore.addLike(props.id)"
        v-bind:class="[props.liked ? 'bg-blue-500' : 'bg-red-500']"
        class="w-10 mt-4 h-10 p-3 rounded-lg flex flex-col items-center"
      >
        <h1>{{ props.likes }}</h1>
      </div>
      <div>{{ props.comments }}</div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores'

const postStore = usePostStore()
const props = defineProps([
  'id',
  'color',
  'status',
  'title',
  'description',
  'type',
  'likes',
  'liked',
  'comments'
])
</script>
