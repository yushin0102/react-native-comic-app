import { instance } from 'src/axios'

const baseUrl = '/api'

export const getContractHistory = (contractId) => {
  return instance.post(`${baseUrl}/getcontracthistory?contractId=${contractId}`)
}

export const getContractFileList = (contractId) => {
  return instance.post(
    `${baseUrl}/contractfiledatalist?contractId=${contractId}`
  )
}

export const getContractFile = (fileId) => {
  return instance.post(`${baseUrl}/getcontractfile?fileId=${fileId}`)
}
