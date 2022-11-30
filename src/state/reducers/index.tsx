import { combineReducers } from 'redux'
import IsContactFormOpen from './contactFormReducer'
import IsDrawerOpen from './drawerReducer'
const reducers = combineReducers({
    IsDrawerOpen, IsContactFormOpen
})
export type RootState = ReturnType<typeof reducers>
export default reducers