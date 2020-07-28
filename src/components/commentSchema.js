import * as yup from 'yup'

const formSchema = yup.object().shape({
  comment: yup
    .string()
  })

export default formSchema