import React from 'react'
import PropTypes from 'prop-types'

const Heading = (props) => {
  const { isPeople } = props

  return (
    <div className="container">
      <header>
        <h3 className="mt-5 mb-4">{isPeople ? 'Characters' : 'Planets'}</h3>
      </header>
    </div>
  )
}

Heading.propTypes = {
  isPeople: PropTypes.bool.isRequired,
}

export default Heading
