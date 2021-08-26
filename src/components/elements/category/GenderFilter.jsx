import React from 'react'
import PropTypes from 'prop-types'
import CheckBox from 'components/layout/CheckBox'
import { container } from 'styles/GenderFilter.module.scss'

const checkBoxes = [
  {
    id: 'male',
    label: 'Male',
    value: 'male',
  },
  {
    id: 'female',
    label: 'Female',
    value: 'female',
  },
  {
    id: 'na',
    label: 'Not Applicaple',
    value: 'n/a',
  },
]

const GenderFilter = (props) => {
  const { handleChange } = props
  return (
    <div className={`${container} position-absolute p-3`}>
      <header className="mb-3 ">
        <p className="mb-0 me-auto">
          <strong>Gender</strong>
        </p>
      </header>
      <div>
        {checkBoxes.map((checkBox, index) => (
          <CheckBox {...checkBox} onChange={handleChange} key={index} />
        ))}
      </div>
    </div>
  )
}

GenderFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
}

export default GenderFilter
