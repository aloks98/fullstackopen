import React from 'react'

const Notification = ({ message}) => {
    if (message === null) {
      return null
    }

    if (message.type === 'fail'){
        return (
            <div className='error'>
              {message.text}
            </div>
          )
    }

    return (
      <div className='success'>
        {message.text}
      </div>
    )
  }

export default Notification;