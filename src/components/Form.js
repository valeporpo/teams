import React from 'react'
export default function Form(props) {

    const [currentManager, setCurrentManager] = React.useState('')

    function handleManagerInput(event) {
        setCurrentManager(event.target.value)
        props.handle(event.target.value)
    }

    return( 
        <form className="buy-form">
            <select onChange={handleManagerInput} value={currentManager}>
              {props.managers.map((manager) => <option >{manager.nome}</option>)}
            </select>
         </form>
    )
}