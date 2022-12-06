import { combineReducers } from 'redux'
import IsContactFormOpen from './contactFormReducer'
import IsDrawerOpen from './drawerReducer'
import EventData from './eventDataReducer'
import CurrentEvent from './eventFormReducer'

const reducers = combineReducers({
    IsDrawerOpen, IsContactFormOpen, EventData, CurrentEvent
})
export type RootState = ReturnType<typeof reducers>
export default reducers