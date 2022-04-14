<template>
  <b-nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">집사의 노트 Partners</router-link>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <b-nav-item :href="'/'">서비스 소개</b-nav-item>
          <b-nav-item href="#">파트너스 소개</b-nav-item>
          <b-nav-item href="#">개발팀 소개</b-nav-item>
        </div>
      </div>
      <b-button v-on:click="$router.push('/auth')" variant="outline-light">파트너스(관리자) 로그인</b-button>
    </div>
  </b-nav>
</template>

<script>
export default {
  name: "HeaderFragment.vue"
}
</script>

<style scoped>

</style>