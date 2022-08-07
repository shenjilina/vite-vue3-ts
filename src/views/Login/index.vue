<template>
  <div>
    {{ msg }}
  </div>
</template>
<script setup>
import { ref } from "vue";
const msg = ref("这里是登录页");
</script>
<style lang="scss" scoped></style>
