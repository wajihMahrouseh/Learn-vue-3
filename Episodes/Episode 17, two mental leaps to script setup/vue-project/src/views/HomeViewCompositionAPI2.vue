<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { onMounted, ref } from "vue"

onMounted(() => {
    alert("I have been mounted");
});

// return any data that should be reactive
let message = ref("Hello, World!");

let doSomeThing = () => {
    alert("do some thing");
};

// 2nd way
// in vite.config.js
// plugins: [
//     vue({
//         reactivityTransform: true,
//     }),
// ],
// let message = $ref("Hello, World!");
// when we want to change the value of message --> message = "Changed!";

setTimeout(() => {
    message.value = "Changed!";
}, 2000);
</script>

<template>
    <main>
        <TheWelcome />

        <p>{{ message }}</p>
        <p>
            <input type="text" v-model="message">
        </p>
        <p>
            <button @click="doSomeThing">Click Me </button>
        </p>
    </main>
</template>
