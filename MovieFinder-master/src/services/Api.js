import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://www.omdbapi.com/`,
    withCredentials: false,
    headers: {
      Accept: 'application/x-www-form-urlencoded',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
