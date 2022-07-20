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
    // const api = 'https://mocki.io/v1/c5cc0743-5568-4f24-97ab-9b84d8d38d73';
    var createCORSRequest = function(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
        // Most browsers.
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        // IE8 & IE9
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        // CORS not supported.
        xhr = null;
      }
      return xhr;
    };
    var url = 'https://mocki.io/v1/c5cc0743-5568-4f24-97ab-9b84d8d38d73';
    var method = 'GET';
    var xhr = createCORSRequest(method, url);
    xhr.onload = function() {
      console.log(xhr.response)
    };
    xhr.onerror = function() {
    };
    const vm = this;
    vm.$root.title= vm.title;
    // axios.get("https://mocki.io/v1/c5cc0743-5568-4f24-97ab-9b84d8d38d73").then((response) => {
    //     console.log(response)
    //     vm.process = response.data;
    //   });
    axios.get("/api/c5cc0743-5568-4f24-97ab-9b84d8d38d73").then((response) => {
        vm.process = response.data;
      });
  }
}
</script>

<style lang="scss" scoped>
.box{
  border: 2px #93ad65 solid;
  border-radius: 20px;
  padding:0 1.5%;
  flex-basis:15%;
   @media (max-width: 767px) {
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