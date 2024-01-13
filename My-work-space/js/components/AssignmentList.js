import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },

    template: `
        <section v-if="assignments.length" class="w-60 bg-gray-700 p-4 border border-gray-400 rounded-lg">
        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
        </div>
            
            <assignment-tags
                v-model="currentTag"
                :tags="assignments.map(a => a.tag)" 
            />

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
            </ul>

            <slot></slot>
        </section>
    `,

    // <assignment-tags
    //     :tags="assignments.map(a => a.tag)" 
    //     :current-tag="currentTag"
    //     @change="currentTag = $event"
    // />

    // <assignment-tags
    //      v-model="currentTag"
    //      v-model:currentTag="currentTag"
    //     :tags="assignments.map(a => a.tag)" 
    // />

    // <assignment-tags :data-tags="assignments.map(a => a.tag)" />
    // <assignment-tags :initial-tags="assignments.map(a => a.tag)" />

    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            currentTag: 'all',
        }
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },
    }
}
