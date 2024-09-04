<template>
    <div class="w-full bg-white h-20 rounded-xl relative p-5 flex items-center justify-between">
        <div class="w-1/2 flex items-center">
            <SuggestIcon/>
            <h1 class="ml-2 text-xl">6 Suggestions</h1>
            <p @click="()=>dropDown = !dropDown" class="flex items-center ml-5 cursor-pointer">Sort by: most Upvotes </p> <ArrowDown class="ml-1"/>
        </div>
        <div v-if="dropDown" class="w-64 absolute left-80 top-14 bg-green-600 rounded-lg overflow-hidden">
            <div class="w-full h-14 px-5 py-3 border-b  bg-red-600">
                <h1>Most Upvotes</h1>
            </div>
            <div class="w-full h-14 px-5 py-3 border-b  bg-red-600">
                <h1>Last Upvotes</h1>
            </div>
            <div class="w-full h-14 px-5 py-3 border-b  bg-red-600">
                <h1>Most Comments</h1>
            </div>
            <div class="w-full h-14 px-5 py-3 border-b  bg-red-600">
                <h1>Least Comments</h1>
            </div>
        </div>
        <button class="p-4 font-bold h-full bg-purple-600 flex items-center rounded-xl">+ Add Feedback</button>
    </div>
</template>

<script setup>
import SuggestIcon from './icons/SuggestIcon.vue'
import ArrowDown from './icons/ArrowDown.vue'
import { ref } from 'vue';
const dropDown = ref(false)
</script>