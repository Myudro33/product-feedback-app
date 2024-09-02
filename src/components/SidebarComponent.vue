<template>
    <div class="h-4/5 w-72  rounded-xl">
        <div class="h-[30%] w-full rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-5 flex flex-col justify-end">
            <h1 class="text-white text-xl font-bold">Frontend Mentor</h1>
            <p class="text-gray-500 text-base">Feedback board</p>
        </div>
        <div class="rounded-xl mt-4 p-5 flex flex-wrap bg-[#181a1b]">
            <p class="py-2 px-4 bg-[#373839] cursor-pointer rounded-xl m-1" v-for="(items,index) in tags" :key="index">{{ items }}</p>
        </div>
        <div class="h-[30%] w-full rounded-xl bg-[#181a1b] mt-4 p-5 flex flex-col">
            <div class="flex justify-between items-center">
                <h1 class="text-xl text-white">Roadmap</h1>
                <router-link to="/roadmap">View</router-link>
            </div>
            <div class="w-full flex justify-between items-center">
                <div class="flex items-center mt-2">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <h1 class="ml-2 font-bold">Planned</h1>
                </div>
                <h1>2</h1>
            </div>
            <div class="w-full flex justify-between items-center">
                <div class="flex items-center mt-2">
                    <div class="w-3 h-3 rounded-full bg-purple-700"></div>
                    <h1 class="ml-2 font-bold">In-progress</h1>
                </div>
                <h1>3</h1>
            </div>
            <div class="w-full flex justify-between items-center">
                <div class="flex items-center mt-2">
                    <div class="w-3 h-3 rounded-full bg-cyan-600"></div>
                    <h1 class="ml-2 font-bold">Live</h1>
                </div>
                <h1>1</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
const tags = ['All','UI','UX','Feature','Enhancement','Bug']
</script>