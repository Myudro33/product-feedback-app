<template>
  <div class="w-full h-40 flex justify-between rounded-xl p-8 bg-green-700 mt-5">
    <div class="flex">
      <div
        @click="postStore.addLike(props.id)"
        v-bind:class="[props.liked ? 'bg-blue-500' : 'bg-red-500']"
        class="w-10 h-16 p-3 rounded-lg flex flex-col items-center"
      >
        <ArrowUp />
        <h1 class="mt-2">{{ props.likes }}</h1>
      </div>
      <router-link
        :to="{ name: 'detail-feedback', params: { id: props.id } }"
        v-if="props.link"
        class="ml-10"
      >
        <h1>{{ props.title }}</h1>
        <p>{{ props.description }}</p>
        <span>{{ props.type }}</span>
      </router-link>
      <div v-else class="ml-10">
        <h1>{{ props.title }}</h1>
        <p>{{ props.description }}</p>
        <span>{{ props.type }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <CommentIcon />
      <h1 class="ml-2 font-bold">
        {{
          props.link ? postStore.commentQuantity(props.id) : postStore.singlePost.comments?.length
        }}
      </h1>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores'
import CommentIcon from './icons/CommentIcon.vue'
import ArrowUp from './icons/ArrowUp.vue'
const props = defineProps(['id', 'liked', 'likes', 'title', 'description', 'type', 'link'])
const postStore = usePostStore()
</script>
