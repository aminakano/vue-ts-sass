(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c694"],{f2b4:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"random"},[i("div",{staticClass:"quiz-detail"},[i("h2",{staticClass:"question"},[t._v(" "+t._s(t.decodeHTMLEntities(t.quiz.question))+" ")]),i("div",{staticClass:"result"},[t.correct?i("p",{staticClass:"result__positive"},[t._v("Correct!")]):t._e(),t.incorrect?i("p",{staticClass:"result__negative"},[t._v("Incorrect...")]):t._e(),t.isLoaded?i("div",{staticClass:"lds-ripple"},[i("div"),i("div")]):t._e()]),i("div",{staticClass:"labels"},[i("span",{staticClass:"labels__label"},[t._v(t._s(t.quiz.category))]),i("span",{staticClass:"labels__label"},[t._v(t._s(t.quiz.difficulty))])]),i("div",{staticClass:"multiples"},t._l(t.multiple,(function(e){return i("div",{key:e,on:{click:function(i){return t.isCorrect(e)}}},[t._v(" "+t._s(e)+" ")])})),0)]),i("div",{staticClass:"random__btn-area"},[i("button",{on:{click:function(e){return t.getQuizzes()}}},[t._v("Get a new random question!")])])])},a=[],r=(i("96cf"),i("89ba")),n=i("9f12"),c=i("53fe"),u=i("8b83"),l=i("c65a"),o=i("c03e"),d=i("9ab4"),p=i("60a3"),h=i("bc3a"),v=i.n(h),_=i("421b"),f=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.quiz=[],t.multiple=[],t.correct=!1,t.incorrect=!1,t.isLoaded=!0,t}return Object(o["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){this.getQuizzes()}},{key:"getQuizzes",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=v.a.create({headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}),t.next=3,e.get("https://opentdb.com/api.php?amount=1&type=multiple");case 3:return i=t.sent,t.next=6,i.data.results[0];case 6:this.quiz=t.sent,this.multiple=this.quiz.incorrect_answers,this.multiple.push(this.quiz.correct_answer),this.arrShuffle(this.multiple),this.isLoaded=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"isCorrect",value:function(t){var e=this;t===this.quiz.correct_answer?(this.correct=!0,setTimeout((function(){e.getQuizzes(),e.correct=!1,e.isLoaded=!0}),1e3)):(this.incorrect=!0,setTimeout((function(){e.incorrect=!1}),500))}}]),e}(_["a"]);f=d["a"]([p["a"]],f);var b=f,m=b,z=i("2877"),w=Object(z["a"])(m,s,a,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d22c694.0d0f580d.js.map