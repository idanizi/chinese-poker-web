import React from 'react'
import Hand from '../Hand/Hand'

const hands = [
    ["Ad", "As", "Jc", "Th", "2d", "Qs", "Qd"],
    ["Ad", "As", "Jc", "Th", "2d", "3c", "Kd"]
]

function Player() {
    return (
        <div>
            <Hand cards={hands[0]} />
        </div>
    )
}

export default Player
