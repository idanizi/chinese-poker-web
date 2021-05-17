import React, { CSSProperties, useEffect, useRef } from 'react'
import url from 'src/helpers/url'
import { cardTypes } from '../../interfaces/cards'
import classnames from 'classnames'
import styles from './Card.module.scss';
import * as cardsActions from 'src/redux/actions/cards'
import { useDispatch } from 'react-redux';
import _ from 'lodash'


type CardPropTypes = {
    name?: keyof typeof cardTypes | string,
    className?: string,
    style?: CSSProperties,
    isFacingDown?: boolean,
    isPlaceholder?: boolean,
    handIndex?: number,
    isCurrentPlayer?: boolean,
    isDraggable?: boolean,
}

const Card = ({ name, className, style, isFacingDown = false, isPlaceholder = false, handIndex, isCurrentPlayer, isDraggable }: CardPropTypes) => {
    const src = (name && !isFacingDown) ? url.getCardImageSource(name) : url.buildImgSrc('/cards/back.svg');
    const dispatch = useDispatch();
    const ref = useRef(null)

    useEffect(() => {
        if (ref?.current == null) return;
        if (!isDraggable) return;

        const handleDragStart = (e: DragEvent) => {
            console.log('handleDragStart')
        }
        const handleDragEnd = (e: DragEvent) => {
            console.log('handleDragEnd')
        }
        const handleDragOver = (e: DragEvent) => {
            e.preventDefault();
            // console.log('handleDragOver')
        }
        const handleDragEnter = (e: DragEvent) => {
            // e.preventDefault()
            console.log('handleDragEnter')
        };
        const handleDragLeave = e => {
            console.log('handleDragLeave')
        }

        const handleDrop = function (e: DragEvent) {
            e.preventDefault();
            dispatch(cardsActions.moveCardFromDeckToHand({ isCurrentPlayer, handIndex }))
            console.log(e.target,{ isCurrentPlayer, handIndex, isPlaceholder })
        }

        const element: HTMLElement = ref.current;
        console.log('bind')
        element.addEventListener('dragstart', handleDragStart)
        element.addEventListener('dragend', handleDragEnd)
        element.addEventListener('dragover', handleDragOver)
        element.addEventListener('dragenter', handleDragEnter)
        element.addEventListener('dragleave', handleDragLeave)
        element.addEventListener('drop', handleDrop, false)

        return () => {
            console.log('un-bind')
            element.removeEventListener('dragstart', handleDragStart)
            element.removeEventListener('dragend', handleDragEnd)
            element.removeEventListener('dragover', handleDragOver)
            element.removeEventListener('dragenter', handleDragEnter)
            element.removeEventListener('dragleave', handleDragLeave)
            element.removeEventListener('drop', handleDrop, false)
        }
    }, [dispatch, handIndex, isCurrentPlayer, isDraggable, isPlaceholder, ref])

    return (
        <div ref={ref} style={style} className={classnames(styles.card, isPlaceholder && styles.placeholder, className)} draggable={isDraggable}>
            <img src={src} alt="" />
        </div>
    )
}

export default Card
