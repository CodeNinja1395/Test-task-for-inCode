import {FETCH_DATA, SELECT_USER, CHANGE_INPUT} from './types';
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

export const searchFilter = (value) => dispatch => {
  dispatch({
    type: CHANGE_INPUT,
    payload: value
  });
};

export const selectContact = (user) => dispatch => {
  console.log('hello from select');
  dispatch({
    type: SELECT_USER,
    payload: user
  })
}
