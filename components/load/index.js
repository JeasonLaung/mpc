// components/load/index.js
Component({
  options: {
    multipleSlots: true
  },
  attached () {
    // 挂载组建后，执行刷新操作
    this.triggerEvent('new', {page: 0})
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 完成刷新操作
    loadNewComplete: {
      type: Boolean,
      value: false
    },
    // 简单加载,只加载
    simple: {
      type: Boolean,
      value: false
    },
    // 是否空
    empty: {
      type: Boolean,
      value: false
    },
    // 当前页
    page: {
      type: Number,
      value: 0
    },
    // 高度
    height: {
      type: String,
      value: '100vh'
    },
    
    customLoadNew: {
      type: Boolean,
      value: true
    },
    customLoadMore: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */  
  data: {
    noMore: false,
    loadingMore: false,
    loading: false,
    scrollTop: '',
    // 跳到哪一个id上
    scrollIntoView: 'm-load-container',
    // 下拉刷新设定距离
    pullRefreshDistance: 50,
    // 可拉伸距离
    pullDistance: 125,
    // 定时器
    timer: null,
    timer2: null,
    status: 1 /** 0,无事件接管（常状态），1,upper接管（用户猛划屏幕）,2,touchend接管（可加载状态） */
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setNoMore () {
      this.setData({
        noMore: true
      })
    },
    // 停止刷新，回弹
    stopPullRefresh () {
      this.setData({
        scrollIntoView: 'm-load-container',
        status: 1,
        loading: false
      })
    },
    stopReachBottom () {
      this.setData({
        loadingMore: false
      })
    },
    // 拖动
    bindscroll(res) {
    },
    // 到底
    bindscrolltolower(res) {
      // 避免一次进行太多次加载更多
      if (this.data.loadingMore || this.data.empty) {
        return false
      }
      // 加载更多触发
      
      this.setData({
        loadingMore: true
      })
      this.data.page = this.data.page + 1
      this.triggerEvent('more', { page: this.data.page })

      if (!this.data.customLoadMore) {
        clearTimeout(this.data.timer2)
        this.data.timer2 = setTimeout(() => {
          this.setData({
            loadingMore: false
          })
        }, 2500)
      }
    },
    // 到顶
    bindscrolltoupper(res) {
      if (this.data.status === 2 || this.data.simple) {
        return false
      }
      let _this = this
      let query = wx.createSelectorQuery().in(this)
      query.select('#m-load').scrollOffset(function (res) {
        if (res.scrollTop < _this.data.pullDistance) {
          _this.setData({
            scrollIntoView: 'm-load-container'
          })
        }
      }).exec()
    },
    // 手开始触摸
    bindtouchstart() {
      if (this.data.simple) {
        return false
      }
      // 开始触摸，接管最高级状态
      this.setData({
        status: 2
      })
    },
    // 手放开
    bindtouchend() {
      if (this.data.simple) {
        return false
      }
      // 结束触摸后交由upper接管，status = 1
      let _this = this
      let query = wx.createSelectorQuery().in(this)
      query.select('#m-load').scrollOffset(function (res) {
        // 在更新下方没事
        if (res.scrollTop >= _this.data.pullDistance) {
          _this.setData({
            status: 1
          })
        } else {
          // 获取最远拉的距离,如果大于等于设定刷新距离，刷新
          if (_this.data.pullRefreshDistance <= _this.data.pullDistance - res.scrollTop) {
            // 最大距离大于刷新距离
            clearTimeout(_this.data.timer)
            // 直接跳到new上
            _this.setData({
              scrollIntoView: 'm-load-new',
              loading: true,
              noMore: false,
              loadingMore: false
            })
            // 刷新触发
            _this.data.page = 0
            _this.triggerEvent('new', { page: 0 })
            
            // 过3秒后自动回内容
            if (!_this.data.customLoadNew) {
              _this.data.timer = setTimeout(() => {
                _this.setData({
                  scrollIntoView: 'm-load-container',
                  status: 1,
                  loading: false
                })
              }, 3000)
            }
          } else {
            // 否则返回原点
            _this.setData({
              scrollIntoView: 'm-load-container',
              status: 1
            })
          }
        }

      }).exec()
    }
  }
})
