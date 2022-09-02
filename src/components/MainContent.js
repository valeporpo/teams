import React from 'react'
import Row from './Row';
import Form from './Form';
import TableHeader from './TableHeader';

export default function MainContent() {

    const [players, setPlayers] = React.useState([{}])
    const [currentManager, setCurrentManager] = React.useState('')
    const [managers, setManagers] = React.useState([{}])

    React.useEffect(retrievePlayers, [0])
    React.useEffect(retrieveManagers, [0])
    

    function retrievePlayers() {
        fetch("https://fantafavaro-api.herokuapp.com/index.php/get_players?token=p6h72m0zd3j38uqer&mode=buyed")
          .then(res => res.json())
          .then(function(data) {
             console.log(data)
             setPlayers(data.data)
          })
    }
    function retrieveManagers() {
        fetch("https://fantafavaro-api.herokuapp.com/index.php/retrieve_managers?token=p6h72m0zd3j38uqer")
          .then(res => res.json())
          .then(function(data) {
             setManagers(data.data)
             setCurrentManager(data.data[0].nome)
          })
    }
    let selectedPlayers = []
    if(players.length > 1 && managers.length > 1) {
        selectedPlayers = players.filter(function(player) {
            let managerObj = managers.filter(manager => {
                return manager.nome === currentManager
            })
            return player.manager === managerObj[0].id
        })
    }

    let pbTot = 0
    let cTot = 0
    for(let i=0; i<selectedPlayers.length; i++) {
        pbTot += selectedPlayers[i].prezzo_base
        cTot += selectedPlayers[i].payed
    }
    

    return (
        <div className='player-table'>
                <Form managers={managers}
                      handle={setCurrentManager}
                />
                <TableHeader/>
                {selectedPlayers.map((player) => <Row player={player}
                                                      key={player.id}
                                                      manager={player.manager}
                                                 />
                                    )
                }
                <div className="player-row">
                    <div className="player-name"></div>
                    <div className="player-team"></div>
                    <div className="player-role">Totale</div>
                    <div className="player-price">{pbTot}</div>
                    <div className="player-payed-price">{cTot}</div>
                </div>
        </div>
    )
}