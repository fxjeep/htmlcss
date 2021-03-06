<template>
  <div id="app">
    <div class="icon1">Icon using CSS</div>
    <div class="icontext">Icon in html content &#xe062;</div>
    <div class="test">blue background set in site.scss</div>
    <div class="preclass">red background set in additionaldata in vue.config.js</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Glyphicons;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.icontext {
  font-family: Glyphicons;
}

.icon1:before {
  font-family: Glyphicons;
  content: "\e026";
}
</style>
