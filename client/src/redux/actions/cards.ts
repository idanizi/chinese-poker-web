import { cardTypes } from "src/interfaces/cards"
import { ActionCreator, ThunkCreator } from "src/models"

//#region action types
export const ADD_CARD_TO_HAND = 'ADD_CARD_TO_HAND'
export const REMOVE_CARD_FROM_DECK = 'REMOVE_CARD_FROM_DECK'
//#endregion

//#region payload types
type AddCardPayloadType = {
    cardName: string | keyof typeof cardTypes,
    handIndex: number
}
//#endregion

//#region action creators
export const addCardToHand: ActionCreator<AddCardPayloadType> = (payload) => ({
    type: ADD_CARD_TO_HAND,
    payload
})

export const removeOneCardFromDeck: ActionCreator = () => ({
    type: REMOVE_CARD_FROM_DECK,
})

export const moveCardFromDeckToHand: ThunkCreator = (cardName: string, handIndex: number) => (dispatch) => {
    dispatch(addCardToHand({ cardName, handIndex }))
    dispatch(removeOneCardFromDeck())
}
//#endregion