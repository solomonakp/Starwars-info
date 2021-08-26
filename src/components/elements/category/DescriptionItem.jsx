import React from 'react'
import PropTypes from 'prop-types'
import { subtle } from 'styles/DescriptionItem.module.scss'

const DescriptionItem = (props) => {
  const { title, value, className } = props
  return (
    <div className={`inline-block text-left ${className}`}>
      <div className={`${subtle} text-dark`}>{title}</div>
      <div className="text-secondary">{value}</div>
    </div>
  )
}

DescriptionItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DescriptionItem
