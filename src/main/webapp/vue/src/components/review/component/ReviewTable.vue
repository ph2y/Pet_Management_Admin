<template>
  <div>
    <b-table class="review_table" :items="reviewList" :fields="fields">
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(replyBtn)="">
        <b-button v-b-modal.modal-reply variant="outline-primary" size="sm">답변하기</b-button>
      </template>
      <template #cell(reportBtn)="">
        <b-button v-b-modal.modal-report variant="outline-danger" size="sm">신고하기</b-button>
      </template>
    </b-table>
    <b-modal id="modal-reply" ok-title="작성" cancel-title="취소" title="리뷰 답변">
      <b-form-textarea rows="3" max-rows="5" placeholder="리뷰 답변을 입력하세요 (최대 200자)"></b-form-textarea>
    </b-modal>
    <b-modal id="modal-report" ok-title="신고" ok-variant="danger" cancel-title="취소" title="리뷰 신고">
      <p>
        리뷰를 차단하실 경우 차단한 리뷰 내용과 별점은 신고 즉시 숨겨지며, 리뷰 평균 점수에 반영되지 않습니다.<br/>
        단, 투명한 리뷰 운영을 위하여 다른 고객들은 숨김 처리된 리뷰가 존재함을을 알 수 있으며,
        신고한 고객의 상품 구매 또는 서비스 예약 요청을 집사의노트 플랫폼에서 더 이상 받을 수 없습니다.<br/>
        블랙리스트 처리되므로, 신중하게 고려하여 신고 및 차단 바랍니다.<br/>
        (장래 결제 및 예약 시스템 업데이트시 블랙리스트 기능 적용 예정)
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ReviewTable",
  data() {
    return {
      fields: [
        { key: 'index', label: '순번', sortable: true, thClass: 'review_table_field'},
        { key: 'authorName', label: '작성자', sortable: true, thClass: 'review_table_field'},
        { key: 'rating', label: '별점', sortable: true, thClass: 'review_table_field'},
        { key: 'contents', label: '내용', sortable: false, thClass: 'review_table_field'},
        { key: 'timestamp', label: '작성시각', sortable: true, thClass: 'review_table_field'},
        { key: 'replyBtn', label: '답변하기', sortable: false, thClass: 'review_table_field', tdClass: 'review_table_btn_cell'},
        { key: 'reportBtn', label: '차단하기', sortable: false, thClass: 'review_table_field', tdClass: 'review_table_btn_cell'}
      ],
      reviewList: [
        { id: 1, authorName: "aaaaa", rating: 5.0, contents: "리뷰 내용", timestamp: "2022-04-15"},
        { id: 2, authorName: "NewCentury", rating: 3.0, contents: "이러쿵 저러쿵", timestamp: "2022-04-15" },
        { id: 3, authorName: "bbbbb", rating: 4.0, contents: "Lorem ipsum", timestamp: "2022-04-15" },
        { id: 4, authorName: "박지환", rating: 2.0, contents: "test", timestamp: "2022-04-15" },
        { id: 5, authorName: "iphone13", rating: 3.0, contents: "This is the review content", timestamp: "2022-04-15" },
      ]
    }
  }
}
</script>

<style scoped>
.review_table {
  margin-bottom: 0;
}
.review_table >>> .review_table_field {
  border-top: none;
}
.review_table >>> .review_table_field:nth-child(1) {
  width: 5%;
}
.review_table >>> .review_table_field:nth-child(2) {
  width: 22.5%;
}
.review_table >>> .review_table_field:nth-child(3) {
  width: 5%;
}
.review_table >>> .review_table_field:nth-child(4) {
  width: 55%;
}
.review_table >>> .review_table_field:nth-child(5) {
  width: 12.5%;
}
.review_table >>> .review_table_btn_cell {
  padding: 8px;
}
</style>