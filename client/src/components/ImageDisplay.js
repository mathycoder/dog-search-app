import React from 'react'
import { connect } from 'react-redux'
import './css/image-display.css'

const ImageDisplay = ({ images }) => {

  const renderImages = () => {
    return images.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`dog-image${index+1}`}
      />
    ))
  }

  return (
    <div className="images-wrapper">
      {renderImages()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    images: state.search.images
  }
}

export default connect(mapStateToProps, null)(ImageDisplay)
