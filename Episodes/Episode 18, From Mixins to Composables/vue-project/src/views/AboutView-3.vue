<script setup>
import { useFlash } from "@/composables/useFlash"

let { flash } = useFlash();
</script>

<template>
    <main>
        <p>
            <button @click="flash('test', 'it works on about page!')">Click Me</button>
        </p>
    </main>
</template>
