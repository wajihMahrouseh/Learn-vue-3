<script>
import { ref, watch } from "vue"

let food = ref(localStorage.getItem('food'));
let age = ref(localStorage.getItem('age'));

watch(food, (val) => {
    write('food', val)
});

watch(age, (val) => {
    write('age', val)
});

function write(key, val) {
    localStorage.setItem(key, val);
}
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
