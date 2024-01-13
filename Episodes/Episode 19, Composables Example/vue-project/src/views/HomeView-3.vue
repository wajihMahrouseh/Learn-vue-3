<script>
import { useStorage } from "@/composables/useStorage";

let food = useStorage('food');
let age = useStorage('age');

// to keep track for nested object properties use deep watcher
let obj = useStorage('obj', { one: 'one' });

setTimeout(() => {
    obj.value.one = "Changed!";
}, 3000);
</script>

<template>
    <main>
        <p>
            What is your favorite food? <input type="text" v-model="food">
        </p>

        <p>
            How old are you? <input type="text" v-model="age">
        </p>
    </main>
</template>
