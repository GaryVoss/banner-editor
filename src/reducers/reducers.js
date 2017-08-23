import { combineReducers } from 'redux'
import loggedIn from './reducer.loggedIn'
import profile from './reducer.profile'
import tab from './reducer.tab'
import bnrSize from './reducer.bnrSize'

export default combineReducers({
  loggedIn,
  profile,
  tab,
  bnrSize,
})