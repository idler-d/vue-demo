<template>
  <div class="nav-bottom">
    <router-link :to="v.path" v-for="(v, i) in items" :key="i">
      <el-icon :size="15"><component :is="v.icon" /></el-icon>
      <span>{{v.title}}</span>
    </router-link>
  </div>
</template>

<script>
  import bottomData from '@/utils/bottomData'
  import {reactive} from 'vue'
  export default {
    setup() {
      let data = reactive({
        items: bottomData
      })
      return data;
    }
    
    
  }
</script>

<style>
</style>
