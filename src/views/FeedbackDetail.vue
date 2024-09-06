<template>
  <div class="bg-red-500 w-screen h-screen py-16 flex justify-center">
    <div class="bg-green-500 w-[45%] flex flex-col">
      <div class="w-full flex justify-between">
        <router-link class="flex items-center" :to="{ name: 'home' }"
          ><ArrowLeft class="mr-2" /> Go Back</router-link
        >
        <button>Edit feedback</button>
      </div>
      <div class="w-full h-40 flex justify-between rounded-xl p-8 bg-green-700 mt-5">
        <div class="flex">
          <div
            @click="postStore.addLike(postStore.singlePost.id)"
            v-bind:class="[postStore.singlePost.liked ? 'bg-blue-500' : 'bg-red-500']"
            class="w-10 h-16 p-3 rounded-lg flex flex-col items-center"
          >
            <ArrowUp />
            <h1 class="mt-2">{{ postStore.singlePost.likes }}</h1>
          </div>
          <div class="ml-10">
            <h1>{{ postStore.singlePost.title }}</h1>
            <p>{{ postStore.singlePost.description }}</p>
            <span>{{ postStore.singlePost.type }}</span>
          </div>
        </div>
        <div class="flex items-center">
          <CommentIcon />
          <h1 class="ml-2 font-bold">
            {{ postStore.commentQuantity(postStore.singlePost.id) }}
          </h1>
        </div>
      </div>
      <CommentComponent
        v-for="(item, index) in postStore.singlePostComments"
        :key="index"
        :text="item.text"
        :profileId="item.profileId"
      />
    </div>
  </div>
</template>

<script setup>
import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import CommentIcon from '@/components/icons/CommentIcon.vue'
import ArrowUp from '@/components/icons/ArrowUp.vue'
import { usePostStore } from '@/stores'
import { useRoute } from 'vue-router'
import CommentComponent from '@/components/CommentComponent.vue'
const postStore = usePostStore()
const route = useRoute()
postStore.getSinglePost(route.params.id)
</script>
