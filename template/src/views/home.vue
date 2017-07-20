<style scoped>
.main-header {
  height: 70px;
  padding-left: 10px;
  background-color: #F8F8F8;
  font-size: 30px;
  font-weight: bold;
  font-family: 微软雅黑;
}

.main-view {
 position: absolute;
 left: 0px;
 right: 0px;
 top: 102px;
 bottom: 0;
}

.main-tree {
  position: absolute;
  border-right: solid 1px #DDDDDD;
  /*padding-top: 5px;*/
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 200px;
}

.main-content {
  position: absolute;
  border-left: solid 1px #DDDDDD;
  padding-top: 5px;
  top: 0;
  bottom: 0;
  left: 205px;
  right: 0;
  overflow: auto;
}

nav {
  border: 1px solid #eee;
  border-radius: 0;
}
.navbar {
  min-height: 20px;
  height: 32px;
}
.nav > li > a {
  padding: 5px 15px;
  border-radius: 0;
}
</style>

<template>
  <div class="main">
    <div class="main-header">
      <img style="height: 100%;" src="../assets/logo.png" />
      <span style="padding-left: 20px;">前端基础框架及组件示例</span>
    </div>
    <nav class="navbar navbar-collapse">
      <ul class="nav nav-pills">
        <li v-for="item in topMenuData" :class="topMenuItem === item ? 'active' : ''">
          <a href="javascript:void(0);" @click="topMenuItemClick(item)">{{item.label}}</a>
        </li>
      </ul>
    </nav>
    <div class="main-view">
      <div class="main-tree">
        <gs-menubar label-field="label" :data-provider="menuData"
          v-model="menuItem" @item-click="itemClick"></gs-menubar>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topMenuData: [
        {
          id: '1001',
          label: 'Vue2.0-Demo',
          children: [
            {
              id: '001',
              label: '组件示例',
              children: [
                { id: '1-001', label: '树组件示例', path: '/home/great-tree' },
                { id: '1-002', label: '下拉与日期示例', path: '/home/great-combo' },
                { id: '1-003', label: '列表示例', path: '/home/great-datagrid' },
                { id: '1-003', label: '弹出窗口示例', path: '/home/great-modal' }
              ]
            }
          ]
        }
      ],
      menuData: [],
      topMenuItem: null,
      menuItem: null
    }
  },
  methods: {
    topMenuItemClick (item) {
      this.topMenuItem = item
      this.menuData = item.children
    },
    itemClick ({path}) {
      if (path) {
        this.$go(path)
      }
    }
  },
  ready () {
    this.topMenuItemClick(this.topMenuData[0])
  }
}
</script>
