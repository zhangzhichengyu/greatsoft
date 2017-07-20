<style scoped></style>
<template>
  <div>
    <gs-datagrid width="90%" height="400px" :data-provider="list" :columns="columns" :footers="footers">
      <!-- <template slot="headers">
        <tr style="background-color: #ffffff;">
          <td rowspan="2" style="vertical-align: middle;">#</td>
          <td rowspan="2" style="vertical-align: middle;">全选</td>
          <td colspan="3" style="text-align: center;">=====</td>
        </tr>
        <tr style="background-color: #ffffff;">
          <td>id</td>
          <td>label</td>
          <td>value</td>
        </tr>
      </template> -->
      <template slot="id" scope="data">
        <button class="btn btn-default btn-sm" @click="()=>{$alert(data.item.label)}">edit</button>
      </template>
    </gs-datagrid>
    <br/>
    <p>EasyUI的列表组件</p>
    <easyui-datagrid gridid="grid" grid-height="400px" :data-provider="list">
      <table id="grid" style="height: 500px;">
        <thead>
          <tr>
            <th data-options="{field: 'id', title: 'ID', width: 200}"></th>
            <th data-options="{field: 'label', title: 'Label', width: 200}"></th>
            <th data-options="{field: 'value', title: 'Value', width: 200}"></th>
          </tr>
        </thead>
      </table>
    </easyui-datagrid>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {title: 'ID', field: 'id', width: '100px'}, // 通过render对此列进行自定义
        {title: 'LABEL', field: 'label', width: '300px', format: (value, item) => (item.label + ',' + item.value)}, // 通过format对数据进行格式化
        {title: 'VALUE', field: 'value', width: '300px', align: 'center'} // 通过align设置对齐方式 只支持 left/center/right, 默认为left
      ],
      list: [
        {id: '001', label: 'label-001', value: 'value-001'},
        {id: '002', label: 'label-002', value: 'value-002'},
        {id: '003', label: 'label-003', value: 'value-003'},
        {id: '004', label: 'label-004', value: 'value-004'},
        {id: '005', label: 'label-005', value: 'value-005'},
        {id: '006', label: 'label-006', value: 'value-006'},
        {id: '007', label: 'label-007', value: 'value-007'},
        {id: '008', label: 'label-008', value: 'value-008'}
      ],
      footers: [
        {id: '001', label: 'footer-label-001', value: 'footer-value-001'},
        {id: '002', label: 'footer-label-002', value: 'footer-value-002'}
      ]
    }
  },
  methods: {
    onScroll (event) {
      this.$refs.header.style.top = event.target.scrollTop + 'px'
      this.$refs.leftColumn.style.left = event.target.scrollLeft + 'px'
    }
  },
  ready () {
    // console.log('+++++++++++++++++++++++')
    // let s = new Date().getMilliseconds()
    // let list = []
    // for (let i = 0; i < 10 * 10; i++) {
    //   list.push({id: 'id-' + i, label: 'label-' + i, value: 'value-' + i})
    // }
    // this.list = list
    // let e = new Date().getMilliseconds()
    // console.log(e - s, '------------------')
    // this.$nextTick(function () {
    //   let l = new Date().getMilliseconds()
    //   console.log(l - s, l - e, '###################')
    // })
  }
}
</script>
