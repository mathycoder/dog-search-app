import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { searchBreeds, fetchAllBreeds } from '../actions/searchActions.js'

const QueryBar = ({ fetchAllBreeds, allBreeds, subBreedObject }) => {
  const [selectedBreed, setSelectedBreed] = useState(null)
  const [subBreedList, setSubBreedList] = useState([])
  const [selectedSubBreed, setSelectedSubBreed] = useState(null)

  useEffect(() => {
    fetchAllBreeds()
  }, [])

  useEffect(() => {
    if (allBreeds.length > 0) {
      setSelectedBreed(allBreeds[0])
    }
  }, [allBreeds])

  useEffect(() => {
    if (selectedBreed){
      const list = subBreedObject[selectedBreed]
      setSubBreedList(list)
      if (list.length === 0) setSelectedSubBreed(null)
    }
  }, [selectedBreed])

  useEffect(() => {
    subBreedList.length > 0
      ? setSelectedSubBreed(subBreedList[0])
      : setSelectedSubBreed(null)
  }, [subBreedList])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Breed:", selectedBreed)
    console.log("Sub-Breed:", selectedSubBreed)
    //const query =
    // searchBreeds(query)
  }

  const renderBreedDropdown = () => {
    return (
      <select onChange={e => setSelectedBreed(e.target.value)} >
        {allBreeds.map((breed, index) => (
          <option
            key={`breed-${index}`}
            value={breed}
          >
            {breed}
          </option>
        ))}
      </select>
    )
  }

  const renderSubBreedDropdown = () => {
    return (
      <select onChange={e => setSelectedSubBreed(e.target.value)}>
        {subBreedList.map((subBreed, index) => (
          <option key={`subBreed-${index}`} value={subBreed}>{subBreed}</option>
        ))}
      </select>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderBreedDropdown()}
        {subBreedList.length > 0 ? renderSubBreedDropdown() : null}
        <input
          type="submit"
          value="Search Breeds"
        />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    allBreeds: state.search.allBreeds,
    subBreedObject: state.search.allBreedsSubBreeds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchBreeds: breed => dispatch(searchBreeds(breed)),
    fetchAllBreeds: () => dispatch(fetchAllBreeds())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryBar)
