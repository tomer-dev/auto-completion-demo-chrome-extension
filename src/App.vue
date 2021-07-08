<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <AutoCompleteApp msg="Welcome to Vue.js Chrome extension demo for auto completion" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AutoCompleteApp from "./components/AutoCompleteApp.vue";

export default defineComponent({
  name: "App",
  components: {
    AutoCompleteApp,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
