import { SAVE_TOKEN } from '../types';

const initialState = '';

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
