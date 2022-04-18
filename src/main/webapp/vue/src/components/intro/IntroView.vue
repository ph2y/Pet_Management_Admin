<template>
  <div class="intro_main">
    <IntroHeader></IntroHeader>
    <b-jumbotron class="intro_jumbotron" header="집사의 노트" lead="반려동물 1000만 시대!">
      <p>반려동물 종합 플랫폼 '집사의 노트'</p>
      <b-button
          class="intro_jumbotron_button"
          variant="primary"
          href="https://play.google.com/store/apps/details?id=com.sju18001.petmanagement"
          target="_blank"
          rel="noopener noreferrer"
      >
        Android 다운로드 (베타)
      </b-button>
      <b-button class="intro_jumbotron_button" variant="primary" disabled href="#">iOS 다운로드 (서비스 예정)</b-button>
    </b-jumbotron>
    <div class="row intro_card_wrapper">
      <b-carousel class="col-sm intro_card" indicators :interval="2000">
        <b-carousel-slide class="intro_card_image" img-src="/intro/graphic1.png"/>
        <b-carousel-slide class="intro_card_image" img-src="/intro/graphic2.png"/>
        <b-carousel-slide class="intro_card_image" img-src="/intro/graphic3.png"/>
        <b-carousel-slide class="intro_card_image" img-src="/intro/graphic4.png"/>
        <b-carousel-slide class="intro_card_image" img-src="/intro/graphic5.png"/>
      </b-carousel>
      <b-carousel class="col-sm intro_card" indicators :interval="2000">
        <b-carousel-slide class="intro_card_image" img-src="/intro/graphic_main.png"/>
        <b-carousel-slide class="intro_card_image" img-src="/intro/graphic_main2.png"/>
      </b-carousel>
    </div>
    <MainFooter/>
  </div>
</template>

<script>
import IntroHeader from "@/components/common/header/IntroHeader";
import MainFooter from "@/components/common/footer/MainFooter";

export default {
  name: "IntroView",
  components: {MainFooter, IntroHeader},
  data() {
    return {
      introSlide: 0,
    }
  }
}
</script>

<style scoped>
.intro_jumbotron {
  margin-bottom: 0;
}
.intro_jumbotron_button {
  margin-top: 10px;
  margin-right: 10px;
}
.intro_card_wrapper {
  max-width: 1080px;
  min-width: 340px;
  margin: 0 auto;
  justify-content: center;
}
.intro_card {
  min-width: 300px;
  max-width: 500px;
  margin: 20px;
  padding: 0;
}
</style>