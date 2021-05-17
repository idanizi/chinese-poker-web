import React from 'react'
import Hand from '../Hand/Hand'
import styles from './Player.module.scss'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import { Cards, StoreStateType } from 'src/models'

function Player({ playerIndex, isCurrentPlayer = false }) {
    const cardsState = useSelector<StoreStateType, Cards>(state => state.cards)
    const hands = isCurrentPlayer ? cardsState.currentPlayer.hands : cardsState.oppositePlayer.hands;
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
                            <Hand key={idx} cards={cards} isCurrentPlayer={isCurrentPlayer} handIndex={idx} />
                        )
                    })
                }
            </article>
        </section>
    )
}

export default Player
