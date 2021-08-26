import usePagination from 'hooks/usePagination'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getCategoryItems } from 'redux/actionCreators'
import CategoryItems from './CategoryItems'
import FindSection from './FindSection'
import Heading from './Heading'

const Category = () => {
  const { category } = useParams()

  const dispatch = useDispatch()

  const { items, isLoading, action } = useSelector((state) => state.app)

  const { currentItems, Pagination } = usePagination({
    items: items,
    perPage: 10,
    action: action,
  })

  const isPeople = category.includes('people')

  useEffect(() => {
    dispatch(getCategoryItems(category))
  }, [dispatch])

  return (
    <div className="container" id="page">
      {isPeople ? <FindSection /> : null}
      <Heading isPeople={isPeople} />
      <Pagination />
      <CategoryItems
        items={currentItems}
        loading={isLoading}
        isPeople={isPeople}
      />
    </div>
  )
}

export default Category
