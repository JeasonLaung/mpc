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
  },
  /**
   * 组件的初始数据
   */
  data: {
    current: 0
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

      // 扩展
      if (this.data.animation) {
        
      }
    }
  }
})
