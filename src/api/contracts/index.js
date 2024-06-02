import { instance } from 'src/axios'

const baseUrl = '/api'

export const getContractHistory = (contractId) => {
  return instance.post(`${baseUrl}/getcontracthistory?contractId=${contractId}`)
}
