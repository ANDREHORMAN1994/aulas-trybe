import { combineReducers } from 'redux'
import { typeActions } from '../actions'

const initState = {
  text: '',
  showText: '',
}

const reducerOne = (state = initState, action) => {
  switch(action.type) {
    case(typeActions.CHANGE_TEXT):
      return { ...state, text: action.value };
    case(typeActions.SHOW_TEXT):
      return { ...state, showText: state.text, text: '' };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducerOne,
})

export default rootReducer;
