/**
 * @description 拦截错误日志
 */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
/* add icons to the library */
export function setupFont(app) {
  app.component('SimIcon', FontAwesomeIcon)
}
