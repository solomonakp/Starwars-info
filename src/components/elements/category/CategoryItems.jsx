import { memo } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import CategoryTile from './CategoryTile'

const CategoryItems = memo((props) => {
  const { items, loading } = props

  if (loading) {
    return <h2>loading....</h2>
  }

  return (
    <ul className="list-group mb-4">
      {items.map((item, index) => (
        <CategoryTile item={item} key={index} />
      ))}
    </ul>
  )
})

CategoryItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
  loading: PropTypes.bool.isRequired,
}

export default CategoryItems
