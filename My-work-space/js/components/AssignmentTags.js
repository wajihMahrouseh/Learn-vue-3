export default {
    template: `
        <div class="flex gap-2">
            <button 
                @click="$emit('update:modelValue', tag)"
                v-for="tag in allTags"
                class="border rounded px-1 py-px text-xs"
                :class="{ 'border-blue-500 text-blue-500': tag === modelValue }"
            >
                {{ tag }}
            </button>
        </div>
    `,


    // <button 
    //     @click="$emit('change', tag)"
    //     v-for="tag in allTags"
    //     class="border rounded px-1 py-px text-xs"
    //     :class="{ 'border-blue-500 text-blue-500': tag === currentTag }"
    // >
    //     {{ tag }}
    // </button>

    props: {
        tags: Array,
        modelValue: String // default prop name when we are using v-model, so we can use it instead of currentTag then use @click="$emit('update:modelValue', tag)"
        // currentTag: String,
        // dataTags: Array,
        // initialTags: Array,
    },

    computed: {
        allTags() {
            // return ['1', '2', '3'];
            return ['all', ...new Set(this.tags)];
        }
    }
}
