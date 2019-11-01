<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to My App" /> -->
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
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { Vue, Component, Prop } from 'vue-property-decorator';
import axios from 'axios';
import Details from '@/views/Details.vue'
// export default {
//   name: "home",
//   components: {
//     HelloWorld
//   }
// }
@Component({
  components :{
    Details
  }})
export default class Home extends Vue {
  // @Prop() quiz;
  
  quizzes = [];
  categoryIds = [];
  relatedQuestions = [];
  query = "";
  // level =[];
  
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
    // this.quizzes.forEach(val=> this.level.push(val.difficulty))
     console.log(this.quizzes)
    // console.log(this.level)
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
  

  
  }
</script>