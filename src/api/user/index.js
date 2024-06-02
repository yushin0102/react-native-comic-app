import { instance } from 'src/axios'

const baseUrl = '/api'
const mockUrl = '/api/mock'

export const getusercaselinkinfo = () => {
  return instance.post(`${baseUrl}/getusercaselinkinfo`)
}
