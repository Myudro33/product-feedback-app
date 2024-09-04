<script setup>
import {  RouterView } from 'vue-router'
import { usePostStore } from './stores/index';
const postStore = usePostStore()
postStore.getPosts()
</script>

<template>
  <RouterView />
</template>

