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
      .then(results => {
        console.log(results)
      })
      .catch(console.log)
  }
}
