import PropTypes from 'prop-types'
import { memo, useMemo } from 'react'
import placeholder from 'assets/placeholder.jpg'
import DescriptionItem from './DescriptionItem'
import { tile, tile__image, tile__name } from 'styles/CategoryTile.module.scss'
import { Link } from 'react-router-dom'
import { getId } from 'utils/functions'
import { useLocation } from 'react-router'

const PeopleTile = memo((props) => {
  const { pathname } = useLocation()

  const {
    item: { name, birth_year, gender, url },
  } = props

  const creatRoute = (url) => {
    return pathname + '/' + getId(url) + '/'
  }

  const route = useMemo(() => creatRoute(url), [url])

  return (
    <div className="col mt-0" data-testid="category-tile">
      <Link
        className={`${tile} p-3 position-relative overflow-hidden text-left w-100 mb-5`}
        to={route}
      >
        <div className={`${tile__image} overflow-hidden`}>
          <img
            src={placeholder}
            alt={`${name}`}
            className="img-fluid trans-image"
          />
        </div>

        <div>
          <p className={`${tile__name}`}>
            <b>{name}</b>
          </p>
          <div className="d-flex">
            <DescriptionItem title="DOB" value={birth_year} className="me-5" />
            <DescriptionItem title="Gender" value={gender} />
          </div>
        </div>
      </Link>
    </div>
  )
})

PeopleTile.propTypes = {
  item: PropTypes.object.isRequired,
}

export default PeopleTile
