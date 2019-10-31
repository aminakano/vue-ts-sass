<template>
  <div class="random">
    <!-- <h1>This is a random page</h1> -->
    <div>
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Random extends Vue {
    quiz: object = [];
    multiple: object = [];
    correct: boolean = false;
    incorrect: boolean = false;
    isLoaded: boolean = true;

  mounted(){
    this.getQuizzes()
    
  }
  async getQuizzes(){
    const instance = axios.create({
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    });
    const response = await instance.get('https://opentdb.com/api.php?amount=1&type=multiple');
    this.quiz = await response.data.results[0]
    this.multiple = this.quiz.incorrect_answers;
    this.multiple.push(this.quiz.correct_answer);
    this.arrShuffle(this.multiple);
    this.isLoaded = false

  }
  decodeHTMLEntities(text:string) {
   let textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
  arrShuffle(item:object){
      let num:number = item.length;
      while(num){
        let i = Math.floor(Math.random()* num);
        let str = item[--num];
        item[num] = item[i];
        item[i] = str;
      }
  }
  isCorrect(selected:string){

      if(selected === this.quiz.correct_answer) {
        this.correct = true
        setTimeout(()=>{ 
          this.getQuizzes()
          this.correct = false
          this.isLoaded =true
          },1000);

      }else {
        this.incorrect = true
        setTimeout(()=>{this.incorrect = false},500)
      }

  }
}
</script>