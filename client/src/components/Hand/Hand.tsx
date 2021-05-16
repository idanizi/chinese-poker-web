import React from 'react'
import { cardTypes } from 'src/interfaces/cards'
import Card from '../Card'
import styles from './Hand.module.scss'

type HandPropTypes = {
    cards: [keyof typeof cardTypes] | string[]
}

const Hand = ({ cards }: HandPropTypes) => {
    return (
        <section className={styles.hand}>
            {
                cards.map((name: string, idx: number) => {
                    return (
                        <Card key={idx} name={name} style={{transform: `translateY(${idx * (-15)}em)`}}/>
                    )
                })
            }
        </section>
    )
}

export default Hand
