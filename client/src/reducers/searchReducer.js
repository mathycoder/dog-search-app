import { combineReducers } from 'redux'

const searchReducer = combineReducers({
  searchTerm: searchTermReducer
})

export default searchRedcuer

function searchTermReducer(state = {}, action) {

  switch(action.type) {
    default:
      return state;
  }
}
