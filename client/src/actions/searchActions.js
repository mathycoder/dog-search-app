export function searchBreeds(breed){
  return (dispatch) => {
    dispatch({ type: 'START_SEARCH_BREEDS' })
     fetch(`/search/${breed}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(json => {
        if (json.error){
          console.log("Unknown Breed")
        } else {
          dispatch({ type: 'SEARCH_BREEDS', images: json.message })
        }
      })
      .catch(console.log)
  }
}

export function fetchAllBreeds(){
  return (dispatch) => {
    dispatch({ type: 'START_FETCH_ALL_BREEDS' })
     fetch(`/fetchbreeds`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(json => {
        if (json.error){
          console.log("Error fetching breeds")
        } else {
          console.log(json.message)
          dispatch({ type: 'FETCH_ALL_BREEDS', breeds: json.message })
        }
      })
      .catch(console.log)
  }
}
