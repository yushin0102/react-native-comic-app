import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://devmemberapi.pocketpro.tw',
})
const baseUrl = '/api'
const mockUrl = '/api/mock'

export const apiCaselinkused = (data) => {
  return instance.post(`${baseUrl}/caselinkused`, data)
}

export const apiHaveuserdata = () => {
  return instance.post(`${baseUrl}/haveuserdata`)
}

export const apiUserlineinfo = () => {
  return instance.post(`${baseUrl}/userlineinfo`)
}

export const apiAllcasetype = () => {
  return instance.post(`${baseUrl}/allcasetype`)
}

export const apiUseradd = (data) => {
  return instance.post(`${baseUrl}/useradd`, data)
}

export const apiSendMobileValidCode = () => {
  return instance.post(`${baseUrl}/sendMobileValidCode`)
}

export const apiValidStatus = (validType) => {
  return instance.get(`${baseUrl}/validstatus?ValidType=${validType}`)
}

export const apiMobileValidCode = (code) => {
  return instance.get(`${baseUrl}/mobilevalidcode?ValidCode=${code}`)
}

export const apiSendEmailValidCode = (code) => {
  return instance.post(`${baseUrl}/sendemailvalidcode`)
}

export const apiEmailValidCode = (code) => {
  return instance.get(`${baseUrl}/emailvalidcode?ValidCode=${code}`)
}

export const apiUserInfo = () => {
  return instance.post(`${baseUrl}/userinfo`)
}

export const apiGetMemberInfo = () => {
  return instance.post(`${baseUrl}/memberinfo`)
}

export const apiEmailMobileEdit = (changeType, value) => {
  console.log('changeType', changeType)
  console.log('value', value)
  return instance.get(
    `${baseUrl}/emailmobileedit?type=${changeType}&value=${value}`,
  )
}

export const apiCheckEmailMobileUsed = ({ email, mobile }) => {
  return instance.get(
    `${baseUrl}/checkemailmobileused?Email=${email}&Mobile=${mobile}`,
  )
}

export const apiUserEdit = (data) => {
  return instance.post(`${baseUrl}/useredit`, data)
}

// export const apiCheckoutSubscription = () => {
//   return paymentInstance.post(`/checkout-subscription`)
// }

export const apiGetCityPost = () => {
  return instance.post(`${baseUrl}/getcitypost`)
}

export const apiUserIdentityValid = (data) => {
  return instance.post(`${baseUrl}/useridentityvalid`, data)
}

export const getUserMobile = (ata) => {
  return instance.post(`${baseUrl}/getUserMobile`)
}

export const apiUseridentityinfo = () => {
  return instance.post(`${baseUrl}/useridentityinfo`)
}

export const apiUseridcheck = () => {
  return instance.post(`${baseUrl}/useridcheck`)
}

export const apiCaseUnreadCount = () => {
  return instance.post(`${baseUrl}/caseunreadcount`)
}

export const apiSetCaseReaded = (cid) => {
  return instance.post(`${baseUrl}/setcasereaded?Case_ID=${cid}`)
}

export const apiGetCaseList = (
  filter,
  invitationStatusType,
  pageSize,
  pageNo,
) => {
  let url = `${baseUrl}/getcaselist?invitationStatusType=${invitationStatusType}&pageSize=${pageSize}&pageNo=${pageNo}`

  if (filter) {
    url += `&filter=${filter}`
  }

  return instance.post(url)
}
export const apiGetCaseInfo = (cid) => {
  return instance.post(`${baseUrl}/getcaseinfo?Case_ID=${cid}`)
}

export const apiGetCaseQuestions = (cid) => {
  return instance.post(`${baseUrl}/getcasequestions?Case_ID=${cid}`)
}

export const apiSetCasePriceAnswers = ({ cid, price, data }) => {
  return instance.post(
    `${baseUrl}/setcasepriceanswers?Case_ID=${cid}&Price=${price}`,
    data,
  )
}

export const apiCaseReject = (cid) => {
  return instance.post(`${baseUrl}/casereject?Case_ID=${cid}`)
}

