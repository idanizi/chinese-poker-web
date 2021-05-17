import produce from "immer";
import { FluxActionType } from "src/models";

const initialState = {

}

const userReducer = (state = initialState, action: FluxActionType) => produce(state, draft => {
    switch (action.type) {
        // todo user reducer
    }
})

export default userReducer;
