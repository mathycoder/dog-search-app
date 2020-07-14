import React from 'react'
import { connect } from 'react-redux'
import Timer from './Timer'
import './css/image-display.css'

const ImageDisplay = ({ images }) => {
  const renderImages = () => {
    return images.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`dog-${index+1}`}
      />
    ))
  }

  const renderImagesWrapper = () => (
    <div className={`images-wrapper`}>
      {renderImages()}
    </div>
  )

  return (
    <>
      {images.length > 0 ? renderImagesWrapper() : <Timer />}
    </>
  )
}

const mapStateToProps = state => {
  return {
    images: state.search.images
  }
}

export default connect(mapStateToProps, null)(ImageDisplay)
