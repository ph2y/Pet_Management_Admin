<template>
  <div class="profile_main">
    <MainHeader/>
    <div class="profile_body">
      <b-card no-body class="profile_card">
        <b-tabs card>
          <b-tab title="매니저(점주) 정보">
            <PartnerProfileForm/>
          </b-tab>
          <b-tab title="점포 정보">
            <ShopProfileForm/>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <MainFooter/>
  </div>
</template>

<script>
import MainHeader from "@/components/common/header/MainHeader";
import ShopProfileForm from "@/components/profile/components/ShopProfileForm";
import PartnerProfileForm from "@/components/profile/components/PartnerProfileForm";
import MainFooter from "@/components/common/footer/MainFooter";

export default {
  name: "ProfileView",
  components: {MainFooter, MainHeader, PartnerProfileForm, ShopProfileForm}
}
</script>

<style scoped>
.profile_body {
  padding: 30px;
}

.profile_body >>> .profile_button {
  margin-bottom: 20px;
}

.profile_card {
  max-width: 1000px;
  margin: 20px auto;
  word-break: keep-all;
}
</style>