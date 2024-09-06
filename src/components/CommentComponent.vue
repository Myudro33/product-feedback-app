<template>
  <div class="p-8 flex">
    <img class="w-10 h-10 rounded-full" v-bind:src="`../` + user.image" alt="" />
    <div class="ml-5">
      <h1>{{ user.fullName }}</h1>
      <p>@{{ user.username }}</p>
      <p class="mt-2">{{ props.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores'
import { ref } from 'vue'
const props = defineProps(['text', 'profileId'])
const user = ref({})
const postStore = usePostStore()
user.value = postStore.getSinglePostCommentsUser(props.profileId)
</script>
