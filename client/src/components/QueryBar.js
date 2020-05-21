import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { searchBreeds, fetchAllBreeds } from '../actions/searchActions.js'
import './css/query-bar.css'

const QueryBar = ({ fetchAllBreeds, allBreeds, subBreedObject, searchBreeds }) => {
  const [searchBreed, setSearchBreed] = useState('')
  const [filteredBreedList, setFilteredBreedList] = useState([])
  const [selectedBreed, setSelectedBreed] = useState(null)
  const [subBreedList, setSubBreedList] = useState([])
  const [selectedSubBreed, setSelectedSubBreed] = useState(null)

  useEffect(() => {
    fetchAllBreeds()
  }, [])

  useEffect(() => {
    if (allBreeds.length > 0) setSelectedBreed(allBreeds[0])
  }, [allBreeds])

  useEffect(() => {
      setFilteredBreedList(allBreeds.filter(item => item.includes(searchBreed)))
  }, [searchBreed, allBreeds])

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
      <div className="breed-form">
        <input
          type="text"
          placeholder="Enter breed"
          value={searchBreed}
          onChange={e => {
            setSearchBreed(e.target.value)
          }}
        />
      </div>
    )
  }

  const renderFloatMenu = () => {
    return (
      <div className="breed-form-choices">
        {filteredBreedList.map((breed, index) => (
          <div key={index}>
            {breed}
          </div>
        ))}
      </div>
    )
  }

  // const renderBreedDropdown = () => {
  //   return (
  //     <div className="dropdown-wrapper">
  //       <div className="dropdown-label">Breed:</div>
  //       <select onChange={e => setSelectedBreed(e.target.value)} >
          // {allBreeds.map((breed, index) => (
          //   <option
          //     key={`breed-${index}`}
          //     value={breed}
          //   >
          //     {breed}
          //   </option>
          // ))}
  //       </select>
  //     </div>
  //   )
  // }

  const renderSubBreedDropdown = () => {
    return (
      <div className="dropdown-wrapper">
        <div className="dropdown-label">SubBreed:</div>
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
      {renderFloatMenu()}
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
