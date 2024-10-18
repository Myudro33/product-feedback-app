<template>
  <div class="px-44 py-28">
    <div class="w-full h-40 bg-red-500 rounded-2xl p-10 flex items-center justify-between">
      <div>
        <router-link to="/">go back</router-link>
        <h1 class="text-3xl font-bold mt-2">Roadmap</h1>
      </div>
      <RouterLink
        :to="{ name: 'add-feedback' }"
        class="p-4 font-bold h-14 bg-purple-600 flex items-center rounded-xl"
        >+ Add Feedback</RouterLink
      >
    </div>
    <div class="w-full flex justify-between mt-20">
      <div class="w-[32%]">
        <RoadmapCard
          v-for="(item, index) in postStore.getPlannedPosts"
          :key="index"
          :id="item.id"
          :description="item.description"
          :liked="item.liked"
          :likes="item.likes"
          :title="item.title"
          :type="item.type"
          :status="item.status"
          color="orange"
          :comments="item.comments.length"
        />
      </div>
      <div class="w-[32%]">
        <RoadmapCard
          v-for="(item, index) in postStore.getProgressPosts"
          :key="index"
          :id="item.id"
          :description="item.description"
          :liked="item.liked"
          :likes="item.likes"
          :title="item.title"
          :type="item.type"
          :status="item.status"
          color="purple"
          :comments="item.comments.length"
        />
      </div>
      <div class="w-[32%]">
        <RoadmapCard
          v-for="(item, index) in postStore.getLivePosts"
          :key="index"
          :id="item.id"
          :description="item.description"
          :liked="item.liked"
          :likes="item.likes"
          :title="item.title"
          :type="item.type"
          :status="item.status"
          color="blue"
          :comments="item.comments.length"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import RoadmapCard from '@/components/RoadmapCard.vue'
import { usePostStore } from '@/stores'
const postStore = usePostStore()
</script>
