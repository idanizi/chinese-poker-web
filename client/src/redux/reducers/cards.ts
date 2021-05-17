import produce from "immer"
import { cardTypes } from "src/interfaces/cards";
import { Cards, FluxActionType } from "src/models"
import * as actions from '../actions/cards';
import _ from 'lodash'

type PayloadType = Partial<actions.AddCardPayloadType>

const deck = _.shuffle(
    Object.values(cardTypes)
        // .filter(x => x.length <= 2)// no jokers
)

const initialState: Cards = {
    deck,
    currentPlayer: {
        hands: Array(5).fill(0).map(x => [])
        // [
        //     ["Ad", "As", "Jc", "Th", "2d",],
        //     ["Ad", "As", "Jc", "Th", "2d",],
        //     ["Ad", "As", "Jc", "Th", "2d",],
        //     ["Ad", "As", "Jc", "Th", "2d",],
        //     ["Ad", "As", "Jc", "Th", "2d",],
        // ]
    },
    oppositePlayer: {
        hands: Array(5).fill(0).map(x => [])
    },
    isCurrentPlayerTurn: true, // todo: change to false
}


const cardsReducer = (state = initialState, action: FluxActionType<PayloadType>) => produce(state, draft => {
    switch (action.type) {
        case actions.ADD_CARD_TO_HAND:
            const player = action.payload.isCurrentPlayer ? 'currentPlayer' : 'oppositePlayer'
            draft[player].hands[action.payload.handIndex].push(action.payload.cardName)
            break;

        case actions.REMOVE_CARD_FROM_DECK:
            draft.deck.shift()
            break;
    }
})

export default cardsReducer;
