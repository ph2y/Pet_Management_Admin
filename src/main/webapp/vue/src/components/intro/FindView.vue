<template>
  <div class="find_main">
    <HeaderFragment></HeaderFragment>
    <div class="find_body">
      <b-card no-body class="find_card">
        <b-tabs card>
          <b-tab title="파트너스 ID 찾기" active>
            <b-card-body>
              <FindUsernameForm></FindUsernameForm>
            </b-card-body>
          </b-tab>
          <b-tab title="파트너스 PW 찾기">
            <b-card-body>
              <FindPasswordForm></FindPasswordForm>
            </b-card-body>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import HeaderFragment from "@/components/common/header/HeaderFragment";
import FindUsernameForm from "@/components/intro/components/FindUsernameForm";
import FindPasswordForm from "@/components/intro/components/FindPasswordForm";

export default {
  name: "FindView",
  components: {FindPasswordForm, FindUsernameForm, HeaderFragment},
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
}

.find_body >>> .find_form_control {
  margin-bottom: 20px;
}

.find_body >>> .find_form .find_button {
  min-width: 100px;
  max-width: 200px;
  margin: 0 auto;
}

.find_body >>> .find_form .verify_button {
  min-width: 100px;
  max-width: 200px;
  margin: 0 auto 50px;
}

.find_body >>> .find_form .find_link a {
  margin-left: 10px;
}
</style>