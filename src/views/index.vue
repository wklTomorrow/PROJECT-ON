<template>
    <div>
        {{ content }}
        <button @click="onClick">点我</button>
    </div>
</template>
<script lang="ts">
import menu from '../utils/menu';
import { Vue, Component } from 'vue-property-decorator'
// import { mapState, mapActions, mapMutations } from 'vuex'
import { State, Action, Getter ,Mutation } from "vuex-class";

@Component({
})
export default class index extends Vue {
    [x: string]: any;
    content: object[] = []
    get indexs() {
        return this.$store.state.indexs.time
    }
    private created(): void {
        console.log(this.content)
        console.log(this.indexs)
    }
    private mounted(): void {
        this.content = menu.menu
        console.log(this.$store.dispatch('getTime', 10))
        console.log(this.content, 'mounted')
        console.log(this.indexs)
    }
    public onClick(): void {
        this.$router.push({name: 'homePageHello'})
    }
}
</script>
<style></style>