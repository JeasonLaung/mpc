// pages/test/test.js
const tag_list = [
  {
    title: '现车联系'
  }, {
    title: '户准寻车'
  }, {
    title: '不店保'
  }, {
    title: '随车临牌'
  }, {
    title: '手续随车'
  }, {
    title: '手续齐全'
  }, {
    title: '定金已收'
  }, {
    title: '本地车源'
  }
]
Page({
  handleSubmit(e) {
    console.log(e)

  },
  handlechange(e) {
    console.log(e)
    
  },
  radiochange(e) {
    console.log(e)
    this.setData({
      rd: e.detail
    })
  },
  checkboxchange(e) {
    console.log(e)
    this.setData({
      cb: e.detail
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    cb: [],
    rd:'',
    tag_list,
    items: [
      {
        name: "我",
        value: 1
      }, {
        name: "弄",
        value: 2
      }, {
        name: "呀",
        value: 3
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})