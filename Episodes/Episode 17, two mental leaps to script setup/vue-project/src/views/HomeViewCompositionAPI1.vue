<script>
import TheWelcome from '../components/TheWelcome.vue'
import { onMounted, ref } from "vue"

export default {
    components: { TheWelcome },

    setup() {
        onMounted(() => {
            alert("I have been mounted");
        });

        // return any data that should be reactive
        let message = ref("Hello, World!");

        setTimeout(() => {
            message.value = "Changed!";
        }, 2000);

        return {
            message,
        };
    },
}
</script>

<template>
    <main>
        <TheWelcome />

        <p>{{ message }}</p>
        <p>
            <input type="text" v-model="message">
        </p>
    </main>
</template>
