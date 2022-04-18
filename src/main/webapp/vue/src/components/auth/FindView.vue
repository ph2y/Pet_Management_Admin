<template>
  <div class="find_main">
    <IntroHeader></IntroHeader>
    <div class="find_body">
      <b-card no-body class="find_card">
        <b-tabs card>
          <b-tab title="파트너스 ID 찾기" active>
            <FindUsernameForm></FindUsernameForm>
          </b-tab>
          <b-tab title="파트너스 PW 찾기">
            <FindPasswordForm></FindPasswordForm>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import IntroHeader from "@/components/common/header/IntroHeader";
import FindUsernameForm from "@/components/auth/components/FindUsernameForm";
import FindPasswordForm from "@/components/auth/components/FindPasswordForm";

export default {
  name: "FindView",
  components: {FindPasswordForm, FindUsernameForm, IntroHeader},
  data() {
    return {
      selectedTab: "find_username"
    }
  },
  methods: {
    selectTab(tabKey) {
      this.selectedTab = tabKey;
    }
  }
}
</script>

<style scoped>
.find_body >>> .find_card {
  max-width: 500px;
  margin: 20px auto;
  text-align: center;
}

.find_body >>> .find_form_control {
  margin-bottom: 20px;
}

.find_body >>> .find_form .find_button {
  width: 200px;
  margin: 0 auto;
}

.find_body >>> .find_form .verify_button {
  width: 200px;
  margin: 0 auto 50px;
}

.find_body >>> .find_form .find_link a {
  margin-top: 25px;
  margin-left: 10px;
}
</style>