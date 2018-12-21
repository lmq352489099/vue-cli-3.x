import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getCategorySub',
    method: "post",
    data: {
      userId
    }
  })
}