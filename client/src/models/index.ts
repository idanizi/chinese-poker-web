import { Dispatch } from 'redux'

export type FluxActionType<T = any> = {
    type: string,
    payload?: T,
    meta?: any,
    error?: Error,
}

export interface Gui {
    loading: boolean;
}

export type StoreStateType = {
    gui: Gui,
}

export type GetState = () => StoreStateType

export type ActionCreator<T = any> = (payload?: T) => FluxActionType<T>

export type ThunkCreator<T = any> =
    ((payload: T) => (dispatch: Dispatch, getState: GetState) => void)
    | ((...payload: any[]) => (dispatch: Dispatch, getState: GetState) => any)
