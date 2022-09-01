import React from 'react'
export default function Form(props) {
    console.log(props.managers)

    //let prezzoBase = typeof(props.player) == 'undefined' ? '' : props.player.prezzo_base
    const [currentManager, setCurrentManager] = React.useState('')

    // Gestisce il cambiamento del valore numerico nell'input
    function handleManagerInput(event) {
        
        //let minimum = props.player.prezzo_base, bid = event.target.value
        //let newValue = bid >= minimum ? bid : minimum
        console.log(event.target.value)
        setCurrentManager(event.target.value)
        props.handle(event.target.value)
    }

    // Gestisce l'invio del form
    /*function handleSubmit(event) {
        event.preventDefault()
        console.log('trying to buy')
        if(Object.keys(props.player).length > 0) {
            fetch(`${config.apiBase}buy_player?
                   token=${config.apiToken}&internal_id=${props.player.id}
                   &manager_id=${props.manager.id}&payed=${playerPrice}`)
                .then(res => res.json())
                .then(function(data) {
                    props.handleBuy()
                })
        }
    }*/

    return( 
        <form className="buy-form">
            <select onChange={handleManagerInput} value={currentManager}>
              {props.managers.map((manager) => <option >{manager.nome}</option>)}
            </select>
         </form>
    )
}