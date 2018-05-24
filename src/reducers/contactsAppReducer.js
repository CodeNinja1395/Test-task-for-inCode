import {FETCH_DATA, SELECT_USER, SEARCH_USER} from '../actions/types';

const initialState = {
  users: [],
  selectedUser: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        users: action.payload.data
      };
    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload.data
      };
    case SEARCH_USER:
      return {
        ...state,
        users: action.payload.data
      };

    default:
      return state;

  }
}
