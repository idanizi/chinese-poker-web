import React from 'react'
import { cardTypes } from 'src/interfaces/cards'
import Card from '../Card'
import styles from './Hand.module.scss'

type HandPropTypes = {
    cards: [keyof typeof cardTypes] | string[],
    isCurrentPlayer: boolean,
    handIndex: number,
}

const Hand = ({ cards, isCurrentPlayer = false, handIndex }: HandPropTypes) => {
   
    return (
        <section className={styles.hand}>
            {
                cards.length === 0 ?
                    <Card isPlaceholder isDraggable handIndex={handIndex} isCurrentPlayer={isCurrentPlayer} />
                    :
                    cards.map((name: string, idx: number) => {
                        return (
                            <Card key={idx} name={name} handIndex={handIndex} isCurrentPlayer={isCurrentPlayer} />
                        )
                    })
            }
        </section>
    )
}

export default Hand
