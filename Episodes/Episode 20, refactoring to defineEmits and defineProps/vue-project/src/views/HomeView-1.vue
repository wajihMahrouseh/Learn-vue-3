<script setup>
import { ref, onMounted } from "vue";

let textarea = ref(null);

console.log(textarea); // before mounted

onMounted(() => {
    console.log(textarea.value); // element
    console.log(textarea.value.value); // value

    textarea.value.addEventListener("keydown", (e) => {
        let t = textarea.value;

        // tab was pressed
        if (e.keyCode === 9) {
            // get caret position/selection
            let val = t.value,
                start = t.selectionStart,
                end = t.selectionEnd;

            // set textarea value to: text before caret + tab + text after caret
            t.value = val.substring(0, start) + "\t" + val.substring(end);

            // put caret at right position again
            t.selectionStart = t.selectionEnd = start + 1;

            e.preventDefault();
        }
    })
})


</script>

<template>
    <main>
        <form action="">
            <textarea ref="textarea" style="width: 100%; height: 300px;">
                Hi There
            </textarea>
        </form>
    </main>
</template>
