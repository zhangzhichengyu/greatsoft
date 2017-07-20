<style scoped></style>
<template>
  <div>
    <button type="button" class="btn btn-defalut" @click="isShowModal = true">自定义窗口</button>
    <button type="button" class="btn btn-defalut" @click="alert">提示窗口</button>
    <button type="button" class="btn btn-defalut" @click="confirm">确认窗口</button>
    <button type="button" class="btn btn-defalut" @click="autotip">自动消失的提示</button>
    <gs-modal v-model="isShowModal" title="自定义窗口" ok-text="确定" title-align="center"
      :callback="modalHandler">
      <div>
        <p>自定义窗口</p>
        <p>自定义窗口</p>
        <p>自定义窗口</p>
        <p>自定义窗口</p>
        <p>自定义窗口</p>
        <p>自定义窗口</p>
      </div>
    </gs-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowModal: false
    }
  },
  methods: {
    modalHandler () {
      window.alert('点击了确定')
      this.isShowModal = false
    },
    alertHandler (flag) {
      window.alert(flag ? '点击了确定' : '点击了取消')
    },
    alert () {
      this.$alert('提示消息')
    },
    confirm () {
      let options = { msg: '确认提示窗口', showCancel: true, callback: this.alertHandler }
      this.$alert(options)
    },
    autotip () {
      this.$autotip()
    }
  }
}
</script>
