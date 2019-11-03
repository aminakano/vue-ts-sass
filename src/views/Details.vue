<template>
  <div class="details"> 
    <div class="quiz-detail details__for-detail">
      <h2 class="question">
        {{decodeHTMLEntities(quiz.question)}} 
      </h2>
      <div class="result">
        <p v-if="correct" class="result__positive">Correct!</p>
        <p v-if="incorrect" class="result__negative">Incorrect...</p>
        <div v-if="isLoaded" class="lds-ripple"><div></div><div></div></div>
      </div>

      <div class="labels">
        <span class="labels__label">{{quiz.category}}</span>
        <span class="labels__label">{{quiz.difficulty}}</span>
      </div>
      <div class="multiples">
          <div 
            v-for="choice in multiple"
            v-bind:key= "choice"
            v-on:click="isCorrect(choice)">
            {{choice}}
          </div>
      </div>  
    </div>
    <div class="details__related-questions">
        Related questions...
        
          <div 
            v-for="(item,x) in relatedQuestions"
            v-bind:key= "x"
            class="related">
            {{decodeHTMLEntities(item.question)}}
          </div>
        
    </div>  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Details extends Vue {
  quiz: any;
  multiple: Array<String> = [];
  correct: boolean = false;
  incorrect: boolean = false;
  isLoaded: boolean = true;
  triviaCategories: any;
  relatedQuestions: Array<Object> = [];

  mounted(){
    this.getRelatedQuestions();
  }
  async getRelatedQuestions(){
    const instance = axios.create({
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    });
    let response = await instance.get('https://opentdb.com/api_category.php');
    let id = response.data.trivia_categories.find((obj: any) => obj.name === this.quiz.category).id;
    
    response = await instance.get(`https://opentdb.com/api.php?amount=4&type=multiple&category=${id}`);
    let data = response.data.results;
    data = data.filter((obj: any) => obj.question !== this.quiz.question).splice(0,3);
   
    this.relatedQuestions = data;
    console.log(this.relatedQuestions)
  }

  created() {
    this.quiz = {
      question: this.$route.query.question,
      difficulty: this.$route.query.difficulty,
      category: this.$route.query.category,
      correct_answer: this.$route.query.correct_answer,
      incorrect_answers: this.$route.query.incorrect_answers,
    };
    this.multiple = this.quiz.incorrect_answers
    this.multiple.push(this.quiz.correct_answer)
    this.arrShuffle(this.multiple)
    this.isLoaded = false;
  }
  decodeHTMLEntities(text:string) {
   let textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
  arrShuffle(array:any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
  }  
  isCorrect(selected:string){
      if(selected === this.quiz.correct_answer) {
        this.correct = true
        setTimeout(()=>{ 
          this.correct = false
          },1000);

      }else {
        this.incorrect = true
        setTimeout(()=>{this.incorrect = false},500)
      }

  }
}
</script>
