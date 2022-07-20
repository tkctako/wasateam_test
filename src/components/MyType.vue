<template>
  <div class="container text-left py-2 mb-4">
    <div class="section-subTitle">您所選擇的樣式為 :</div>
    <div class="section-description"> {{ typeChoose.name }}樣式</div>
    <div v-if="typeChoose.type === 'input'">
      <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <div v-else-if="typeChoose.type === 'select'">
      <select class="custom-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div v-else-if="typeChoose.type === 'radio'">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
        <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'MyType',
  props: ['typeChoose']
}
</script>

<style scoped>
</style>
  