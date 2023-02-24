import { translateTitle } from '@/utils/translate'
import { isPassword } from '@/utils/regular'

export const FORM_RULES = {
  userName: [
    {
      required: true,
      trigger: 'blur',
      validator: async (rule, value, callback) => {
        if (!value) {
          return callback(Error(translateTitle('userNameNotEmpty')))
        }
        callback()
      },
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule, value, callback) => {
        if (!isPassword(value)) {
          return callback(new Error(translateTitle('passwordNotRule')))
        }
        callback()
      },
    },
  ],
  code: [
    {
      require: true,
      trigger: 'blur',
      validator: async (rule, value, callback) => {
        if (!value) {
          return callback(Error(translateTitle('codeNotRule')))
        }
        callback()
      },
    },
  ],
}
export const SVG_ICONS = [
  // eslint-disable-next-line global-require
  require('@/assets/icons/wechat_icon.svg'),
  // eslint-disable-next-line global-require
  require('@/assets/icons/qq_icon.svg'),
]
