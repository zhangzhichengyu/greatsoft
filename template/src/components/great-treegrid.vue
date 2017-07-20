<template>
  <div :style="{'width': gridWidth, 'height': gridHeight}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    'gridid': {
      type: String,
      required: true
    },
    'gridWidth': {
      type: String,
      default: '100%'
    },
    'gridHeight': {
      type: String,
      default: '100%'
    },
    'url': {
      type: String,
      default: function () {
        return undefined
      }
    },
    'idField': {
      type: String,
      required: true
    },
    'treeField': {
      type: String,
      required: true
    },
    'dataProvider': {
      type: Array,
      default: function () {
        return []
      }
    },
    'autoInit': {
      type: Boolean,
      default: true
    },
    'initParams': {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data: function () {
    return {
      gridOwner: null,
      params: {},
      isReady: false
    }
  },
  methods: {
    'initDefaultParams': function () {
      return {
        fit: true,
        rownumbers: false,
        fitColumns: false,
        singleSelect: true,
        idField: this.idField,
        treeField: this.treeField,
        loadMsg: null,
        view: window.emptyTreeView,
        data: this.dataProvider,
        loader: this.loaderFunction
      }
    },
    'setColumns': function (columns, reset) {
      var grid = this.gridOwner
      var gridOptions = grid.treegrid('options')
      var oldColumns = gridOptions.columns
      for (var h = 0; h < oldColumns.length; h++) {
        let hcolumns = reset ? [] : oldColumns[h]
        let rcolumns = columns[h]
        for (var i = 0; i < rcolumns.length; i++) {
          hcolumns.push(rcolumns[i])
        }
        oldColumns[h] = hcolumns
      }
      gridOptions.columns = oldColumns
      grid.treegrid(gridOptions)
    },
    'initTreeGrid': function () {
      // 初始化列表组件
      var grid = this.gridOwner = $('#' + this.gridid)
      var initParams = this.initDefaultParams()
      for (let key in this.initParams) {
        initParams[key] = this.initParams[key]
      }
      grid.treegrid(initParams)

      this.$nextTick(function () {
        this.isReady = true
      })
    },
    'loaderFunction': function (param, success, error) {
      if (!(this.isReady && this.url && this.dataProvider.length === 0)) {
        return false
      }
      this.$http.post(this.url, this.params).then((res) => {
        success(res.data)
      }, (res) => {
        console.log('error:::', res)
        error()
      })
    },
    'loadData': function (params) {
      this.params = params
      this.gridOwner.treegrid('load')
    },
    'treegrid': function (method, params) {
      return $('#' + this.gridid).treegrid(method, params)
    }
  },
  watch: {
    'dataProvider': function (value, oldValue) {
      this.gridOwner.treegrid('loadData', value ? value : [])
    }
  },
  ready: function () {
    // 初始化没有数据时显示的界面样式
    if (!window.emptyTreeView) {
      window.emptyTreeView = $.extend({}, $.fn.treegrid.defaults.view, {
        onAfterRender: function (target) {
          $.fn.treegrid.defaults.view.onAfterRender.call(this, target)
          var opts = $(target).treegrid('options')
          var vc = $(target).treegrid('getPanel').children('div.datagrid-view')
          vc.children('div.datagrid-empty').remove()
          if (!$(target).treegrid('getData').length) {
            var d = $('<div class="datagrid-empty"></div>').html(opts.emptyMsg || '没有数据').appendTo(vc)
            d.css({
              position: 'absolute',
              left: 0,
              top: opts.topOffset || 100,
              width: '100%',
              textAlign: 'center'
            })
          }
        }
      })
    }

    if (this.autoInit) {
      this.initTreeGrid()
    }

    // 监听界面大小发生改变时重绘列表组件，此事件需要主程序在合适的时机派发
    this.$on('view-resize', function () {
      if (this.gridOwner) {
        $('#' + this.gridid).treegrid('resize')
      }
    })
  }
}
</script>
