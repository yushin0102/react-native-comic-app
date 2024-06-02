import { instance } from 'src/axios'

const baseUrl = '/api'

export const setChatRoomNotification = (caseId) => {
  return instance.post(`${baseUrl}/chatroomnotify?caseId=${caseId}`)
}
