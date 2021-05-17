import { cardTypes } from "src/interfaces/cards"
import { ActionCreator, ThunkCreator } from "src/models"

//#region action types
export const ADD_CARD_TO_HAND = 'ADD_CARD_TO_HAND'
export const REMOVE_CARD_FROM_DECK = 'REMOVE_CARD_FROM_DECK'
//#endregion

//#region payload types
export type AddCardPayloadType = {
    cardName?: string | keyof typeof cardTypes,
    handIndex: number,
    isCurrentPlayer: boolean,
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

export const moveCardFromDeckToHand: ThunkCreator<AddCardPayloadType> = (payload) => (dispatch, getState) => {
    if (!payload.cardName) {
        const { deck } = getState().cards
        if (deck.length === 0) return;
        payload.cardName = getState().cards.deck[0];
    }
    dispatch(addCardToHand(payload))
    dispatch(removeOneCardFromDeck())
}
//#endregion