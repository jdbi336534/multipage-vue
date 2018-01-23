<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/cpage">跳转到第一个页面子路由</router-link>
      </li>
      <li>
        <a
          href="second.html"
        >
         第二个页面
        </a>
      </li>
      <li>
        <a
          href="third.html"
        >
          第三个页面
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FirstHelloWorld',
  data () {
    return {
      msg: '这是一个带路由的多页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
