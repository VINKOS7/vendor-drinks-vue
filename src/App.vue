<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div :class="$style.App">
    <RouterView />
  </div>
</template>
<!-- 
    <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/" >Home</RouterLink>
        <RouterLink to="/hello" >Hello</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

 -->
<style lang="scss" module>
  .App {
    text-align: center;
  }
</style>
