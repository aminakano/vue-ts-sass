<template>
  <div class="details"> 
    <div class="quiz-detail details__for-detail">
      <h2 class="question">
        {{ decodeHTMLEntities(quiz.question) }} 
      </h2>
      <div class="result">
        <p v-if="correct" class="result__positive">Correct!</p>
        <p v-if="incorrect" class="result__negative">Incorrect...</p>
        <div v-if="isLoaded" class="lds-ripple"><div></div><div></div></div>
      </div>

      <div class="labels">
        <p class="labels__label">{{ quiz.category }}</p>
        <p class="labels__label">{{ quiz.difficulty }}</p>
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
        <span class="related-title"> Related questions...</span>
        <div class="related-container">
          <div 
            v-for="(item,x) in relatedQuestions"
            v-bind:key= "x"
            class="related"
            v-on:click="viewDetails(item)">
            {{decodeHTMLEntities(item.question)}}
          </div>
        </div>
        
    </div>  
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import axios from 'axios';
import MyMixin from '@/mixins/index'

@Component

export default class Details extends MyMixin {
  quiz: any;
  multiple: Array<String> = [];
  correct: boolean = false;
  incorrect: boolean = false;
  isLoaded: boolean = true;
  triviaCategories: any;
  relatedQuestions: Array<Object> = [];

  @Watch('$route')
  getData() {
    this.quiz = {
      question: this.$route.query.question,
      difficulty: this.$route.query.difficulty,
      category: this.$route.query.category,
      correct_answer: this.$route.query.correct_answer,
      incorrect_answers: this.$route.query.incorrect_answers,
      category_id: this.$route.query.categoryIds
    };
    this.multiple = this.quiz.incorrect_answers
    this.multiple.push(this.quiz.correct_answer)
    this.arrShuffle(this.multiple)
    this.isLoaded = false;

  }

  mounted() {
    this.getRelatedQuestions();
  }
  created() {
    this.getData(); 
  }

  async getRelatedQuestions() {
    const instance = axios.create({
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    });
    let response = await instance.get('https://opentdb.com/api_category.php');
    let id = response.data.trivia_categories.find((obj: any) => obj.name === this.quiz.category).id;
    
    response = await instance.get(`https://opentdb.com/api.php?amount=4&type=multiple&category=${id}`);

    let data = response.data.results;
    data = data.filter((obj: any) => obj.question !== this.quiz.question).splice(0,3);
   
    this.relatedQuestions = data;
  }

  viewDetails(quiz: any) {
   
      this.$router.push({ path: 'details', query: {
        question: quiz.question,
        difficulty: quiz.difficulty,
        category: quiz.category,
        correct_answer: quiz.correct_answer,
        incorrect_answers: quiz.incorrect_answers,
      }
    })
  }
  
  isCorrect(selected: string) {
      if(selected === this.quiz.correct_answer) {
        this.correct = true
        setTimeout(()=>{ 
          this.correct = false
          },1000);

      } else {
        this.incorrect = true
        setTimeout(()=>{this.incorrect = false}, 500)
      }

  }
}
</script>
