<template>
  <div class="login_main">
    <HeaderFragment></HeaderFragment>
    <div class="login_body">
      <b-card class="login_card">
        <b-card-body>
          <b-card-title>파트너스(관리자) 로그인</b-card-title>
          <b-form class="login_form">
            <b-form-input class="login_form_control" type="text" placeholder="파트너스(관리자)아이디"/>
            <b-form-input class="login_form_control" type="password" placeholder="파트너스(관리자)비밀번호"/>
            <div class="d-grid gap-2">
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
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import HeaderFragment from "@/components/common/header/HeaderFragment";
export default {
  name: "LoginView",
  components: {HeaderFragment},
  methods: {
    reqLogin() {
      this.$router.push("/profile");
    }
  }
}
</script>

<style scoped>
.login_body >>> .login_card {
  max-width: 500px;
  margin: 20px auto;
}

.login_body >>> .login_card .card-title {
  margin-bottom: 30px;
}

.login_body >>> .login_form {
  text-align: left;
}

.login_body >>> .login_form_control {
  margin-bottom: 20px;
}
.login_body >>> .login_form .login_button {
  min-width: 100px;
  max-width: 200px;
  margin: 0 auto;
}
.login_body >>> .login_form .login_link a {
  margin-left: 10px;
}
</style>