import {FETCH_DATA, SELECT_USER, CHANGE_INPUT} from '../actions/types';

const initialState = {
  users: [],
  displayedUsers: [],
  selectedUser: null,
  searchValue: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        users: action.payload.data,

      };
    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload
      };
    case CHANGE_INPUT:
      return {
        ...state,
        searchValue: action.payload
      };

    default:
      return state;

  }
}

export function filterUsers(state) {
  let contacts = state.data.users;
  let inputValue = state.data.searchValue;

  let iterate = function(obj, callback) {
      for (var property in obj) {
          if (obj.hasOwnProperty(property)) {
              if (typeof obj[property] === "object") {
                  iterate(obj[property], callback);
              } else {
                  callback(obj[property]);
              }
          }
      }
  }

  return contacts.filter(el => {

    let arr = [];
    iterate(el, function (e) {
      if (e!==el.general.avatar)
         arr.push(e);
    });

    for (var i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase().indexOf(inputValue) !== -1){
          el.foundValue = arr[i];
          return arr[i];

        }
      }
  });
}
