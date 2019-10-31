<template>
  <div class="random">
    <h1>This is a random page</h1>
    <div>
      <h2 class="question">
        {{decodeHTMLEntities(quiz.question)}} 
      </h2>
      <div class="labels">
        <span class="labels__label">{{quiz.category}}</span>
        <span class="labels__label">{{quiz.difficulty}}</span>
      </div>
      <div class="multiples">
          <div 
            v-for="choice in multiple"
            v-bind:key = "choice">
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
    quiz: object = []
    multiple:object = [];

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
    // this.multiple = this.quiz.incorrect_answers;
    this.arrShuffle(this.multiple);
    console.log(this.quiz.correct_answer);
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
}
</script>