// components/m-tag/m-tag.js
Component({
  externalClasses: ['m-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    active: Boolean,
    type: String,
    // value: {
    //   type: String,
    //   value: ""
    // },
    items:{
      type:Array,
      value:[
        {
          name:"我",
          value:1
        }, {
          name: "弄",
          value: 2
        }, {
          name: "呀",
          value: 3
        }
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _active:false,
    _value: [],
    _radio: '',
  },
  attached() {
    this.setData({
      _active: this.data.active,
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handlerRadioTap(e) {
      let val = e.target.dataset.value,
      _radio = this.data._radio
      if (val == _radio) {
        return false
      }
      _radio = val
      this.setData({
        _radio
      })
      this.triggerEvent('change', _radio)
    },
    handlerCheckboxTap(e) {
      let val = e.target.dataset.value,
        _value = this.data._value, 
        index
      if (!_value.includes(val)) {
        _value.push(val)
      }
      else {
        _value = this.data._value
        index = _value.indexOf(val)
        _value.splice(index, 1)
      }
      this.setData({
        _value
      })
      this.triggerEvent('change',_value)
    },
    handlerChange(e) {
      console.log(e)
    }
  }
})
