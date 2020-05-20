import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchBreeds } from '../actions/searchActions.js'

const QueryBar = ({ searchBreeds }) => {
  const [query, setQuery] = useState('')

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
    searchBreeds: breed => dispatch(searchBreeds(breed))
  }
}

export default connect(null, mapDispatchToProps)(QueryBar)
