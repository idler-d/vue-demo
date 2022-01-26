<template>
  <div id="app">
    <router-view />
    <NavBottom />
  </div>
</template>

<script>
  import NavBottom from './views/NavBottom';
  import {
    reactive,
    ref,
    toRefs,
    computed
  } from 'vue';
  
  
  export default {
    setup() {
     
    },
    components: {NavBottom}
  }
</script>
<style>
  @import url("assets/css/index.css");
</style>
