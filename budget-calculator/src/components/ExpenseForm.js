import React from 'react'
import { MdSend } from 'react-icons/md'

const ExpenseForm = ({ item, cost, handleCharge, handlecost, handlesubmit }) => {
  return (
    <form onSubmit={handlesubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>Item</label>
          <input type="text" className='form-control' id='charge' name='Item' placeholder='e.g. rent' value={item} onChange={handleCharge}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Cost</label>
          <input type="number" className='form-control' id='amount' name='Cost' placeholder='e.g. 100' value={cost} onChange={handlecost}></input>
        </div>
      </div>
      <button type='submit' className='btn'>
        Submit
        <MdSend className='btn-icon'/>
      </button>
    </form>
  )
}

export default ExpenseForm
