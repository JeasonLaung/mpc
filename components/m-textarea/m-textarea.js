// components/m-textarea/m-textarea.js
Component({
  externalClasses: ['m-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    
    placeholder: String,
    adjustPosition: {
      type: Boolean,
      value: true
    },
    maxlength: {
      type: [String, Number],
      value: 150
    },
    fixed: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    focus: {
      type: Boolean,
      value: false
    },
    cursorSpacing: {
      type: [String, Number],
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _length: 0,
    _value:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindreset(e) {
      this.setData({
        _length: 0,
        _value: ''
      })
      this.triggerEvent('reset')
      
    },
    bindlinechange(e) {
      this.triggerEvent('linechange',e.detail.value)
    },
    bindinput(e) {
      let _length = e.detail.value.length
      this.setData({
        _length
      })
      this.triggerEvent('input', e.detail.value)
    },
    bindblur(e) {
      this.triggerEvent('blur')
    },
    bindfocus(e) {
      this.triggerEvent('focus')
      
    },
  }
})
