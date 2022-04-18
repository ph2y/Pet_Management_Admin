<template>
  <b-nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/manage/profile" class="navbar-brand">집사의 노트 Partners</router-link>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <b-nav-item :href="'/manage/profile'">프로필</b-nav-item>
          <b-nav-item :href="'/manage/review'">리뷰 관리</b-nav-item>
          <b-nav-item disabled>상품 관리</b-nav-item>
          <b-nav-item disabled>서비스 관리</b-nav-item>
          <b-nav-item disabled>예약 관리</b-nav-item>
          <b-nav-item disabled>매출 정보</b-nav-item>
        </div>
      </div>
      <b-button v-on:click="$router.push('/')" variant="outline-light">로그아웃</b-button>
    </div>
  </b-nav>
</template>

<script>
export default {
name: "MainHeader"
}
</script>

<style scoped>

</style>