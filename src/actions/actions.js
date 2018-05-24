import {FETCH_DATA, SELECT_USER, SEARCH_USER} from './types';
import axios from 'axios';

export const fetchData = () => dispatch => {
  axios.get('https://raw.githubusercontent.com/CodeNinja1395/Test-task-for-inCode/master/clients.json')
    .then(users =>
      dispatch({
        type: FETCH_DATA,
        payload: users
      })
    );
};

export const searchFilter = (event) => dispatch => {
  console.log('hello from searchFilter');
  dispatch({
    type: SEARCH_USER,
    payload: {}
  })
};
//export const selectUser = () => dispatch => {};
