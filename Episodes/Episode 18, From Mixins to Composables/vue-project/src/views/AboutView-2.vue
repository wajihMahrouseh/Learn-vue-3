<script>
import { useFlash } from "@/composables/useFlash"

export default {
    setup() {
        let { flash } = useFlash();

        return { flash };
    }

}
</script>

<template>
    <main>
        <p>
            <button @click="flash('success', 'it works on about page!')">Click Me</button>
        </p>
    </main>
</template>
