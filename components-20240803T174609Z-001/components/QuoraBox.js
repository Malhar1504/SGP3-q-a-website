import { Avatar } from '@mui/material'
import React from 'react'
import './css/QuoraBox.css'
function QuoraBox() {
  return (
    <div className='quoraBox'>
      <div className='quoraBox__info'>
      <Avatar />
      </div>
      <div className='quoraBox__quora'>
        <h5>
            What is your questionn or Link ?
        </h5>
      </div>
    </div>
  )
}

export default QuoraBox
