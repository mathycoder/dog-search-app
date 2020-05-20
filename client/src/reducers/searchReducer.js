import { combineReducers } from 'redux'

const searchReducer = combineReducers({
  searchTerm: searchTermReducer
})

export default searchReducer

function searchTermReducer(state = null, action) {

  switch(action.type) {
    default:
      return state;
  }
}
