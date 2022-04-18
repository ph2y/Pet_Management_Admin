<template>
  <div class="login_main">
    <IntroHeader></IntroHeader>
    <div class="login_body">
      <b-card class="login_card">
        <b-card-title class="login_card_title">파트너스(관리자) 로그인</b-card-title>
        <b-form class="login_form">
          <b-form-input class="login_form_control" type="text" placeholder="파트너스(관리자)아이디"/>
          <b-form-input class="login_form_control" type="password" placeholder="파트너스(관리자)비밀번호"/>
          <div>
            <b-button v-on:click="reqLogin()" class="login_button" size="sm" variant="primary">
              로그인
            </b-button>
            <div class="login_link d-flex justify-content-end">
              <a :href="'/auth/find'">
                ID/PW 찾기
              </a>
              <a :href="'/auth/register'">
                회원가입
              </a>
            </div>
          </div>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import IntroHeader from "@/components/common/header/IntroHeader";
export default {
  name: "LoginView",
  components: {IntroHeader},
  methods: {
    reqLogin() {
      this.$router.push("/manage/profile");
    }
  }
}
</script>

<style scoped>
.login_body >>> .login_card {
  max-width: 500px;
  margin: 20px auto;
}

.login_body >>> .login_card {
  text-align: center;
}

.login_body >>> .login_card_title {
  margin-bottom: 30px;
}

.login_body >>> .login_form_control {
  margin-bottom: 20px;
}
.login_body >>> .login_form .login_button {
  width: 200px;
  margin: 0 auto;
}
.login_body >>> .login_form .login_link a {
  margin-top: 25px;
  margin-left: 10px;
}
</style>