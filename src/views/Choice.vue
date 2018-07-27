<template>
    <div>
        <h1>
             {{title}}
        </h1>
        <div class="flex-container">
                <div v-for="selection in selections" :key="selection.id" v-on:click = "select(selection.name)" class="flex-item" id="wrapper">
                <component :is="selection.image" class="image" v-bind:class="{fade: selection.selected}"/>
                <p class="text selected" v-if="selection.selected">Selected.<br/>Click to unselect</p>
                <p class="text" v-else>{{selection.description}}</p>
                </div>
        </div>

        <navigation/>
        
    </div>

    
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { lookup } from '@/models/lookup';
import Selection from '@/models/selection';
import Navigation from '@/components/Navigation.vue';

@Component({
    components: {
        Navigation,
    },
})
export default class LandingPage extends Vue {

    public selections = lookup.feelings.selections;
    public title = 'Loading';
    public genericDescription = '';

    @Watch('$route.params.choice')
    public onChildChanged(val: string, oldVal: string) {
        this.selections = lookup[val].selections;
        this.title = lookup[val].question;
        this.genericDescription = lookup[val].genericDescription;
    }

    public created() {
        this.selections = lookup[this.$route.params.choice].selections;
        this.title = lookup[this.$route.params.choice].question;
        this.genericDescription = lookup[this.$route.params.choice].genericDescription;
    }

    public select(itemSelected: string) {
        const choice = this.selections.find((selection: Selection) => selection.name === itemSelected);
        if (choice) {
            choice.selected = !choice.selected;
        } else {
            throw new ReferenceError(`${itemSelected} not found`);
        }
    }
}
</script>

<style scoped lang="scss">
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        
    }

    .flex-item {
        position: relative;
        flex-grow: 1;
    }

    .image {
        min-width:150px;
        max-width: 400px;
    }

    #wrapper .text {
        position: absolute;
        left: 50%;
        top: 15%;                        
        transform: translate(-50%, -50%);
        opacity: 0;
        font-weight: bolder;
    }

    #wrapper:hover .text {
        transition: opacity 400ms;
        opacity: 1;
    }

    #wrapper:hover .image {
        transition: opacity 400ms;
        opacity: 0.1;
    }

    .fade {
        transition: background-color 400ms;
        background-color: lightgreen;
        border-radius: 50%;
    }

    .selected {
        font-size: 21px;
    }

</style>

