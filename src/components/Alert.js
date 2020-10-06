import React from 'react'

export default function Alert({type, text}) {
    return (
        <span className={`alert alert-${type}`}>
            {text}
        </span>
    )
}
