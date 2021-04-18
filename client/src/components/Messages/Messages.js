import React from 'react'

export default function Messages({message}) {
  return (
    <div className="messages">
      <h1>Date Created: {message.date}</h1>
      <h1>From: {message.email}</h1>
      <h1>Message: {message.message}</h1>
    </div>
  )
}
