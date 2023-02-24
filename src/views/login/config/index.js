import { translateTitle } from '@/hooks/translate'
import { isPassword } from '@/utils/regular/index'
import { importImage } from '@/hooks/importFile'

export const FORM_RULES = {
  userName: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule, value, callback) => {
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
      validator: (rule, value, callback) => {
        if (!value) {
          return callback(Error(translateTitle('codeNotRule')))
        }
        callback()
      },
    },
  ],
}

export const SVG_ICONS = [
  importImage('icons/wechat_icon.svg'),
  importImage('icons/qq_icon.svg'),
]
