<template>
    <div>hello</div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component({})
export default class hello extends Vue {
    private created(): void {
        console.log('hello')
    }
}
</script>