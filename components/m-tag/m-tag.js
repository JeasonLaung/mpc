// components/m-tag/m-tag.js
Component({
  externalClasses: ['m-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    active: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    _active:false
  },
  attached() {
    _active:this.data.active
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handlerTap(e) {
      this.setData({
        _active: !this.data._active
      })
    }
  }
})
