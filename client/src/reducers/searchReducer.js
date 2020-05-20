import { combineReducers } from 'redux'

const searchReducer = combineReducers({
  images: imagesReducer
})

export default searchReducer

function imagesReducer(state = [], action) {

  switch(action.type) {
    case 'SEARCH_BREEDS':
      return action.images


    default:
      return state;
  }
}
