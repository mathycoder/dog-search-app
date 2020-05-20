import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { searchBreeds, fetchAllBreeds } from '../actions/searchActions.js'

const QueryBar = ({ fetchAllBreeds, allBreeds }) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetchAllBreeds()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    searchBreeds(query)
  }

  const renderBreedDropdown = () => {
    return (
      <select>
        {allBreeds.map(breed => (
          <option value={breed}>{breed}</option>
        ))}
      </select>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderBreedDropdown()}
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
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
    allBreeds: state.search.allBreeds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchBreeds: breed => dispatch(searchBreeds(breed)),
    fetchAllBreeds: () => dispatch(fetchAllBreeds())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryBar)
