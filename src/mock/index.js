import Mock from 'mockjs'
import { getUserInfo1 } from './response/user'
//当拦截到参数一个的请求的时候就会调用到getUserInfo 方法
// Mock.mock('http://localhost:3000/getCategorySub', getUserInfo1)

const Random = Mock.Random

Mock.mock(/\/getCategorySub/, getUserInfo1)
Mock.setup({
  timeout: 500
})

Random.extend({
  fruit() {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})

export default Mock