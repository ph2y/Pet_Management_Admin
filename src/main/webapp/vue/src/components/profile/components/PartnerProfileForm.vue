<template>
  <b-form class="place_profile_form">
    <div class="row mb-3">
      <b-form-group class="col-sm">
        <label for="partner_name">매니저 성함</label>
        <b-form-input id="partner_name" type="text" placeholder="점주 또는 매니저의 성함을 입력하세요" />
        <b-form-text class="text-muted">
          [집사의노트] 서비스 제공을 위해 수집되며, 일반 고객에게 공개되지 않습니다
        </b-form-text>
      </b-form-group>
      <b-form-group class="col-sm">
        <label for="partner_phone">전화번호</label>
        <b-form-input id="partner_phone" type="text" placeholder="점주 또는 매니저의 휴대전화번호를 입력하세요" />
        <b-form-text>
          [집사의노트] 서비스 제공을 위해 수집되며, 일반 고객에게 공개되지 않습니다<br/>
          공개 연락처는 "점포정보" 화면의 전화번호 란에 입력해주세요<br/>
          공개 연락처와 동일한 연락처도 입력할 수 있습니다
        </b-form-text>
      </b-form-group>
    </div>
    <div class="row mb-3">
      <b-form-group class="col-sm">
        <label for="partner_email">이메일 주소</label>
        <b-form-input id="partner_email" type="text" placeholder="점주 또는 매니저의 이메일 주소를 입력하세요" />
        <b-form-text class="text-muted">
          [집사의노트] 서비스 제공을 위해 수집되며, 일반 고객에게 공개되지 않습니다<br/>
          공개 이메일은 "점포정보" 화면의 점포 설명란에 입력해주세요<br/>
          공개 이메일과 동일한 연락처도 입력할 수 있습니다
        </b-form-text>
      </b-form-group>
      <b-form-group class="col-sm">
        <label for="partner_timestamp">가입 일자</label>
        <b-form-input id="partner_timestamp" type="text" disabled />
        <b-form-text class="text-muted">
          최초 가입 일자이며, 탈퇴후 재가입시 재가입한 일자가 표시됩니다
        </b-form-text>
      </b-form-group>
    </div>
    <b-button class="btn-block-xs-only float-left profile_button" variant="outline-danger" type="submit">
      회원 탈퇴
    </b-button>
    <b-button class="btn-sm-block float-right profile_button" variant="primary" type="submit">
      정보 저장
    </b-button>

  </b-form>
</template>

<script>
export default {
  name: "PartnerProfileForm"
}
</script>

<style scoped>

</style>