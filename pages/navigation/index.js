// pages/navigation/index.js
const App = getApp();

Component({
  lifetimes:{
    attached: function () {
      let len = getCurrentPages().length
      if(len<2) {
        this.setData({
          show: false
        })
      }
      this.setData({
        navH: App.globalData.navHeight
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navH:null,
    show:true,
    search:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleHome() {
      wx.reLaunch({
        url:'/pages/index/index'
      })
    },
    handleBack() {
      wx.navigateBack()
    },
  }
})
