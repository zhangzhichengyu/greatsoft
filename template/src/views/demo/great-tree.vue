<style scoped>
.div-item {
  float: left;
  width: 50%;
}
</style>
<template>
  <div style="padding: 10px;">
    <div class="div-item">
      <p>选中数据项：<span v-text="treeItem"/>====</p>
      <p>选中数据集合项：<span v-text="treeItems"/>===</p>
      <gs-tree tree-width="200px" :open-all="true" :show-check="true"
        :data-provider="treeData" label-field="name" id-field="id"
        v-model="treeItem" :selected-items="treeItems"
        ></gs-tree>
    </div>
    <div class="div-item">
      <p>选中数据项：<span v-text="comboTreeValue"/></p>
      <p>选中数据集合项：<span v-text="comboTreeItem"/></p>
      <gs-combotree style="width: 260px;" label-field="name"  value-field="id"
        :options="treeData" v-model="comboTreeValue"
        @change="(item) => {comboTreeItem = item}"></gs-combotree>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      comboTreeValue: '005',
      comboTreeItem: null,
      treeItem: null,
      treeItems: [],
      treeData: [
        {
          id: '001',
          name: '我的树组件',
          children: [
            {
              id: '002',
              name: '子文件夹 1',
              children: [
                {
                  id: '003',
                  name: '子文件夹 2',
                  children: [
                    { id: '004', name: '叶子节点 1' },
                    { id: '005', name: '叶子节点 2' }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: '006',
          name: 'My Tree',
          children: [
            { id: '007', name: 'hello' },
            { id: '008', name: 'wat' },
            {
              id: '009',
              name: 'child folder1',
              children: [
                {
                  id: '010',
                  name: 'child folder2',
                  children: [
                    { id: '011', name: 'hello2' },
                    { id: '012', name: 'wat2' }
                  ]
                },
                { id: '013', name: 'hello2' },
                { id: '014', name: 'wat2' },
                {
                  id: '015',
                  name: 'child folder3',
                  children: [
                    { id: '016', name: 'hello3' },
                    { id: '017', name: 'wat3' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
