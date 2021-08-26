import { memo } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import PeopleTile from './PeopleTile'
import PlanetTile from './PlanetTile'
import EmptySearch from './EmptySearch'
import Loader from 'components/layout/Loader'

const CategoryItems = memo((props) => {
  const { items, loading, isPeople } = props

  if (loading) {
    return <Loader fixed={true} />
  }

  if (items.length === 0) {
    return <EmptySearch />
  }

  return (
    <section>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3   row-cols-lg-4 g-5 mt-0 align-items-center">
          {items.map((item, index) =>
            isPeople ? (
              <PeopleTile item={item} key={index} />
            ) : (
              <PlanetTile item={item} key={index} />
            )
          )}
        </div>
      </div>
    </section>
  )
})

CategoryItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
  loading: PropTypes.bool.isRequired,
}

export default CategoryItems
