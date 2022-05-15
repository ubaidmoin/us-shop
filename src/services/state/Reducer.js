import { initialState } from './InitialState';

export const actions = {
  SET_LEFT_DRAWER: 'SET_LEFT_DRAWER',
  SET_RIGHT_DRAWER: 'SET_RIGHT_DRAWER'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_LEFT_DRAWER:
      return {
        ...state,
        leftDrawer: action.payload
      };
    case actions.SET_RIGHT_DRAWER:
      return {
        ...state,
        rightDrawer: action.payload
      };
    default:
      return state;
  }
};
