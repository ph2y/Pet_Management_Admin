<template>
  <ProfileView/>
</template>

<script>
import ProfileView from "@/components/profile/ProfileView";

export default {
  name: 'App',
  components: {
    ProfileView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
