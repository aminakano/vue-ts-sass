(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"58c2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"categories"},[a("h3",[e._v("Select quizzes by categories!")]),e.isLoaded?a("div",{staticClass:"lds-ripple"},[a("div"),a("div")]):e._e(),a("ul",{staticClass:"categories__item"},e._l(e.categoryIds,(function(t,n){return a("li",{key:n,on:{click:function(a){return e.viewDetails(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)])},r=[],i=(a("96cf"),a("89ba")),s=a("9f12"),c=a("53fe"),o=a("8b83"),u=a("c65a"),l=a("c03e"),d=a("9ab4"),p=a("60a3"),h=a("bc3a"),v=a.n(h),f=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(o["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.categoryIds=[],e.isLoaded=!0,e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"mounted",value:function(){this.generateCategories()}},{key:"generateCategories",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=v.a.create({headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}),e.next=3,t.get("https://opentdb.com/api_category.php");case 3:return a=e.sent,e.next=6,a.data.trivia_categories;case 6:this.categoryIds=e.sent,this.isLoaded=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"viewDetails",value:function(e){this.$router.push({path:"/",query:{categoryId:e.id}})}}]),t}(p["b"]);f=d["a"]([p["a"]],f);var b=f,g=b,w=a("2877"),y=Object(w["a"])(g,n,r,!1,null,null,null);t["default"]=y.exports}}]);
//# sourceMappingURL=about.95535158.js.map