import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
const ExpenseItem = ({expense}) => {
  const {id, item, cost} = expense
  return (
    <li className='item'>
      <div className='info'>
         <span className='expense'> {item} </span>
         <span className='amount'> ${cost} </span>
      </div>
      <div>
        <button className='edit-btn' aria-label='edit-button'>
          <MdEdit/>
        </button>
        <button className='clear-btn' aria-label='delete-button'>
          <MdDelete/>
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem
