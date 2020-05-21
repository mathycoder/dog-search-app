import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { searchBreeds, fetchAllBreeds } from '../actions/searchActions.js'
import './css/query-bar.css'

const QueryBar = ({ fetchAllBreeds, allBreeds, subBreedObject, searchBreeds }) => {
  const [searchBreed, setSearchBreed] = useState('')
  const [filteredBreedList, setFilteredBreedList] = useState([])
  const [subBreedList, setSubBreedList] = useState([])
  const [selectedSubBreed, setSelectedSubBreed] = useState(null)
  const [renderFloat, _setRenderFloat] = useState(false)
  const renderFloatRef = useRef(renderFloat)
  const setRenderFloat = data => {
    renderFloatRef.current = data
    _setRenderFloat(data)
  }

  const floatingMenuRef = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
  }, [])

  const handleClick = (e) => {
    if (renderFloatRef.current){
      if (floatingMenuRef.current.contains(e.target)) { return }
      setRenderFloat(false)
    }
  }

  useEffect(() => {
    fetchAllBreeds()
  }, [])

  useEffect(() => {
      setFilteredBreedList(allBreeds.filter(item => item.includes(searchBreed.toLowerCase())))
  }, [searchBreed, allBreeds])


  useEffect(() => {
    if (searchBreed){
      const list = subBreedObject[searchBreed] || []
      setSubBreedList(list)
      if (list.length === 0) setSelectedSubBreed(null)
    }
  }, [searchBreed])

  useEffect(() => {
    subBreedList.length > 0
      ? setSelectedSubBreed(subBreedList[0])
      : setSelectedSubBreed(null)
  }, [subBreedList])

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = selectedSubBreed
      ? `${searchBreed}-${selectedSubBreed}`
      : searchBreed
    searchBreeds(query)
    setRenderFloat(false)
  }

  const renderBreedDropdown = () => {
    return (
      <div className="breed-form">
        <input
          type="text"
          placeholder="Enter breed"
          value={searchBreed}
          onClick={() => setRenderFloat(true)}
          onChange={e => {
            setSearchBreed(e.target.value)
          }}
        />
      </div>
    )
  }

  const renderFloatMenu = () => {
    return (
      <div className="breed-form-choices" ref={floatingMenuRef}>
        {filteredBreedList.map((breed, index) => (
          <div
            className="breed-option"
            onClick={(e) => {
              setSearchBreed(breed)
              setRenderFloat(false)
            }}
            key={index}>
            <div className="paw-print" />
            {breed}
          </div>
        ))}
      </div>
    )
  }

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
    <div className="query-bar-wrapper">
      <div className="search-form">
        {renderBreedDropdown()}
        {subBreedList.length > 0 ? renderSubBreedDropdown() : null}
        <button onClick={handleSubmit}>Search</button>
      </div>
      {renderFloat ? renderFloatMenu() : null}
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
