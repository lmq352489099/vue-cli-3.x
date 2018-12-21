import axios from 'axios'
import { baseURL1 } from '@/config'
class HttpRequest {
  // 相当于baseUrl = baseUrl || baseURL
  //constructor每个类必须添加的方法,这这里可以添加一些参数,
  //在我们创建实例 new HttpRequest 的时候,在括号里面可以传入参数
  constructor(baseUrl = baseURL1) {
    this.baseUrl = baseUrl
    //队列
    this.queue = {}
  }
  //内部配置
  getInsideConfig() {
    const config = {
      //  baseURL 是固定的,他会自动加载url前面
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    console.log(config.baseURL);

    return config
  }
  //如果我们想要在全局中对请求和响应的拦截,在拦截器中做想要的处理
  interceptors(instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      // 在发送请求之前做些什么
      //添加全局的loading...
      //iview中有Spin中标签,在这组件可以在全局中有个人loading样式和遮罩层
      //Spin.show()
      //Object.keys获取所有的属性名
      if (!Object.keys(this.queue).length) {
        /*Spin.show() */
      }
      this.queue[url] = true
      console.log(config);

      return config
    }, error => {
      // 对请求错误做些什么
      return Promise.reject(error)
    })
    // 添加响应拦截器
    instance.interceptors.response.use(res => {
      // 对响应数据做点什么
      delete this.queue[url]
      const { data, status } = res
      console.log(res);
      return { data, status }
    }, error => {
      // 对响应错误做点什么
      delete this.queue[url]
      return Promise.reject(error)
    })
  }
  request(options) {
    //用axios的方法创建了一个实例,是一个函数
    //为自定义axios实例添加拦截器
    const instance = axios.create()


    //变成一个对象,有相同就是后面的覆盖前面
    options = Object.assign(this.getInsideConfig(), options)
    console.log(options);
    //添加拦截器
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest