<template>
    <div class="post-card">
        <h3>Tarjeta</h3>
        <p>Esta es mi tarjeta</p>
        <PostButton/>
    </div>
    
</template>

<script setup>
import PostButton from './PostButton.vue';
</script>

<style scoped>
   .post-card {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
    }
    h3 {
        margin-bottom: 5px;
    }
    p {
        margin-bottom: 10px;
    }
    /* Add your styles here */
    /* Example: */
    .post-card:hover {
        background-color: #f1f1f1;
    }
</style>