const app = new Vue({
	// el :"#app"でhtml要素を指定している
  el: '#app',
  // おなじみdata関数
  data() {
    return {
      text: 'hello'
    };
  }
});

// appのtext要素を文字列で書き換えている。
app.text = 'goodbye';