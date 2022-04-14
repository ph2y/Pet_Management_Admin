<template>
  <b-form class="find_form">
    <b-form-input
        v-on:change="findPasswordInput.username"
        class="find_form_control"
        type="text"
        placeholder="파트너스 ID">
    </b-form-input>
    <b-form-input
        v-on:change="findPasswordInput.name"
        class="find_form_control"
        type="text"
        placeholder="매니저 성함">
    </b-form-input>
    <b-form-input
        v-on:change="findPasswordInput.email"
        class="find_form_control"
        type="text"
        placeholder="매니저 이메일">
    </b-form-input>
    <b-button class="verify_button" size="sm" variant="primary" v-on:click="reqSendVerifyEmail()">
      인증 이메일 발송
    </b-button>
    <b-form-group>
      <b-form-input
          v-on:change="findPasswordInput.code"
          class="find_form_control"
          type="text"
          placeholder="이메일 인증코드">
      </b-form-input>
      <b-form-text>
        남은 시간: {{verifyTimer}}
      </b-form-text>
    </b-form-group>
    <div class="d-grid gap-2">
      <b-button class="find_button" size="sm" variant="primary" v-on:click="reqFindPassword">
        파트너스 PW 재설정
      </b-button>
      <div class="find_link d-flex justify-content-end">
        <a :href="'/auth'">
          로그인
        </a>
        <a :href="'/auth/register'">
          회원가입
        </a>
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  name: "FindPasswordForm",
  data() {
    return {
      findPasswordInput: {
        username: "",
        name: "",
        email: "",
        code: ""
      },
      emailVerifyTimeout: 600
    }
  },
  computed: {
    verifyTimer() {
      return `${this.emailVerifyTimeout / 60}:${this.emailVerifyTimeout % 60}`;
    }
  },
  methods: {
    reqSendVerifyEmail() {

    },
    reqFindPassword() {

    }
  }
}
</script>

<style scoped>

</style>