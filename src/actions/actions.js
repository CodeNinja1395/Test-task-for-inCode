import {FETCH_DATA} from './types';

export const fetchData = () => dispatch => {
  fetch('https://raw.githubusercontent.com/CodeNinja1395/Test-task-for-inCode/master/clients.json')
    .then(posts =>
      dispatch({
        type: FETCH_DATA,
        payload: posts
      })
    );
};
