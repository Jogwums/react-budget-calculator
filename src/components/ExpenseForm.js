import React from 'react'
import {MdSend} from 'react-icons/md';

// import Input from './Input';

export const ExpenseForm = ({amount, charge, handleSubmit, handleAmount, handleCharge, edit}) => {

    return (
        <form className="form" onSubmit={handleSubmit}>
           <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge" >Charge</label>
                    <input type="text" 
                            id="charge" 
                            name="charge" 
                            className="form-control"
                            placeholder="e.g. credit "
                            value={charge}
                            onChange={handleCharge}/>
                </div>
                <div className="form-group">
                    <label htmlFor="expense" >Amount</label>
                    <input type="number" 
                            id="amount" 
                            name="amount" 
                            className="form-control"
                            placeholder="e.g. 1000 "
                            value={amount}
                            onChange={handleAmount}
                            />
                </div>

           </div>
           <button className="send-btn ">
            {edit? 'edit':'submit'}
            <MdSend className="send-icon" />
           </button>
        </form>
    )
}
