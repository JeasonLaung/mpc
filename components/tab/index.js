// components/m-tab/m-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tab_arr: {
      type: Array,
      value: [1,2,3]
    },
    // 扩展
    animation:{
      type:Boolean,
      value:false
    },
    value:{
      type:[String,Number],
      value:0
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    current: 0
  },
  attached() {
    this.setData({
      current:this.data.value
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handlerchange: function(e) {
      let current = e.target.dataset.index
      if (current == this.data.current) {
        return false
      }
      this.setData({
        current
      })
      this.triggerEvent('change', current)

    }
  }
})
