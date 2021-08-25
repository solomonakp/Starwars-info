import usePagination from 'hooks/usePagination'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getCategoryItems } from 'redux/actionCreators'
import CategoryItems from './CategoryItems'
import SearchBox from './SearchBox'

const Category = () => {
  const { category } = useParams()

  const dispatch = useDispatch()

  const { items, isLoading, search, action } = useSelector((state) => state.app)

  const { currentItems, Pagination } = usePagination({
    items: items,
    perPage: 10,
    action: action,
  })

  useEffect(() => {
    dispatch(getCategoryItems(category))
  }, [dispatch])

  return (
    <div>
      <SearchBox search={search} />
      <Pagination />
      <CategoryItems items={currentItems} loading={isLoading} />
    </div>
  )
}

export default Category
