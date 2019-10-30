<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/categories">Categories</router-link> |
      <router-link to="/random">Random</router-link>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    
}
</script>
