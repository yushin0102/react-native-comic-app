import { instance } from 'src/axios'

const baseUrl = '/api'

export const getUpcomingTasks = ({ pageSize, pageNo }) => {
  return instance.post(
    `${baseUrl}/workcalendarfuture?pageSize=${pageSize}&pageNo=${pageNo}`
  )
}

export const getCalendarEvents = (yearMonth) => {
  return instance.post(
    `${baseUrl}/workcalendarbyyearmonth?yearMonth=${yearMonth}`
  )
}

export const getTaskDetailsByDate = (date) => {
  return instance.post(`${baseUrl}/workcalendarbydate?workDate=${date}`)
}

export const getTaskDetailByCalendarId = (calendarId) => {
  return instance.post(`${baseUrl}/workcalendarbyid?calendarId=${calendarId}`)
}

export const createNewTaskToCalendar = (requestBody) => {
  // {
  //   "caseName": "string",
  //   "workAddress": "string",
  //   "workTimeStart": "2024-04-26T12:15:12.305Z",
  //   "workTimeEnd": "2024-04-26T12:15:12.305Z"
  // }
  return instance.post(`${baseUrl}/workcalendaradd`, requestBody)
}

export const updateTaskToCalendar = (requestBody) => {
  // {
  //   "calendarId": 0,
  //   "contractId": 0,
  //   "caseName": "string",
  //   "workAddress": "string",
  //   "workTimeStart": "2024-04-26T11:51:14.074Z",
  //   "workTimeEnd": "2024-04-26T11:51:14.074Z"
  // }
  return instance.post(`${baseUrl}/workcalendaredit`, requestBody)
}
