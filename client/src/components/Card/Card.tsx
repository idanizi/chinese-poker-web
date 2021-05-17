import React, { CSSProperties } from 'react'
import url from 'src/helpers/url'
import { cardTypes } from '../../interfaces/cards'
import classnames from 'classnames'
import styles from './Card.module.scss';

type CardPropTypes = {
    name?: keyof typeof cardTypes | string,
    className?: string,
    style?: CSSProperties,
    isFacingDown?: boolean,
    isPlaceholder?: boolean,
}

const Card = ({ name, className, style, isFacingDown = false, isPlaceholder = false }: CardPropTypes) => {
    const src = (name && !isFacingDown) ? url.getCardImageSource(name) : url.buildImgSrc('/cards/back.svg');

    return (
        <div style={style} className={classnames(styles.card, isPlaceholder && styles.placeholder, className)}>
            <img src={src} alt="" />
        </div>
    )
}

export default Card
