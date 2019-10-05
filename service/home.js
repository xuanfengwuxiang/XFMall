// 首页请求
import request from './network.js'

const baseUrl = "";

//轮播图请求
export function getBannerList() {
  return request({
    url: baseUrl + ""
  })
}

