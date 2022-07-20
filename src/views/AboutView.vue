<template>
  <div class="container">
    <div class="d-flex flex-wrap justify-content-between align-items-stretch">
      <div class="box" v-for="(step, index) in process" :key="index">
        <div>
          <img class="icon" :src="step.img" alt="" >
          <div class="step-title mb-1">{{ step.title }}</div>
          <div class="step-content">
            <div v-for="(data, contentIndex) in step.content" :key="contentIndex">
              {{ data }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      title:'串接列表資料',
      process:'',
    }
  },
  created() {
    const vm = this;
    vm.$root.title= vm.title;
    axios.get("https://mocki.io/v1/c5cc0743-5568-4f24-97ab-9b84d8d38d73").then((response) => {
        vm.process = response.data;
      });
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/all.scss';
.box{
  border: 2px $secondary-color solid;
  border-radius: 20px;
  padding:0 1.5%;
  flex-basis:15%;
   @media (max-width: 992px) {
    padding:0;
    flex-basis:45%;
    margin-bottom: 3rem;
  }
  >div{
    position:relative;
    top:-10%;
  }
}
</style>