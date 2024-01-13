<script>
import flash from "@/mixins/flash.js";

export default {
    mixins: [flash]
}
</script>

<template>
    <main>
        <p>
            <button @click="flash('it works on about page!')">Click Me</button>
        </p>
    </main>
</template>
