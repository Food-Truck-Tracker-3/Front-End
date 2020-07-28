import * as yup from 'yup'

const formSchema = yup.object().shape({
  comment: yup
    .string()
    .mixed.notRequired()
  })

export default formSchema