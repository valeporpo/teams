import React from 'react'

export default function TableHeaderColumn(props) {

    return (
            <div className={props.class} 
            >
                {props.text}
            </div>
    )
}