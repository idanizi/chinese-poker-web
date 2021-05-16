import {Dispatch} from 'redux'
import { userInfo } from 'os'
import { gunzip } from 'zlib'

export type FluxActionType<T = any> = {
    type: string,
    payload: T,
    meta?: any,
    error?: Error,
}

export interface Gui{
    loading: boolean;
}

export type StoreStateType = {
    gui: Gui,
}

export type GetState = () => StoreStateType

export type ActionCreator<T> = (payload: T) => FluxActionType<T>

export type ThunkCreator<T> = (payload: T) => (dispatch: Dispatch, getState: GetState) => void