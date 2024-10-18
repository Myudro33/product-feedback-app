<template>
  <h1 v-if="postStore.loading">loading...</h1>
  <div v-else class="w-full py-16 flex justify-center">
    <div class="w-[45%] flex flex-col">
      <div class="w-full flex justify-between">
        <router-link class="flex items-center" :to="{ name: 'home' }"
          ><ArrowLeft class="mr-2" /> Go Back</router-link
        >
        <router-link :to="{ name: 'edit-feedback', params: { id: postStore?.singlePost?.id } }"
          >Edit feedback</router-link
        >
      </div>
      <FeedbackComponent
        :id="postStore.singlePost.id"
        :description="postStore.singlePost.description"
        :liked="postStore.singlePost.liked"
        :likes="postStore.singlePost.likes"
        :title="postStore.singlePost.title"
        :type="postStore.singlePost.type"
        :link="false"
      />
      <CommentComponent
        v-for="(item, index) in postStore.singlePost.comments"
        :key="index"
        :text="item.text"
        :profileId="item.profileId"
      />
      <AddComment :id="postStore.singlePost.id" :inner="false" />
    </div>
  </div>
</template>

<script setup>
import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import { usePostStore } from '@/stores'
import { useRoute } from 'vue-router'
import CommentComponent from '@/components/CommentComponent.vue'
import FeedbackComponent from '@/components/FeedbackComponent.vue'
import AddComment from '@/components/AddComment.vue'
import { onMounted } from 'vue'
const postStore = usePostStore()
const route = useRoute()
onMounted(() => {
  postStore.getSinglePost(route.params.id)
})
</script>
