<template>
  <div class="flex flex-col p-5 bg-yellow-300 mt-5">
    <h1>Add comment</h1>
    <textarea v-model="text" class="resize-none" name="text"></textarea>
    <div class="flex w-full justify-between">
      <p>{{ 255 - text.length }} characters left</p>
      <button @click="AddComment(props.id)" class="bg-blue-200">post comment</button>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores'
import { ref } from 'vue'
const store = usePostStore()
const props = defineProps(['id', 'inner', 'postId'])
const text = ref('')
const AddComment = (id) => {
  store.AddComment(id, text.value)
  text.value = ''
}
</script>
