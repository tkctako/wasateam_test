<template>
  <div class="container px-5">
    <div class="card">
      <div class="text-left mb-0 px-3 py-3">
        <div class="card-title section-subTitle">輸入樣式
        </div>
        <div class="mb-2 section-description ">請選擇輸入樣式~</div>
        <select v-model=typeSelect> 
            <option :value=value.type v-for="(value, index) in types" :key="index">{{ value.name }}</option>
        </select>
        <hr>
      </div>
      <MyType :type-choose=typeChoose></MyType>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyType from '@/components/MyType.vue'
export default {
  data() {
    return {
      title: '選擇輸入樣式',
      typeSelect: 'input',
      types: [
        {type: 'input', name: '輸入框'},
        {type: 'radio', name: 'Radio'},
        {type: 'select', name: '選單'}
      ]
    }
  },
  computed:{
    typeChoose: function() {
      const vm = this;
      return vm.types.filter(data => data.type === vm.typeSelect)[0];
    }
  },
  components: {
    MyType
  },
  created() {
    const vm = this;
    vm.$root.title= vm.title;
  }
}
</script>

<style lang="scss">
.card{
  border: 0;
  border-radius: 20px;
}
</style>