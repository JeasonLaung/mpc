// components/input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ext:String,
    placeholder:String,
    maxlength:{
      type:String,
      value:20
    },
    confirmType:String,
    value:String
  },
  attached() {
    this.setData({
      _value: this.data.value || ""
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    _active: false,
    _value: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindinput(e) {
      this.triggerEvent('input',e.detail.value)
    },
    bindblur(e) {
      this.setData({
        _active:false
      })
      this.triggerEvent('blur')
    },
    bindfocus(e) {
      this.setData({
        _active: true
      })
      this.triggerEvent('focus')
    },
    bindconfirm(e) {
      this.triggerEvent('confirm')
    }
  }
})
