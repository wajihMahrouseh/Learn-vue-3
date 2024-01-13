<script setup>
import tabbableTextarea from '@/components/tabbableTextarea.vue';

let comment = ref('');
</script>

<template>
    <main>
        <form action="">
            <tabbableTextarea v-model="comment" style="width: 100%; height: 300px;"></tabbableTextarea>
        </form>
    </main>
</template>
