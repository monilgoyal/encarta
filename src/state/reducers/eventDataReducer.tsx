import { FETCH_EVENT_DATA } from "../action-creator/actionType";

export const EventInitialState = {
    Events: {},
    fetchSuccess: true
};


const EventData = (state = EventInitialState, action) => {
    switch (action.type) {
        case FETCH_EVENT_DATA:
            return {
                ...state,
                Events: action.payload.Events,
                fetchSuccess: action.payload.fetchSuccess
            };
        default:
            return state;
    }
}
export default EventData;