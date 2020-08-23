<template>
  <div class="categories">
    <h3>Select quizzes by categories!</h3>
    <div v-if="isLoaded" class="lds-ripple">
      <div></div>
      <div></div>
    </div>
    <ul class="categories__item">
      <li
        v-for="(category, x) in categoryIds"
        v-bind:key="x"
        v-on:click="viewDetails(category)">
        <span class="genre">{{ addCategory(category.name)}}</span>
        <span>{{ adjustTextSize(category.name)}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios from "axios";
import MyMixin from "@/mixins/index";

@Component
export default class Categories extends MyMixin {
  categoryIds: any = [];
  isLoaded: boolean = true;

  mounted() {
    this.generateCategories();
  }
  async generateCategories() {
    const instance = axios.create({
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
    let response = await instance.get("https://opentdb.com/api_category.php");
    this.categoryIds = await response.data.trivia_categories;
    this.isLoaded = false;
  }
  viewDetails(category: any) {
    this.$router.push({
      path: "/",
      query: {
        categoryId: category.id
      }
    });
  }
}
</script>
