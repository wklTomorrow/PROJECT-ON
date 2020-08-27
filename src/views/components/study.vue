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
            times(state: any) {
                return state.indexs.times
            }
        })
    },
    mounted(): void {
        console.log(this.times)
        this.getValue(100)
        console.log(this.times)
    },
    methods: {
        ...mapActions([
            'getValue'
        ])
    }
})
</script>