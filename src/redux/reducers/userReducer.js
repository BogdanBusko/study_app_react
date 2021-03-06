import {
  LOADING_USER_DATA,
  SET_USER_DATA,
  USER_DATA_LOADED
} from '../actions/fetchUserData';

const initialState = {
  loading: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING_USER_DATA:
    case SET_USER_DATA:
    case USER_DATA_LOADED:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}

export default userReducer;
