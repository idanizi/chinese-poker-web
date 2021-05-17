import * as actions from '../actions/gui'
import { Gui, FluxActionType } from '../../models'
import { produce } from 'immer'

const initialState: Gui = {
    loading: false,
}

const guiReducer = (state = initialState, action: FluxActionType) =>
    produce(state, draft => {
        switch (action.type) {

            case actions.SET_LOADING:
                draft.loading = action.payload as boolean
                break;
        }
    })

export default guiReducer