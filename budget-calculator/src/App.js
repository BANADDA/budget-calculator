import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import {v4 as uuid} from "uuid";

const initialExpenses = [
  {id:uuid(), item:"rent", cost:1600},
  {id:uuid(), item:"car payment", cost:400},
  {id:uuid(), item:"credit card bill", cost:1200},
]

console.log(initialExpenses);

function App() {

  //****** State Values *******
  // add expenses
  const [expenses, setexpenses] = useState(initialExpenses)
  // single expense
  const [item, setitem] = useState('')
  // single cost
  const [cost, setcost] = useState('')
  // alert
  const [alert, setalert] = useState({show:false});
  //****** functionality ******
  const handleCharge = e => {
    setitem(e.target.value)
  }
  const handlecost = e => {
    setcost(e.target.value)
  }
  // handle alert
  const handlealert = ({type, text}) => {
    setalert({show:true, type, text})
    setTimeout(() => { setalert({show:false})},3000)
  } 

  const handlesubmit = e => {
    e.preventDefault()
    if (item !== '' && cost > 0) {
      const singleExpense = { id:uuid(), item, cost }
      setexpenses([...expenses, singleExpense])
      handlealert({type:'success', text:'item added'})
      setitem(" ")
      setcost(" ")
    }
    else{
      // call handle alert
      handlealert({type:'danger', text:`charge can't be empty and cost should be bigger than zero`})
    }
  }

  return (
    <>
        {alert.show && <Alert type={alert.type} text={alert.text}/>}
        <Alert/>
        <h1>Budget Calculator</h1>
        <main className='App' >
          <ExpenseForm item = {item} cost = {cost} handleCharge = {handleCharge} handlecost = {handlecost} handlesubmit = {handlesubmit} />
          <ExpenseList expenses = {expenses} />
        </main>
        <h1>
          total spending: {" "} <span className='total' >
            $
            {expenses.reduce((acc, curr) => { return(acc += parseInt(curr.cost)); }, 0)}
          </span>
        </h1>
    </>
  );
}

export default App;
