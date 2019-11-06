<template>
  <div class="home">
    <div class="home__btn-area">
      <button v-on:click="toggleSort()" class="home__toggle-btn">{{btnContent}}</button>
    </div>
    <ul class="top-display">
      <div v-if="isLoaded" class="lds-ripple"><div></div><div></div></div>      
        <li v-for="(quiz, x) in quizzes"
            v-bind:key= "x"
            class="top-display__card"
            v-on:click="viewDetails(quiz, categoryIds)">
            <h3>{{decodeHTMLEntities(quiz.question)}}</h3>
            <h4>{{quiz.difficulty}}</h4>
            <p>{{quiz.category}}</p>
        </li>    
    </ul>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator';
import axios from 'axios';


// export function viewDetails(quiz: any, categoryIds: any) {
// return { path: 'details', query: {
//     question: quiz.question,
//     difficulty: quiz.difficulty,
//     category: quiz.category,
//     correct_answer: quiz.correct_answer,
//     incorrect_answers: quiz.incorrect_answers,
//     category_ids: categoryIds
//   }
// }
// }

@Component
export default class Home extends Vue {
  
  quizzes = [];
  categoryIds = [];
  relatedQuestions = [];
  query = "";
  level:any =[];
  sortedData: Array<String> = ["easy","medium","hard"];
  ascending = true;
  btnContent = "To Descending ▼";
  isLoaded:boolean = true;
  
  mounted(){
    this.getQuizzes()
    this.getCategoryIds()
  }
  async getQuizzes(){
    const instance = axios.create({
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    });
    let categoryId = this.$route.query.categoryId;
    let url = 'https://opentdb.com/api.php?amount=10&type=multiple'
    const response = await instance.get(categoryId ? url + `&category=${categoryId}` : url);
   
    this.quizzes = await response.data.results;
    this.customSort(this.quizzes, this.sortedData, {sortField:"difficulty"})
    this.isLoaded = false;
    
  }
  async getCategoryIds(){
    const instance = axios.create({
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    });
    const response = await instance.get('https://opentdb.com/api_category.php');
   
    this.categoryIds = await response.data.trivia_categories;
    console.log(this.categoryIds)
  }

  decodeHTMLEntities(text:any) {
   let textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
  
  viewDetails(quiz: any, categoryIds: any) {
    this.$router.push({ path: 'details', query: {
        question: quiz.question,
        difficulty: quiz.difficulty,
        category: quiz.category,
        correct_answer: quiz.correct_answer,
        incorrect_answers: quiz.incorrect_answers,
        category_ids: categoryIds
      }
    })
  }
 
  customSort(data:any, sortBy:any, sortField:any, ascending:boolean=true) {
    const sortByObject = sortBy.reduce((obj:any, item:any, index:number) => {
      return {
        ...obj,
        [item]: index
      }
    }, {})

    let result = data.sort((a:any, b:any) => {
      if (sortByObject[a.difficulty] > sortByObject[b.difficulty]) {
        return 1;
      }
      if (sortByObject[a.difficulty] < sortByObject[b.difficulty]) {
        return -1;
      }
      return 0;
    })
    if (ascending === false) { result = result.reverse() }
    return result;
  }

  toggleSort(){
    if(this.ascending){
    this.customSort(this.quizzes, this.sortedData, {sortField:"difficulty"},this.ascending=false)
    return this.btnContent = "to Ascending　▲";
    }
    else {
      this.customSort(this.quizzes, this.sortedData, {sortField:"difficulty"},this.ascending=true)
    return this.btnContent = "to Descending　▼";
    }
  }   
}
</script>