// components/picker/index.js
import {city} from './data.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mode: String,
    placeholder:{
      type: String,
      value: "未选择"
    },
    title:{
      type: String,
      value: ""
    },
    content:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pickerCity: [],
    _content:"",
  },
  attached() {
    let pickerCity = [city,[]]
    let _content = this.data.content || ""
    this.setData({
      pickerCity,
      _content
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handlerColumnChange(e) {
      // return 
      let column = e.detail.column
      let value = e.detail.value

      // console.log(e) 
      // console.log(column)
      // console.log(value)

      switch (column) {
        case 0:
          this.setData({
            pickerCity: [city, city[value].cities]
          }) 
          // console.log(this.pickerCity[1])
          break
      }
    },
    handlerCityChange(e) {
      /*数组 */
      let value = e.detail.value
      let _province = value[0]
      let _city = value[1] || 0
      value = [_province, _city]
      let _city_name, _province_name, _city_id, _province_id
      if (_province + _city <= 0) {
        this.setData({
          _content: ""
        })
        this.triggerEvent('change', { value,name:["所有", "所有"]})
        
      }
      else {
        _city_name = city[_province]['cities'][_city]['name']
        _province_name = city[_province]['name']
        _city_id = city[_province]['cities'][_city]['id']
        _province_id = city[_province]['id']
        this.setData({
          _content: _city_name
        })

        this.triggerEvent('change', { value, name: [_province_name, _city_name], id: [_province_id,_city_id]})
      }
    },
  }
})
