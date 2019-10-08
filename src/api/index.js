import ajax from './ajax'

const prefix = '/api'

//分类列表数据
export const reqMockCategory = () => ajax('/mock/category')