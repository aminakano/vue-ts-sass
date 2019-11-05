<template>
    <div id="nav">
      <div class="nav__container">
        <router-link to="/">Home</router-link> |
        <router-link to="/categories">Categories</router-link> |
        <router-link to="/random">Random</router-link>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    
}
</script>
