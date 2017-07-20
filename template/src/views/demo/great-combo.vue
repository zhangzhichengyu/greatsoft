<style scoped>
hr {
  height: 1px;
  background-color: #888888;
}
</style>
<template>
  <div style="padding: 10px;">
    <p>普通下拉框</p>
    <gs-combobox label-field="text" value-field="code" style="width: 200px;"
      :options="listData" v-model="comboboxCode" @changed="(item) => {comboboxItem = item}">
    </gs-combobox>
    <br/>
    <p>过滤下拉框,隐藏箭头</p>
    <gs-combobox label-field="text" value-field="code" style="width: 200px;"
      search-field="text,code" :show-caret="false"
      :options="listData" v-model="comboboxCode" @changed="(item) => {comboboxItem = item}">
    </gs-combobox>
    <br/>
    <p>向上拉</p>
    <gs-combobox label-field="text" value-field="code" style="width: 200px;"
      :offset="-205"
      :options="listData" v-model="comboboxCode" @changed="(item) => {comboboxItem = item}">
    </gs-combobox>
    <hr/>
    <p>普通日期组件</p>
    <gs-datepicker style="width: 150px;" input-class="form-control" v-model="datepickerValue"></gs-datepicker>
    <br/><br/>
    <br/><br/>
    <p>上拉日期组件，且限制选择范围({{today}}之后的日期)</p>
    <gs-datepicker style="width: 150px;" input-class="form-control" v-model="datepickerValue"
      :min="today" :offset="-220"
    ></gs-datepicker>
    <br/><br/>
  </div>
</template>
<script>
export default {
  data () {
    let now = new Date()
    let today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
    return {
      comboboxCode: '003',
      comboboxItem: null,
      listData: [
        {'code': '001', 'text': 'text001'},
        {'code': '002', 'text': 'text002'},
        {'code': '003', 'text': 'text003'},
        {'code': '004', 'text': 'text004'},
        {'code': '005', 'text': 'text005'}
      ],
      today: today,
      datepickerValue: today
    }
  }
}
</script>
