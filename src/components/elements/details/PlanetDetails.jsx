import React from 'react'
import DescriptionItem from '../category/DescriptionItem'
import { box, row, details } from 'styles/Details.module.scss'
import PropTypes from 'prop-types'

const PlanetDetails = (props) => {
  const { item } = props

  return (
    <div className={`${details} col-12 col-md-5`}>
      <h1 className="mb-4">{item?.name}</h1>
      <header>
        <p>
          <strong>Planet details</strong>
        </p>
      </header>

      <div className={`${box} py-4 px-2`}>
        <div className="container">
          <div className={`${row} row pb-2 `}>
            <div className="col-6">
              <DescriptionItem
                title="Rotation Period"
                value={item?.rotation_period + 'hrs'}
              />
            </div>
            <div className="col-6">
              <DescriptionItem
                title="Orbital Period"
                value={item?.orbital_period + 'days'}
              />
            </div>
          </div>

          <div className={`${row} row pb-2 mt-3 `}>
            <div className="col-6">
              <DescriptionItem title="Diameter" value={item?.diameter + 'km'} />
            </div>
            <div className="col-6">
              <DescriptionItem title="Climate" value={item?.climate} />
            </div>
          </div>
          <div className={`${row} row pb-2 mt-3`}>
            <div className="col-6">
              <DescriptionItem title="gravity" value={item?.gravity} />
            </div>
            <div className="col-6">
              <DescriptionItem title="terrain" value={item?.terrain} />
            </div>
          </div>
          <div className={` row pb-2 mt-3`}>
            <div className="col-6">
              <DescriptionItem
                title="Surface Water"
                value={item?.surface_water}
              />
            </div>
            <div className="col-6">
              <DescriptionItem title="Population" value={item?.population} />
            </div>
          </div>
        </div>
      </div>

      <header className="mt-5">
        <p>
          <strong>Statsitics</strong>
        </p>
      </header>

      <div className={`${box} py-4 px-2`}>
        <div className="container">
          <div className={`row pb-2 `}>
            <div className="col-6">
              <DescriptionItem title="Films" value={item?.films?.length} />
            </div>
            <div className="col-6">
              <DescriptionItem
                title="Residents"
                value={item?.residents?.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PlanetDetails.propTypes = {
  item: PropTypes.object.isRequired,
}
export default PlanetDetails
