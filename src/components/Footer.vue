<template>
    <div id="footer">
      <ul class="container">
        <router-link to="/" tag="li">Home</router-link> 
        <router-link to="/categories" tag="li">Categories</router-link> 
        <router-link to="/random" tag="li">Random</router-link>
      </ul>
      <div class="media-icons">
        <a href="https://www.linkedin.com/in/aminakano/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/aminakano" target="_blank"><i class="fab fa-github"></i></a>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
    
}
</script>
