import React from 'react'
import "./index.css"

export const TodosLoading = () => {
  return (
   <div className='todoLoading-container'>
      <span className='todoLoading-complete'></span>
      <p className='todoLoading-text'></p>
      <span className='todoLoading-delete'></span>
   </div>
  )
}