export const apiChatUnreadCount = () => {
  return instance.post(`${baseUrl}/chatunreadcount`)
}
console.log('instance', instance)
export const apiGetChatRoomList = (pageNo = 1, pageSize = 7) => {
  return instance.post(
    `/getchatroomlist?pageSize=${pageSize}&pageNo=${pageNo}`,
    {},
    {
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZWM3NTRhNy1kNWVhLTQ4YTAtYTVjMi0xYzBjODRhNzcxNWIiLCJqdGkiOiJiM2Q1MzgwZS03ZTU1LTRiZTgtYjQxMC00ZDdiZDQyMWI2MmQiLCJuYmYiOjE3MTYwOTQ5ODIsImV4cCI6MTcxNjc0Mjk4MiwiaWF0IjoxNzE2MDk0OTgyLCJpc3MiOiJNZW1iZXIuQVBJIn0.Yyd7Cw_6-zkNIZBkI0K-yqIpl6Aar7OQPJgEMLgbhTU`,
      },
    },
  )
}

export const apiGetChatRoom = (cid, pageNo = 1, pageSize = 50) => {
  return instance.post(
    `${baseUrl}/getchatroom?Case_ID=${cid}&pageSize=${pageSize}&pageNo=${pageNo}`,
    {},
    { customParam: { cancelLoading: true } },
  )
}

export const apiAddMessage = (message) => {
  return instance.post(`${baseUrl}/addmessage`, message, {
    customParam: { cancelLoading: true },
  })
}

export const apiGetcasename = (cid) => {
  return instance.post(`${baseUrl}/getcasename?Case_ID=${cid}`)
}

export const apiSetChatReaded = (cid) => {
  return instance.post(`${baseUrl}/setchatreaded?Case_ID=${cid}`)
}

export const apiCasesHaveNew = () => {
  return instance.post(`${baseUrl}/caseshavenew`)
}

export const apiChatCaseRedDot = (cid) => {
  return instance.post(`${baseUrl}/chatcasereddot?Case_ID=${cid}`)
}

export const getUpcomingTasks = () => {
  return instance.get(`${mockUrl}/upcomingTasks`)
}

export const getCalendarEvents = () => {
  return instance.get(`${mockUrl}/calendarEvents`)
}

export const getTaskDetailsByDate = (date) => {
  return instance.get(`${mockUrl}/getTaskDetailsByDate?date=${date}`)
}

export const createNewTaskToCalendar = (requestBody) => {
  return instance.post(`${mockUrl}/task`, requestBody)
}

/*
constract Start ---------------------
*/

export const apiContractDataList = (listType, pageNo = 1, pageSize = 10) => {
  return instance.post(
    `${baseUrl}/contractdatalist?listType=${listType}&pageSize=${pageSize}&pageNo=${pageNo}`,
  )
}

export const apiCasehavecontract = (caseId) => {
  return instance.post(`${baseUrl}/casehavecontract?Case_ID=${caseId}`)
}

export const apiGetpayfirsttrial = (contractId) => {
  return instance.post(`${baseUrl}/getpayfirsttrial?Case_ID=${contractId}`)
}

export const apiAddcontract = (contractId, payFirst = false) => {
  return instance.post(
    `${baseUrl}/addcontract?caseId=${contractId}&payFirst=${payFirst}`,
  )
}

export const apiSigncontract = (data) => {
  return instance.post(`${baseUrl}/signcontract`, data)
}

export const apiGetcontractinfo = (contractId) => {
  return instance.post(`${baseUrl}/getcontractinfo?Contract_ID=${contractId}`)
}

export const createContractStep = ({ contractId, step }) => {
  const pathNameMapping = {
    1: 'createcontractstepone',
    2: 'createcontractsteptwo',
    3: 'createcontractstepthree',
  }
  return instance.post(
    `${baseUrl}/${pathNameMapping[step]}?contractId=${contractId}`,
    {
      contractId,
    },
  )
}

export const setContractReaded = (contractId) => {
  return instance.post(`${baseUrl}/setcontractreaded?Contract_ID=${contractId}`)
}

export const getContractSignInfo = (contractId) => {
  return instance.post(
    `${baseUrl}/getcontractsigninfo?contractId=${contractId}`,
  )
}

export const getContractFileList = (contractId) => {
  return instance.post(
    `${baseUrl}/contractfiledatalist?contractId=${contractId}`,
  )
}

export const getContractFileById = (fileId) => {
  return instance.post(`${baseUrl}/getcontractfile?fileId=${fileId}`)
}

export const uploadContractCompletionPhotos = (data) => {
  return instance.post(`${baseUrl}/donecheckadd`, data)
}

export const resendContractCompletionPhotos = (data) => {
  return instance.post(`${baseUrl}/donecheckedit`, data)
}

export const getContractCompletionPhotos = (contractId) => {
  return instance.post(`${baseUrl}/donechecklist?contractId=${contractId}`)
}

export const cancelContract = (contractId) => {
  return instance.post(`${baseUrl}/cancelcontract?contractId=${contractId}`)
}

export const refreshToken = () => {
  return instance.post(`${baseUrl}/security/refreshToken`)
}

/*
constract END ---------------------
*/

export const contractApis = {
  apiContractDataList,
  apiCasehavecontract,
  apiGetpayfirsttrial,
  apiAddcontract,
  apiSigncontract,
  apiGetcontractinfo,
  createContractStep,
  setContractReaded,
  getContractSignInfo,
  getContractFileList,
  getContractFileById,
  uploadContractCompletionPhotos,
  cancelContract,
  resendContractCompletionPhotos,
  getContractCompletionPhotos,
}

export default {
  contractApis,
}
