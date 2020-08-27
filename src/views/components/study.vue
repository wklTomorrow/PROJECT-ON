<template>
    <div>study{{ status }}</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from 'vuex'
export default Vue.extend({
    data() {
        return {
            status: 'hello'
        }
    },
    created(): void {
        console.log(this.status)
    },
    computed: {
        ...mapState({
            time: state => state,
        })
    },
    mounted(): void {
        console.log(this.time)
    }
})
</script>