import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './css/image-display.css'

const ImageDisplay = ({ images }) => {
  const [loadingImages, setLoadingImages] = useState(false)

  useEffect(() => {
    setLoadingImages(true)
    window.setTimeout(() => {
      setLoadingImages(false)
    }, 500)
  }, [images])

  const renderImages = () => {
    return images.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`dog-${index+1}`}
      />
    ))
  }

  return (
    <div className={`images-wrapper ${loadingImages ? 'loading' : ''}`}>
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
