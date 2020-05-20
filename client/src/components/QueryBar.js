import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { searchBreeds, fetchAllBreeds } from '../actions/searchActions.js'

const QueryBar = ({ fetchAllBreeds }) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetchAllBreeds()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    searchBreeds(query)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

const mapDispatchToProps = dispatch => {
  return {
    searchBreeds: breed => dispatch(searchBreeds(breed)),
    fetchAllBreeds: () => dispatch(fetchAllBreeds())
  }
}

export default connect(null, mapDispatchToProps)(QueryBar)
