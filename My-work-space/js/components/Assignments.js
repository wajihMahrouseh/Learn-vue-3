import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress Assignments">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <div
            v-if="showCompleted"
            >
                <assignment-list
                :assignments="filters.completed"
                title="Completed Assignments"
                can-toggle
                @toggle="showCompleted = !showCompleted"
                >
                </assignment-list>
            </div>
        </section>    
    `,

    data() {
        return {
            assignments: [],
            showCompleted: true,
        };
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },

    created() {
        // axios
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(data => {
                this.assignments = data;
            });
    },

    methods: {
        add(name) {
            // e.preventDefault();
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false,
            });
        }
    }
}
