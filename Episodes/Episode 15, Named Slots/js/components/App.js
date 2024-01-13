import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: { Assignments, Panel },

    template: `
        <assignments></assignments>


        <panel>
            <template>
                this is the default content.
            </template>
        </panel>


        <panel>
            <template v-slot=heading>
                this is the heading content.
            </template>
            
            this is the default content.
        </panel>


        <panel>
            <template v-slot=heading>
                this is the heading content.
            </template>
            
            this is the default content.

            <template v-slot=footer>
                this is the footer content.
            </template>
        </panel>


        <panel theme="light">
            <template #heading>
                this is the heading content.
            </template>
            
            this is the default content.

            <template #footer>
                this is the footer content.
            </template>
        </panel>
    `,
}
