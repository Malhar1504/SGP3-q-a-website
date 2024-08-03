import React from 'react'
import Quoraheader from './Quoraheader'
import Feed from './Feed'
import Widget from './Widget'
import Sidebar from './Sidebar'
import './css/Quora.css'
const Quora = () => {
  return (
    <div className='quora'>
      <Quoraheader/>
      <div className='quora__contents'>
             <div className='quora__contents'>
<Sidebar/>
<Feed/>

<Widget/>


             </div>
      </div>
    </div>
  )
}

export default Quora
