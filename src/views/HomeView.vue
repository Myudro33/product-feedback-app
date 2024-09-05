<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import { usePostStore } from '@/stores'
import ArrowUp from '@/components/icons/ArrowUp.vue'
import CommentIcon from '@/components/icons/CommentIcon.vue'
const postStore = usePostStore()
</script>

<template>
  <div class="w-screen h-screen bg-red-500 pt-24 px-52 flex">
    <SidebarComponent />
    <div class="w-[60vw] ml-10 h-full flex flex-col">
      <NavbarComponent />
      <div
        v-for="(item, index) in postStore.posts"
        :key="index"
        class="w-full h-40 flex justify-between rounded-xl p-8 bg-green-700 mt-5"
      >
        <div class="flex">
          <div
            @click="postStore.addLike(item.id)"
            v-bind:class="[item.liked ? 'bg-blue-500' : 'bg-red-500']"
            class="w-10 h-16 p-3 rounded-lg flex flex-col items-center"
          >
            <ArrowUp />
            <h1 class="mt-2">{{ item.likes }}</h1>
          </div>
          <div class="ml-10">
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <span>{{ item.type }}</span>
          </div>
        </div>
        <div class="flex items-center">
          <CommentIcon />
          <h1 class="ml-2 font-bold">
            {{ postStore.commentQuantity(item.id) }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
