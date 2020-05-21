import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { searchBreeds, fetchAllBreeds } from '../actions/searchActions.js'
import './css/query-bar.css'

const QueryBar = ({ fetchAllBreeds, allBreeds, subBreedObject, searchBreeds }) => {
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

  useEffect(() => {
    const query = selectedSubBreed
      ? `${selectedBreed}-${selectedSubBreed}`
      : selectedBreed
    searchBreeds(query)
  }, [selectedBreed, selectedSubBreed])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const query = selectedSubBreed
  //     ? `${selectedBreed}-${selectedSubBreed}`
  //     : selectedBreed
  //   searchBreeds(query)
  // }

  const renderBreedDropdown = () => {
    return (
      <div className="dropdown-wrapper">
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
      </div>
    )
  }

  const renderSubBreedDropdown = () => {
    return (
      <div className="dropdown-wrapper">
        <select onChange={e => setSelectedSubBreed(e.target.value)}>
          {subBreedList.map((subBreed, index) => (
            <option key={`subBreed-${index}`} value={subBreed}>{subBreed}</option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <>
      {renderBreedDropdown()}
      {subBreedList.length > 0 ? renderSubBreedDropdown() : null}
    </>
  )
}

// <form onSubmit={handleSubmit}>
//   {renderBreedDropdown()}
//   {subBreedList.length > 0 ? renderSubBreedDropdown() : null}
// </form>

// <input
//   type="submit"
//   value="Search Breeds"
// />

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
