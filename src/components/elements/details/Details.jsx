import Loader from 'components/layout/Loader'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { getItemDetails } from 'redux/actionCreators'
import ImageDetail from './ImageDetail'
import PeopleDetails from './PeopleDetails'
import PlanetDetails from './PlanetDetails'

const Details = () => {
  const dispatch = useDispatch()

  const { pathname } = useLocation()

  const isPeople = pathname.includes('people')

  const { item, isLoading } = useSelector((state) => state.app)

  useEffect(() => {
    dispatch(getItemDetails(pathname))
  }, [dispatch])

  if (isLoading) {
    return <Loader fixed={true} />
  }

  if (Object.entries(item).length === 0) {
    return null
  }
  return (
    <section className="mb-5">
      <div className="container">
        <div className="row">
          <ImageDetail isPeople={isPeople} />
          {isPeople ? (
            <PeopleDetails item={item} />
          ) : (
            <PlanetDetails item={item} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Details
