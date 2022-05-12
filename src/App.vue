<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@import './assets/css/bootstrap.min.css';
</style>
