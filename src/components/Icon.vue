<template>
  <div>
      <el-icon :size="size" :color="color">
        <edit></edit>
      </el-icon>
    </div>
</template>

<script>
  export default {
    props: {
      size: Number,
      color: String
    }
  }
</script>

<style>
</style>
