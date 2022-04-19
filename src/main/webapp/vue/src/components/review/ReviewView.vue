<template>
  <div class="review_main">
    <MainHeader></MainHeader>
    <div class="review_body">
      <b-card no-body class="review_card">
        <b-tabs card>
          <b-tab title="리뷰 통계">
            <ReviewCard/>
          </b-tab>
          <b-tab no-body title="리뷰 목록">
            <ReviewTable/>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <MainFooter/>
  </div>
</template>

<script>
import MainHeader from "@/components/common/header/MainHeader";
import MainFooter from "@/components/common/footer/MainFooter";
import ReviewCard from "@/components/review/component/ReviewCard";
import ReviewTable from "@/components/review/component/ReviewTable";

export default {
  name: "ReviewView",
  components: {ReviewTable, ReviewCard, MainHeader, MainFooter},
}
</script>

<style scoped>
.review_body {
  padding: 30px;
  min-height: calc(100vh - 110px);
}
.review_body >>> .review_card {
  max-width: 1000px;
  margin: 20px auto;
  word-break: keep-all;
}
</style>