<template>
  <div>
    <b-jumbotron class="review_statistic_jumbotron" :header="shopTitle" :lead="shopManager">
      <div class="review_statistic_text">
        <span>최근리뷰수: {{shopReviewCnt}}</span>
        <span>매니저답글수: {{shopReviewReplyCnt}}</span>
      </div>
      <div class="review_statistic_progress_wrapper">
        <b-progress height="30px">
          <b-progress-bar :variant="this.shopRatingAverageColor()" :value="computedShopRatingAverage">
            <span>평균 리뷰 점수: <strong>{{ shopRatingAverage }}</strong></span>
          </b-progress-bar>
        </b-progress>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  data() {
    return {
      shopTitle: "점포 상호명",
      shopManager: "점주명",
      shopReviewCnt: 0,
      shopReviewReplyCnt: 0,
      shopRatingAverage: 3.25,
    }
  },
  computed: {
    computedShopRatingAverage() {
      return (this.shopRatingAverage / 5.0) * 100;
    }
  },
  methods: {
    shopRatingAverageColor() {
      if (this.shopRatingAverage < 2.0) {
        return "danger";
      } else if (this.shopRatingAverage < 3.0) {
        return "warning";
      } else {
        return "success"
      }
    }
  }
}
</script>

<style scoped>
.review_statistic_jumbotron {
  text-align: center;
  margin-bottom: 0;
  padding: 50px 20px 20px;
}
.review_statistic_text > span {
  margin: 0 10px;
}
.review_statistic_progress_wrapper {
  margin-top: 20px;
  border: 1px solid #2c3e50;
  border-radius: 6px;
}
</style>