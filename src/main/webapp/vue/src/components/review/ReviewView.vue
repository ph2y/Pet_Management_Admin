<template>
  <div class="review_main">
    <MainHeader></MainHeader>
    <div class="review_body">
      <b-card no-body class="review_card">
        <b-tabs card>
          <b-tab title="리뷰 통계"></b-tab>
          <b-tab title="리뷰 목록">
            <b-table :items="reviewList" :fields="fields"></b-table>
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

export default {
  name: "ReviewView",
  components: {MainHeader, MainFooter},
  data() {
    return {
      fields: ['순번', '작성자', '평점', '내용','작성시각', '답변하기', '숨기기', '신고하기'],
      reviewList: [
        { id: 1, authorName: "", rating: 5.0, contents: "", timestamp: "2022-04-15" },
        { id: 1, authorName: "", rating: 5.0, contents: "", timestamp: "2022-04-15" },
        { id: 1, authorName: "", rating: 5.0, contents: "", timestamp: "2022-04-15" },
        { id: 1, authorName: "", rating: 5.0, contents: "", timestamp: "2022-04-15" },
        { id: 1, authorName: "", rating: 5.0, contents: "", timestamp: "2022-04-15" },
      ]
    }
  }
}
</script>

<style scoped>
.review_body {
  padding: 30px;
}
.review_body >>> .review_card {
  max-width: 1000px;
  margin: 20px auto;
  word-break: keep-all;
}

.review_body >>> .review_form_control {
  margin-bottom: 20px;
}
</style>