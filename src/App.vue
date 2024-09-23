<script setup>
import { RouterView } from 'vue-router'
import { usePostStore } from './stores/index'
import { onMounted } from 'vue'
const postStore = usePostStore()
onMounted(() => {
  postStore.getPosts()
})
</script>

<template>
  <RouterView />
</template>
