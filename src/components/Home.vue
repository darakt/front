<template>
    <div id="gome">
        <h1>Home</h1>
        <all-my-channels/>
    </div>
</template>

<script>
import AllMyChannels from './AllMyChannels.vue';
    export default {
        components: { AllMyChannels },
        name: 'Home',
        data() {
        },
        mounted() {
          console.log('it worked');
        },
        methods: {
          login() {
            console.log('home');
          }
        }
    }
</script>

<style scoped>
    #home {
        background-color: #FFFFFF;
        margin: auto;
        padding: 20px;
        display: flex;
    }
</style>