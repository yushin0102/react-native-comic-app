import { instance } from 'src/axios'

const baseUrl = '/api'
const mockUrl = '/api/mock'

const lineUrl = `${baseUrl}/line`

export const loginByLine = () => {
  return instance.get(`${lineUrl}/loginLink`)
}

export const refreshToken = () => {
  return instance.post(`${baseUrl}/security/refreshToken`)
}
