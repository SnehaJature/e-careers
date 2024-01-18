import React from 'react'
import './container.css'

function Container({children}) {
  return (
    <div className='parent-container'>
      {children}
    </div>
  )
}

export default Container