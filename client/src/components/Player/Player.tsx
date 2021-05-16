import React from 'react'
import Hand from '../Hand/Hand'
import styles from './Player.module.scss'
import classnames from 'classnames'

const hands = [
    ["Ad", "As", "Jc", "Th", "2d",],
    ["Ad", "As", "Jc", "Th", "2d",],
    ["Ad", "As", "Jc", "Th", "2d",],
    ["Ad", "As", "Jc", "Th", "2d",],
    ["Ad", "As", "Jc", "Th", "2d",],
]

function Player({playerIndex, isCurrentPlayer = false}) {
    return (
        <section className={styles.player}>
            <header>
                <h3>
                    Player {playerIndex}
                </h3>
            </header>
            <article className={classnames(styles.hands, !isCurrentPlayer && styles.rotate)}>
                {
                    hands.map((cards, idx) => {
                        return (
                            <Hand cards={cards} />
                        )
                    })
                }
            </article>
        </section>
    )
}

export default Player
