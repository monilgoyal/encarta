import { FETCH_EVENT_DATA } from "../action-creator/actionType";

export const FormInitialState = { "id": 100, "date": "23 December", "desc": "\u003cp\u003e- Venue: CSE DEPARTMENT\u003c/p\u003e\u003cp\u003e- Price:  ₹100 \u003c/p\u003e\u003cp\u003e- Entries: Team Only \u003c3\u003e  \u003c/p\u003e ", "time": "5:00 PM", "price": 100, "title": "Triwizard Hunt", "rounds": "1: Quiz,2: Complete/Debug the code,3: Competitive Pogramming", "subtitle": "Unravel the mystries of hogwarts", "thumbUrl": "https://cdn.dorik.com/6170fc2c54b34900117ea7a5/632a2aa24a33d3001191b969/images/80036573_189591978756043_8493836959682001276_n_bueyhppd.jpg", "type": 'individual' };


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