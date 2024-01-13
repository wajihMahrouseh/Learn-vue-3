<script>
import TheWelcome from '../components/TheWelcome.vue'

export default {
    components: { TheWelcome },

    data() {
        return {
            message: 'Hello World!',
        };
    },

    mounted() {
        alert("I have been mounted");
    }
}
</script>

<template>
    <main>
        <TheWelcome />

        <p>{{ message }}</p>
    </main>
</template>
