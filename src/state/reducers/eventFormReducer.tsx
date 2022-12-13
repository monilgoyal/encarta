import { FETCH_EVENT_DATA } from "../action-creator/actionType";

export const FormInitialState = {};


const CurrentEvent = (state = FormInitialState, action) => {
    switch (action.type) {
        case FETCH_EVENT_DATA:
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
}
export default CurrentEvent;