import { drawerAction, contactFormAction, FETCH_EVENT_DATA, CAPTURED_EVENT } from "./actionType"

export const drawerToggle = () => ({
    type: drawerAction,
})
export const contactFormToggle = () => ({
    type: contactFormAction,
})

export const getEvents = () => dispatch =>
    fetch(process.env.NEXT_PUBLIC_EVENTS_URL)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            dispatch({
                type: FETCH_EVENT_DATA,
                payload: {
                    fetchSuccess: true,
                    Events: response
                }
            });
        }).catch(() => {
            dispatch({
                type: FETCH_EVENT_DATA,
                payload: {
                    fetchSuccess: false,
                    Events: {}
                }
            });
        });
export const currentEvent = (data) => dispatch => {

    dispatch({
        type: CAPTURED_EVENT,
        payload: data
    });
}




