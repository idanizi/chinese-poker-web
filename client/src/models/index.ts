import { RouterState } from 'connected-react-router';
import { Dispatch } from 'redux'
import { cardTypes } from 'src/interfaces/cards'

export type FluxActionType<T = any> = {
    type: string,
    payload?: T,
    meta?: any,
    error?: Error,
}

export interface Gui {
    loading: boolean;
}

export type CardName = string | keyof typeof cardTypes;
export interface Cards {
    deck: CardName[],
    currentPlayer: {
        hands: CardName[][]
    },
    oppositePlayer: {
        hands: CardName[][]
    },
    isCurrentPlayerTurn: boolean,
}

export type StoreStateType = {
    router: RouterState<unknown>,
    users: any,
    cards: Cards,
    gui: Gui,
}

export type GetState = () => StoreStateType

export type ActionCreator<T = any> = (payload?: T) => FluxActionType<T>

export type ThunkCreator<T = any> = (payload?: T) => (dispatch: Dispatch, getState: GetState) => any
