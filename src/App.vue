<template>
  <div id="app"> 
     <v-rating :max-rating="5" v-model="rating" :read-only="false"></v-rating> 
  </div>
</template>

<script>
import VRating from "./components/v-rating";

export default {
  name: "App",
  components: {
    VRating
  },

  data() {
    return {
      rating: 2
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
