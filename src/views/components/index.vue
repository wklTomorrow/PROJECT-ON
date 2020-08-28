<template>
    <div>hello</div>
</template>
<script lang="ts">
import {Vue, Component, Emit} from 'vue-property-decorator'
import { State, Action, Getter ,Mutation, namespace } from "vuex-class";
import bus from '../../utils/bus'
const someModule = namespace('second')
@Component({})
export default class hello extends Vue {
    @someModule.State(state => state.name) name: any
    @someModule.Action('getName') getName: any
    @someModule.Mutation('setNameValue') setNameValue: any
    private created(): void {
        console.log('hello')
        console.log(this.name)
        this.getName('world')
        console.log(this.name)
        this.setNameValue('tomorrow')
        console.log(this.name)
        this.sendData('')
    }
    @Emit()
    sendData(name: string) {
        console.log(name)
    }
}
</script>