# ts-vue-project

## Overview 

Responsive single-page application to play random quizzes 
Used technology: TypeScript, Vue (VueCLI), SCSS & public API 

## Pages 

Home Page, Detail Page, Categories Page and Random Page 

## Home Page  

It shows 10 random results from API and each item is clickable to show its details and play quizzes. 
It contains a sort button to change its order by difficulty (easy to hard is by default) 

## Details Page  

It is only led by Home Page and shows the question which is clicked at Home Page. Also, it shows three other related questions sharing the same category. 

## Categories Page 

It contains a menu full of categories and each item which is selected there will lead to a page with 10 questions. The page looks the same as Home Page, but all the results are the same category. 

## Random Page 

It shows one random question and if you select the correct answer, it generates a new question automatically. The page also contains a random button, which allows us to generate a new question.  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
