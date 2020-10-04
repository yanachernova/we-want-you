import React from 'react'
import '../styles/Player.css'
import Body from './Body'
import Sidebar from './Sidebar'

const Player = ({ spotify, response }) => {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} response={response}/>
            </div>
        </div>
    )
}

export default Player