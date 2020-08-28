<template>
    <div>
        {{ content }}
        <button @click="onClick">点我</button>
        <button @click="onAnother">另一种</button>
    </div>
</template>
<script lang="ts">
import menu from '../utils/menu';
import { Vue, Component } from 'vue-property-decorator'
import bus from '../utils/bus'
// import { mapState, mapActions, mapMutations } from 'vuex'

@Component({
})
export default class index extends Vue {
    content: object[] = []
    get indexs() {
        return this.$store.state.indexs.times
    }
    private created(): void {
        console.log(this.content)
        console.log(this.indexs)
        this.$store.dispatch('getValue', 10)
        bus.$on('sendData', (e: string) => {
            console.log(e)
        })
    }
    private mounted(): void {
        this.content = menu.menu
        console.log(this.content, 'mounted')
        console.log(this.indexs)
        this.$store.commit('setTimesValue', 100)
        console.log(this.indexs)
    }
    public onClick(): void {
        this.$router.push({name: 'homePageHello'})
    }
    public onAnother(): void {
        this.$router.push({name: 'study' })
    }
}
</script>
<style></style>