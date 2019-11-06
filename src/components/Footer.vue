<template>
    <div id="footer">
      <ul class="container">
        <router-link to="/" tag="li">Home</router-link> 
        <router-link to="/categories" tag="li">Categories</router-link> 
        <router-link to="/random" tag="li">Random</router-link>
      </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
    
}
</script>
