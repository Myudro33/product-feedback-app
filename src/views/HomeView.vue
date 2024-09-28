<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import { usePostStore } from '@/stores'
import FeedbackComponent from '@/components/FeedbackComponent.vue'
const postStore = usePostStore()
</script>

<template>
  <div class="w-screen h-screen bg-red-500 pt-24 px-52 flex">
    <SidebarComponent />
    <div class="w-[60vw] ml-10 h-full flex flex-col">
      <NavbarComponent />
      <FeedbackComponent
        v-for="(item, index) in postStore.sortedPosts"
        :key="index"
        :id="item.id"
        :description="item.description"
        :liked="item.liked"
        :likes="item.likes"
        :title="item.title"
        :type="item.type"
        :link="true"
      />
    </div>
  </div>
</template>
