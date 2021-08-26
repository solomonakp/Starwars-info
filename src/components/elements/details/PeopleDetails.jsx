import React from 'react'
import DescriptionItem from '../category/DescriptionItem'
import { box, row, details } from 'styles/Details.module.scss'
import PropTypes from 'prop-types'
const PeopleDetails = (props) => {
  const { item } = props

  return (
    <div className={`${details} col-12 col-md-5`}>
      <h1 className="mb-4">{item?.name} </h1>
      <header>
        <p>
          <strong>Personal details</strong>
        </p>
      </header>

      <div className={`${box} py-4 px-2`}>
        <div className="container">
          <div className={`${row} row pb-2 `}>
            <div className="col-6">
              <DescriptionItem title="Height" value={item?.height + 'cm'} />
            </div>
            <div className="col-6">
              <DescriptionItem title="Mass" value={item?.mass + 'kg'} />
            </div>
          </div>

          <div className={`${row} row pb-2 mt-3 `}>
            <div className="col-6">
              <DescriptionItem title="Hair colour" value={item?.hair_color} />
            </div>
            <div className="col-6">
              <DescriptionItem title="Skin colour" value={item?.skin_color} />
            </div>
          </div>
          <div className={`${row} row pb-2 mt-3`}>
            <div className="col-6">
              <DescriptionItem title="Eye colour" value={item?.eye_color} />
            </div>
            <div className="col-6">
              <DescriptionItem title="Birth year" value={item?.birth_year} />
            </div>
          </div>

          <div className={`row pb-2 mt-3`}>
            <div className="col-6">
              <DescriptionItem title="Gender" value={item?.gender} />
            </div>
          </div>
        </div>
      </div>

      <header className="mt-5">
        <p>
          <strong>Statistics</strong>
        </p>
      </header>

      <div className={`${box} py-4 px-2`}>
        <div className="container">
          <div className={`${row} row pb-2 `}>
            <div className="col-6">
              <DescriptionItem title="Films" value={item?.films?.length} />
            </div>
            <div className="col-6">
              <DescriptionItem title="Species" value={item?.species?.length} />
            </div>
          </div>
          <div className={`row pb-2 mt-3`}>
            <div className="col-6">
              <DescriptionItem title="Vehicle" value={item?.vehicles?.length} />
            </div>
            <div className="col-6">
              <DescriptionItem
                title="Starships"
                value={item?.starships?.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PeopleDetails.propTypes = {
  item: PropTypes.object.isRequired,
}

export default PeopleDetails
