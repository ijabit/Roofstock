<template>
    <div
        class="home grey lighten-2"
        style="height: 100%"
    >
        <v-container>
            <property-manager />
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import PropertyManager from "@/components/PropertyManager.vue";

export default Vue.extend({
    name: "Home",
    components: {
        PropertyManager,
    },
});
</script>
