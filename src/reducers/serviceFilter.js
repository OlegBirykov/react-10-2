import { CHANGE_FILTER } from '../actions/actionTypes';

const initialState = '';

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      const { filter } = action.payload;
      return filter.toLowerCase();
    default:
      return state;
  }
}