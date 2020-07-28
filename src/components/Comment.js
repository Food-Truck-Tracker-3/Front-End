import React from 'react'

export default function Comment(props) {
  const { details } = props
  if (!details) {
    return <h3>Working fetching your comment&apos;s details...</h3>
  }

  return (
    <div className='comment container'>
      <h2>{details.comments}</h2>
    </div>
  )
}