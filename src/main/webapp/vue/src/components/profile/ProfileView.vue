<template>
  <div class="profile_main">
    <HeaderFragment/>
    <div class="profile_body">
      <ShopProfileCard/>
      <PartnerProfileCard/>
    </div>
  </div>
</template>

<script>
import HeaderFragment from "@/components/common/header/HeaderFragment";
import ShopProfileCard from "@/components/profile/components/ShopProfileCard";
import PartnerProfileCard from "@/components/profile/components/PartnerProfileCard";
export default {
  name: "ProfileView",
  components: {HeaderFragment, PartnerProfileCard, ShopProfileCard}
}
</script>

<style scoped>
.profile_body {
  padding: 30px;
}

.profile_body >>> .place_profile_card {
  max-width: 1000px;
  margin: 20px auto;
}

.profile_body >>> .place_profile_form {
  text-align: left;
}
</style>