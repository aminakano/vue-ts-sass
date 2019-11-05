<template>
  <div class="categories">
    <h3>Select quizzes by categories!</h3>
    <ul class="categories__item">
       <li 
        v-for="(category,x) in categoryIds"
        v-bind:key= "x"
        v-on:click="viewDetails(category)">
        {{category.name}}
      </li> 
    </ul>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
@Component
export default class Categories extends Vue {
categoryIds: any = [];

    mounted(){
      this.generateCategories();
    }
    async generateCategories(){
      const instance = axios.create({
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
      });
      let response = await instance.get('https://opentdb.com/api_category.php');
      this.categoryIds = await response.data.trivia_categories;
    }
    viewDetails(category: any){
      this.$router.push({ path: '/', query: {
        categoryId: category.id
        }
      })
    }
}
</script>