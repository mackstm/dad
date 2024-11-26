<template>
    <div class="post-container">
        <h2>Container</h2>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>
</template>

<script setup>
    import PostCard from './PostCard.vue';
</script>

<style scoped>
   .post-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 10px;
    }
</style>