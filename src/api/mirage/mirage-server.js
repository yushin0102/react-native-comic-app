import { createServer, Model } from 'miragejs'
import { mockUpcomingTasks } from 'src/api/mockData'
import { parseSlashDateToDashDate } from 'src/utils/dateUtils'
import { v4 as uuid } from 'uuid'

const fixPretnederXMLHttpRequestStatus = () => {
  /* a bug in pretender.js, so need to adjust native http request
  https://github.com/miragejs/miragejs/issues/1006
  */

  const NativeXMLHttpRequest = window.XMLHttpRequest

  window.XMLHttpRequest = function XMLHttpRequest() {
    const request = new NativeXMLHttpRequest(arguments)
    delete request.onloadend
    return request
  }
}

export function createMockApiServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,
    models: {
      task: Model,
    },
    seeds(server) {
      mockUpcomingTasks.map((task) => {
        server.create('task', {
          id: task.id,
          title: task.title,
          startTime: task.startTime,
          endTime: task.endTime,
          date: task.date,
          location: task.location,
          description: task.description,
        })
      })
    },
    routes() {
      fixPretnederXMLHttpRequestStatus()

      this.namespace = 'api'
      this.urlPrefix = process.env.API_URL

      this.passthrough(process.env.API_URL + '/**')
      this.passthrough('https://identitytoolkit.googleapis.com/**')
      this.passthrough('https://firestore.googleapis.com/**')
      this.passthrough(
        'https://firestore.googleapis.com/google.firestore.v1.Firestore/**',
      )

      this.get(`/mock/calendarEvents`, (schema) => {
        return schema.tasks.all().models.map((task) => task.attrs.date)
      })

      this.get('/mock/upcomingTasks', (schema) => {
        return schema.tasks
          .all()
          .models.sort((a, b) => a.attrs.date.localeCompare(b.attrs.date))
          .map((task) => ({ ...task.attrs }))
      })

      this.get('/mock/getTaskDetailsByDate', (schema, request) => {
        const { date } = request.queryParams

        return schema.tasks
          .all()
          .models.filter(
            (task) => parseSlashDateToDashDate(task.attrs.date) === date,
          )
          .map((task) => ({ ...task.attrs }))
      })

      this.post('/mock/task', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        const newData = {
          ...attrs,
          id: uuid(),
        }
        return schema.tasks.create(newData)
      })

      this.passthrough()
    },
  })

  return server
}
