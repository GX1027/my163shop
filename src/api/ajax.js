import axios from 'axios'

export default function ajax(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (method === 'GET') {
      promise = axios.get(url, { params: data })
    } else if (method === 'POST') {
      promise = axios.post(url, data)
    }
    promise.then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.message)
    })
  })
}