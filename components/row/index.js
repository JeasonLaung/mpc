// components/m-row/m-row.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    noBorder: Boolean,
    title: String,
    content:String,
    isLink: {
      type: Boolean,
      value: false
    },
    full: Boolean,
    normal: Boolean,
    center:Boolean,
    border:Boolean
  },
  options: {
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
