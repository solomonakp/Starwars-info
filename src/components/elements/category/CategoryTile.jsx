import PropTypes from 'prop-types'
import { memo } from 'react'

const CategoryTile = memo((props) => {
  const { item } = props

  return <li className="list-group-item">{item.name}</li>
})

CategoryTile.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CategoryTile
