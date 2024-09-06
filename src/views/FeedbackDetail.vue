<template>
  <div class="bg-red-500 w-screen h-screen py-16 flex justify-center">
    <div class="bg-green-500 w-[45%] flex flex-col">
      <div class="w-full flex justify-between">
        <router-link class="flex items-center" :to="{ name: 'home' }"
          ><ArrowLeft class="mr-2" /> Go Back</router-link
        >
        <router-link :to="{ name: 'edit-feedback', params: { id: postStore.posts[item].id } }"
          >Edit feedback</router-link
        >
      </div>
      <FeedbackComponent
        :id="postStore.posts[item].id"
        :description="postStore.posts[item].description"
        :liked="postStore.posts[item].liked"
        :likes="postStore.posts[item].likes"
        :title="postStore.posts[item].title"
        :type="postStore.posts[item].type"
        :link="false"
      />
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
import { usePostStore } from '@/stores'
import { useRoute } from 'vue-router'
import CommentComponent from '@/components/CommentComponent.vue'
import FeedbackComponent from '@/components/FeedbackComponent.vue'
const postStore = usePostStore()
const route = useRoute()
postStore.getSinglePost(route.params.id)
const index = (element) => element.id == route.params.id
const item = postStore.posts.findIndex(index)
</script>
