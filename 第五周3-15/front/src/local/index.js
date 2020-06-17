import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'

for (const rule in rules) {
  extend(rule, {
    ...rules[rule],
    //message: zh.messages[rule],
    message: {
      zh.messages[required] :'请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: () => '不符合最小长度要求',
      length: (field, args) => field + '长度要求' + args
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      name: '账号',
      code: '验证码'
    }
  })
}
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  components: {
    ValidationProvider
  }
}