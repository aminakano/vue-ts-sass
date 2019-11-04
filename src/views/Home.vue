<template>
  <div class="home">
    <ul class="top-display">      
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
import Details from '@/views/Details.vue'

@Component({
  components :{
    Details
  }})
export default class Home extends Vue {
  
  quizzes = [];
  categoryIds = [];
  relatedQuestions = [];
  query = "";
  level:any =[];
  
  mounted(){
    this.getQuizzes()
    this.getCategoryIds()
  }
  async getQuizzes(){
    const instance = axios.create({
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    });
    const response = await instance.get('https://opentdb.com/api.php?amount=10&type=multiple');
   
    this.quizzes = await response.data.results;
    // console.log(this.sortByObject(this.quizzes))
    console.log(this.quizzes)
    const sortBy:Array<String> = ["easy","medium","hard"];
    console.log(this.customSort(this.quizzes,sortBy,{sortField:"difficulty"}))
    
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
  // sortByObject(data:any){
  //   let ordering:any = {};
  //   const sortBy:Array<String> = ["easy","medium","hard"];
  //   for(let i in data){
  //     ordering[sortBy[i]] = i;
  //   }
  //   data.sort( function(a:any, b:any) {
  //   return (ordering[a.difficulty] - ordering[b.difficulty]);
  //   })
  // }


  sortByObject(data:any){

      data.reduce((obj:any,item:any,index:any) => {
        return {
          ...obj,
          [item]:index
        }
      }, {})
  }
  
  customSort(data:any, sortBy:any, sortField:any) {
    const sortByObject = sortBy.reduce((obj:any, item:any, index:number) => {
      return {
        ...obj,
        [item]: index
      }
    }, {})
    return data.sort((a:any, b:any) => sortByObject[a[sortField]] - sortByObject[b[sortField]])
  }
    
}
</script>