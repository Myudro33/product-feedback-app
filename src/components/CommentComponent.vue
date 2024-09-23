<template>
  <div class="p-8 flex bg-blue-400 my-2">
    <div class="ml-5">
      <p class="mt-2">{{ props.text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['text'])
</script>
