import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'

export const ExpenseItem = ({expense, handleDelete, handleEdit}) => {
    const { id, charge, amount } = expense;

    return (
        <li className="item">
           <span className="info">
                <span className="expense">{charge}</span>
                <span className="amount">{"\u20A6 "}{amount}</span>
           </span>
           <span className="info-btns">
                <button className="edit-btn" 
                        aria-label="edit button" 
                        onClick={() => handleEdit(id) }>
                        <MdEdit className="edit-icon"/>
                </button>
                <button className="clear-btn" 
                        aria-label="delete button"
                        onClick={() => handleDelete(id)}>
                        <MdDelete className=""/>
                </button>
           </span>
        </li>
    )
}
