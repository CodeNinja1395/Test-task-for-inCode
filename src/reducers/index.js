import {combineReducers} from 'redux';
import contactsAppReducer from './contactsAppReducer';

export default combineReducers({
  data: contactsAppReducer
});
