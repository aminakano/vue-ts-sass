<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to My App" /> -->
    <ul class="top-display">
      <li v-for="quiz in quizzes"
          v-bind:key = "quiz.key">
        <h3>{{decodeHTMLEntities(quiz.question)}}</h3>
        <h4>{{quiz.difficulty}}</h4>
        <p>{{quiz.category}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

// export default {
//   name: "home",
//   components: {
//     HelloWorld
//   }
// }
@Component
export default class Home extends Vue {
  quizzes = [];
  
  mounted(){
    this.getQuizzes()
  }
  async getQuizzes(){
    const instance = axios.create({
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    });
    const response = await instance.get('https://opentdb.com/api.php?amount=10&type=multiple');
    this.quizzes = await response.data.results;
    console.log(this.quizzes)
  }
  decodeHTMLEntities(text) {
   let textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
}

</script>

<style scoped>
li {
  list-style: none;
}
</style>