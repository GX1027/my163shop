import MockJS from 'mockjs'
import homeData from './homeData.json'
import categoryData from './category.json'
import categoryListData from './categoryList.json'

MockJS.mock('/mock/home', {
  code: 0,
  data: homeData
})

MockJS.mock('/mock/category', {
  code: 0,
  data: categoryData
})

MockJS.mock('/mock/category/list', {
  code: 0,
  data: categoryListData
})