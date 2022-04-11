<template>
  <b-card title="점포 정보" class="place_profile_card">
    <b-form class="place_profile_form">
      <div class="row mb-3">
        <b-form-group class="col">
          <label>상호명</label>
          <b-form-input id="place_name" type="text" placeholder="상호명을 입력하세요" />
          <b-form-text class="text-muted">
            5자 이상 20자 이하로 입력 가능합니다
          </b-form-text>
        </b-form-group>
        <b-form-group class="col">
          <label for="place_type">업종</label>
          <b-form-select id="place_type" v-model="selectedPlaceType" :options="placeType">
          </b-form-select>
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
      <b-form-group class="mb-3" controlId="formBasicEmail">
        <label >영업 요일</label>
        <b-form-checkbox
            v-model="selectedPlaceOperationDay"
            v-for="(day, index) in placeOperationDay"
            :key="index"
            :value="day"
        >{{ day }}</b-form-checkbox>
      </b-form-group>
      <b-form-group class="mb-3" controlId="formBasicEmail">
        <label for="place_operation_hour">영업 시간</label>
        <b-form-input id="place_operation_hour" type="text" placeholder="점포의 운영 시간을 입력하세요" />
      </b-form-group>
      <b-button class="float-end" variant="primary" type="submit">
        정보 저장
      </b-button>
    </b-form>
  </b-card>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ShopProfileCard",
  data() {
    return {
      shopProfile: {
        name: "",
        type: "",
        address: "",
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

</style>