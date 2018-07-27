<template>
    <div>
            <font-awesome-icon v-on:click="getPreviousPage()" icon="arrow-circle-left" size="5x" style="margin-right:3%"/>
            <router-link to="/">
                <font-awesome-icon icon="home" size="5x"/>
            </router-link>
            <font-awesome-icon v-on:click="getNextPage()" icon="arrow-circle-right" size="5x" style="margin-left:3%"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import {lookup} from '@/models/lookup';
export default class Navigation extends Vue {

    private allPages = Object.keys(lookup);

    public getPreviousPage() {
        const currentIndex = this.allPages.indexOf(this.$route.params.choice);
        this.$router.push(this.allPages[currentIndex - 1] || '/');
    }
    public getNextPage() {
        const currentIndex = this.allPages.indexOf(this.$route.params.choice);
        this.$router.push(this.allPages[currentIndex + 1] || '/');
    }
}

</script>
