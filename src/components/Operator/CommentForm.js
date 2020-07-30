import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import formSchema from './commentSchema'
import axios from 'axios'
import Comment from './Comment'
import '../components.css'

const initialFormValues = {
  comment: "",
}

const initialFormErrors = {
  username: '',
  email: '',
  role: '',
  civil: '',
}

const initialComments = []

const initialDisabled = true

export default function CommentForm() {
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [comments, setComments] = useState(initialComments)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewComment = newComment => {
    axios.post('https://foodtruck-backend-3.herokuapp.com/api/galo', newComment)
      .then(res => {
        setComments([res.data.data, ...comments])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        debugger
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submit = () => {
    const newComment = {
      comment: formValues.comment.trim()
    }
    postNewComment(newComment)
  }

  const onInputChange = event => {
    const { name, value } = event.target
    inputChange(name, value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    submit()
  }

  useEffect(() => {
    axios.get('https://foodtruck-backend-3.herokuapp.com/api/galo')
      .then(res => {
        setComments(res.data.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <div>
        <Comment key={comments.id} details={comments}/>
      </div>
      <label>
        <textarea
          id='comment-form'
          value={formValues.comment}
          onChange={onInputChange}
          name='comment'
          type='text'
          placeholder='Tell us what you think about this Food Truck!'
        />
      </label>
      <button disabled={disabled}>Submit</button>
    </form>
  )
}
