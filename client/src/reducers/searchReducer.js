import { combineReducers } from 'redux'

const searchReducer = combineReducers({
  images: imagesReducer,
  allBreeds: allBreedsReducer,
  allBreedsSubBreeds: allBreedsSubBreedsReducer
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

function allBreedsReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_ALL_BREEDS':
      return Object.keys(action.breeds)

    default:
      return state;
  }
}

function allBreedsSubBreedsReducer(state = {}, action) {
  switch(action.type) {
    case 'FETCH_ALL_BREEDS':
      return action.breeds

    default:
      return state;
  }
}
