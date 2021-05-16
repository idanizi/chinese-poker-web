import React, { CSSProperties } from 'react'
import url from 'src/helpers/url'
import {cardTypes} from '../../interfaces/cards'
import classnames from 'classnames'
import styles from './Card.module.scss';

type CardPropTypes = {
    name: keyof typeof cardTypes | string, 
    className?: string,
    style?: CSSProperties
}

const Card = ({name, className, style}: CardPropTypes) => {
    return (
        <div style={style} className={classnames(styles.card, className)}>
            <img src={url.getCardImageSource(name)} />
        </div>
    )
}

export default Card
