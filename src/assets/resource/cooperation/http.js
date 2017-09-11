import axios from 'axios'
import { baseURL } from '../config/base'

export default async (url = '', data = {}, method = 'get', config = {}) => {
  method = method.toLowerCase()

  const ajaxConfig = Object.assign({
    url,
    method,
    baseURL
  }, config)

  if (['post', 'put', 'patch'].includes(ajaxConfig.method)) {
    ajaxConfig.data = data
  } else {
    ajaxConfig.params = data
  }
  try {
    const response = (await axios(ajaxConfig)).data
    return response
  } catch (error) {
    const res = error
    if ([400, 401].indexOf(res.status) >= 0) {
      if (res.status === 401 && res.data.error.message !== 'Unauthorized') {
        return Promise.reject(res)
      }
    }
    return Promise.reject(error)
  }
}
