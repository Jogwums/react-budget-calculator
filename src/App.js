import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'

import Alert from './components/Alert'
import { ExpenseForm } from './components/ExpenseForm';
// import Input  from './components/Input';
import { ExpenseList } from './components/ExpenseList';

// const initialExpenses = [
//     {id: uuidv4(), charge: "rent", amount: 50000  },
//     {id: uuidv4(), charge: "Electricity bill", amount: 8000  },
//     {id: uuidv4(), charge: "waste bill", amount: 1500  },
//     {id: uuidv4(), charge: "Internet Sub", amount: 12000  }
// ];
//Using Local Storage API 
// localStorage.getItem('Item name');
// localStorage.setItem('Item name');

const initialExpenses = localStorage.getItem("expenses") ? 
JSON.parse(localStorage.getItem("expenses")) :  [];

function App() {
    //state values
    const [expenses, setExpenses] = useState(initialExpenses)
    const [charge, setCharge] = useState('')
    const [amount, setAmount] = useState('')
    const [alert, setAlert] = useState({show:false})
    //edit 
    const [edit, setEdit] = useState(false)
    //edit item 
    const [id, setId] = useState(0)
  // enables functionality 

  // Use Effect 
  React.useEffect(() => {
      console.log("we called useEffect");
      localStorage.setItem("expenses", JSON.stringify(expenses))

  }, [expenses]);
  const handleCharge = (e) => {
    setCharge(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  // alert function
  const handleAlert =({type, text}) =>{
    setAlert({show:true, type, text});
    setTimeout(() => {
      setAlert({show:false})
    },3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== '' && amount > 0){
      if(edit){
        let tempExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item;
         });
          setExpenses(tempExpenses);
          setEdit(false)
          handleAlert({type:'success', text:"item edited"});
      }

      else {
        const singleExpense = {id:uuidv4(), charge:charge, amount:amount} //ES6 no need for :
        setExpenses([...expenses, singleExpense]) //using the spread operator ensures previous state values are not deleted
        handleAlert({type:'success', text:"item added"});
      }
       setCharge('');
        setAmount('');
    }
    else{
      // handleAlert is called 
      handleAlert({type:'danger', text:`charge can't be empty and amount larger than zero`});
    }
  
  }

  // clear all items 
  const clearItems = () =>{
    console.log("clear all ")
    setExpenses([])
    handleAlert({type:'danger', text:`all items successfully deleted`})
  }
  // clear local storage 
  const clearLocalStorage = () => {
    localStorage.clear(expenses)
  }

  // handle delete 
  const handleDelete = (id) => {
    //returns every item that meets the filter criteria 
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({type:'danger', text:`an item was successfully deleted`})
  }
  // handle Edit 
  const handleEdit = (id) => {
    let expense = expenses.find(item => item.id === id)
    let {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);

  }
  //pass these methods/ functions into the component that requires them 

  return (
        <div className="wrapper">
          <h1 className="title"> Budget Calculator </h1>
          {alert.show && <Alert type={alert.type} text={alert.text} />}
          <main className="app"> 
            <ExpenseForm charge={charge}
              amount={amount} 
              handleAmount={handleAmount}
              handleCharge={handleCharge}
              handleSubmit={handleSubmit}
              edit={edit}
              />
            <ExpenseList expenses={expenses}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              clearItems={clearItems} />
          
            <h1 className="total-report"> Expenses {":"}
                <span className="total">
                  {"\u20A6 "}
                    {expenses.reduce((acc, curr) => {
                        return (acc += parseInt(curr.amount));
                    }, 0)}</span> 
            </h1>
            <button style={{display:"none",background:"white", color:"red", padding:"10px 20px", fontWeight:"bold", position:"absolute", bottom:"0", left:"0"}} onClick={clearLocalStorage}>clear persistent storage</button>
          </main>
        </div>
    
  );
}

export default App;
