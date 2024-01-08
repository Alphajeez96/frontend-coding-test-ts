import { ElNotification } from 'element-plus'
import 'element-plus/dist/index.css'

const $toast = {
  success(message: string, title = 'Success') {
    ElNotification({
      title,
      message,
      type: 'success',
    })
  },

  error(message: string, title = 'Error') {
    ElNotification({
      title,
      message,
      type: 'error',
    })
  },
}

export default $toast
