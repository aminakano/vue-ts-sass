<template>
  <div class="home">
    <HelloWorld msg="Welcome to My App" />

    <h2>This is home page</h2>
    <ul class="top-display">
      <li><img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"></li>
      <li><img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"></li>
      <li><img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"></li>
      <li><img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"></li>
      <li><img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"></li>
      <li><img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"></li>
      <li><img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"></li>
      <li><img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"></li>
      <li><img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"></li>
      <li><img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_2522.jpg"></li>
     
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>