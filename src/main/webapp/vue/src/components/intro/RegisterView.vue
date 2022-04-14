<template>
  <div class="register_main">
    <HeaderFragment></HeaderFragment>
    <div class="register_body">
      <b-card class="register_card">
        <b-card-body>
          <b-card-title>파트너스 입점신청</b-card-title>
          <b-form class="register_form">
            <div class="row mb-3">
              <b-form-group class="col">
                <label for="partner_username">아이디</label>
                <b-form-input id="partner_username" type="text" placeholder="사용하실 아이디를 입력하세요" />
                <b-form-text class="text-muted">
                  [집사의노트] 파트너스 관리자 페이지 로그인시 사용할 아이디를 입력하세요
                </b-form-text>
              </b-form-group>
              <b-form-group class="col">
                <label for="partner_password">비밀번호</label>
                <b-form-input id="partner_password" type="password" placeholder="사용하실 비밀번호를 입력하세요" />
                <b-form-text class="text-muted">
                  [집사의노트] 파트너스 관리자 페이지 로그인시 사용할 비밀번호를 입력하세요
                </b-form-text>
              </b-form-group>
            </div>
            <div class="row mb-3">
              <b-form-group class="col">
                <label for="partner_email">이메일 주소</label>
                <b-form-input id="partner_email" type="text" placeholder="매니저의 이메일 주소를 입력하세요" />
                <b-form-text class="text-muted">
                  [집사의노트] 서비스 제공을 위해 수집되며, 일반 고객에게 공개되지 않습니다<br/>
                </b-form-text>
              </b-form-group>
              <b-form-group class="col">
                <label for="partner_password_check">비밀번호 확인</label>
                <b-form-input id="partner_password_check" type="text" placeholder="사용하실 비밀번호를 다시 한 번 입력하세요" />
                <b-form-text class="text-muted">
                  [집사의노트] 파트너스 관리자 페이지 로그인시 사용할 비밀번호를 입력하세요
                </b-form-text>
              </b-form-group>
            </div>
            <div class="row mb-3">
              <b-form-group class="col">
                <label for="partner_name">매니저 성함</label>
                <b-form-input id="partner_name" type="text" placeholder="점주 성함을 입력하세요" />
                <b-form-text class="text-muted">
                  [집사의노트] 서비스 제공을 위해 수집되며, 일반 고객에게 공개되지 않습니다
                </b-form-text>
              </b-form-group>
              <b-form-group class="col">
                <label for="partner_phone">매니저 연락처</label>
                <b-form-input id="partner_phone" type="text" placeholder="매니저의 휴대전화번호를 입력하세요" />
                <b-form-text>
                  점주 전화번호는 서비스 제공을 위해 수집되며, 일반 고객에게 공개되지 않습니다<br/>
                  공개 연락처는 "점포 전화번호" 란에 입력해주세요
                </b-form-text>
              </b-form-group>
            </div>
            <div class="row mb-3">
              <b-form-group class="col">
                <label for="place_type">업종</label>
                <b-form-select id="place_type" v-model="selectedPlaceType" :options="placeType">
                </b-form-select>
              </b-form-group>
              <b-form-group class="col">
                <label for="shop_phone">점포 연락처</label>
                <b-form-input id="shop_phone" type="text" placeholder="점포 전화번호(공개할 연락처)를 입력하세요" />
                <b-form-checkbox>매니저 연락처와 동일 전화번호 사용</b-form-checkbox>
                <b-form-text>
                  일반 고객에게 공개되는 연락처입니다<br/>
                  매니저 연락처와 동일한 연락처도 입력할 수 있습니다
                </b-form-text>
              </b-form-group>
            </div>
            <b-form-group class="mb-3" controlId="formBasicEmail">
              <label for="place_address">소재지</label>
              <b-form-input id="place_address" label="소재지" type="text" placeholder="점포 주소를 입력하세요" />
              <b-form-text class="text-muted">
                유효한 도로명 주소로 입력하세요
              </b-form-text>
            </b-form-group>
            <b-form-group class="mb-3" controlId="formBasicEmail">
              <label for="place_description">점포 설명</label>
              <b-form-input id="place_description" type="text" placeholder="점포 설명을 입력하세요" />
              <b-form-text class="text-muted">
                200자 이내로 입력하세요
              </b-form-text>
            </b-form-group>
            <div class="row">
              <b-form-group class="col mb-3" controlId="formBasicEmail">
                <label >영업 요일</label>
                <b-form-checkbox
                    v-model="selectedPlaceOperationDay"
                    v-for="(day, index) in placeOperationDay"
                    :key="index"
                    :value="day"
                >{{ day }}</b-form-checkbox>
              </b-form-group>
              <b-form-group class="col mb-3" controlId="formBasicEmail">
                <label for="place_operation_hour">영업 시간</label>
                <b-form-input id="place_operation_hour" type="text" placeholder="점포의 운영 시간을 입력하세요" />
              </b-form-group>
            </div>
            <b-alert variant="primary" show>
              회원가입 및 입점신청을 하시면 집사의노트 개발팀(Ph2y Dev)에서 검토 후 결과를 이메일과 전화번호로 통지해 드립니다<br/>
              회원가입 및 입점 승인 이후 관리자 페이지 로그인을 통해 서비스 사용이 가능합니다
            </b-alert>
            <b-button class="float-end" variant="primary" type="submit">
              회원가입 및 입점신청
            </b-button>
          </b-form>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import HeaderFragment from "@/components/common/header/HeaderFragment";
import {ref} from "vue";

export default {
  name: "RegisterView",
  components: {HeaderFragment},
  data() {
    return {
      partnerProfile: {
        username: "",
        password: "",
        email: "",
        name: "",
        phone: ""
      },
      shopProfile: {
        name: "",
        type: "",
        address: "",
        phone: "",
        description: "",
        operationDay: [],
        operationHour: ""
      },
      selectedPlaceType: null,
      placeType: [
        { value: null, text: "=== 업종을 선택하세요 ==="},
        { value: 0, text: "동물병원" },
        { value: 1, text: "펫샵" },
        { value: 2, text: "애견호텔" },
      ],
      selectedPlaceOperationDay: ref([]),
      placeOperationDay: ["월", "화", "수", "목", "금", "토", "일", "법정공휴일"]
    }
  },
  computed: {
    concatSelectedPlaceOperationDay() {
      return this.selectedPlaceType.value.join(', ');
    }
  }
}
</script>

<style scoped>
.register_body >>> .register_card {
  max-width: 1000px;
  margin: 20px auto;
}

.register_body >>> .register_form {
  text-align: left;
}

#partner_phone {
  margin-bottom: 10px;
}
</style>