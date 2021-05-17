import produce from "immer"
import { FluxActionType } from "src/models"
import * as actions from '../actions/cards';

type PayloadType = Partial<actions.AddCardPayloadType>

const initialState = {
    deck: ['Ad', 'Jc'],
    currentPlayer: {
        hands: Array(5).map(x => [])
    },
    oppositePlayer: {
        hands: Array(5).map(x => [])
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
