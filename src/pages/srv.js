import { http } from './http'

const RESOURCE_NAME = 'teste/'

export default {
  getAll: () => { return http.get(RESOURCE_NAME) }

}
