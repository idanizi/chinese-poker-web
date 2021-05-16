import React, { CSSProperties } from 'react'
import url from 'src/helpers/url'
import {cardTypes} from '../../interfaces/cards'

type CardPropTypes = {
    name: keyof typeof cardTypes | string, 
    className?: string,
    style?: CSSProperties
}

const Card = ({name, className, style}: CardPropTypes) => {
    return (
        <div {...{className, style}}>
            <img src={url.getCardImageSource(name)} />
        </div>
    )
}

export default Card
