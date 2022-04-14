<template>
  <b-form class="find_form">
    <b-form-input
        v-on:change="findUsernameInput.name"
        class="find_form_control"
        type="text"
        placeholder="매니저 성함">
    </b-form-input>
    <b-form-input
        v-on:change="findUsernameInput.email"
        class="find_form_control"
        type="text"
        placeholder="매니저 이메일">
    </b-form-input>
    <div class="d-grid gap-2">
      <b-button class="find_button" size="sm" variant="primary" v-on:click="reqFindUsername()">
        파트너스 ID 찾기
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
  name: "FindUsernameForm",
  data() {
    return {
      findUsernameInput: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    reqFindUsername() {

    }
  }
}
</script>

<style scoped>

</style>