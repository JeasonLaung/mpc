// components/m-tab/m-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
      this.setData({
        current
      })
      this.triggerEvent('change', current)
    }
  }
})
