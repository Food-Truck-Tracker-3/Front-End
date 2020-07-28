import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import formSchema from './commentSchema'
import axios from 'axios'
import Comment from './Comment'

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

export default function CommentList() {
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [comments, setComments] = useState(initialComments)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewComment = newFriend => {
    axios.post('https://rickandmortyapi.com/api/character/', newFriend)
      .then(res => {
        setComments([res.data, ...comments])
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
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setComments(res.data.results)
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
        <Comment />
      </div>
      <label>
        <input
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
