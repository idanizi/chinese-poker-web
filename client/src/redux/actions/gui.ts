import { ActionCreator } from "../../models"

export const SET_LOADING = 'SET_LOADING'

export const setLoading: ActionCreator<boolean> = (payload) => ({
    type: SET_LOADING,
    payload
})
