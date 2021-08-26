import React from 'react'
import PropTypes from 'prop-types'
import planets from 'assets/planets.jpg'
import placeholder from 'assets/placeholder.jpg'
import { imageContainer } from 'styles/ImageDetail.module.scss'

const ImageDetail = (props) => {
  const { isPeople } = props

  return (
    <div className="col-12 col-md-7">
      <div className={`${imageContainer} w-100 overflow-hidden`}>
        <img
          src={isPeople ? placeholder : planets}
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  )
}

ImageDetail.propTypes = {
  isPeople: PropTypes.bool.isRequired,
}

export default ImageDetail
