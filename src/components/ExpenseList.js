import React from 'react'

import { ExpenseItem } from './ExpenseItem'
//import icons 
import {MdDelete} from 'react-icons/md'

export const ExpenseList = ({expenses, handleEdit, handleDelete, clearItems}) => {
    
    return (
        <div className="main">
            <ul className="list">
                {expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} expense={expense}
                     handleEdit={handleEdit} handleDelete={handleDelete} /> 
                })}
                
            </ul>
            {expenses.length > 0 && <button className="clearall-btn" onClick={clearItems}>
                Clear All <MdDelete className="clearall-btn-icon"/> 
                </button>}
        </div>
    )
}
