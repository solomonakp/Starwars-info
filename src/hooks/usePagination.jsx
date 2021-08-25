import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Pagination from 'components/layout/Pagination'

const usePagination = (props) => {
  const { perPage, items, action } = props
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastItem = currentPage * perPage
  const indexOfFirstItem = indexOfLastItem - perPage
  const totalItems = items.length

  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    if (action === 'RESET') {
      console.log('i was called')
      setCurrentPage(1)
    }
    return () => {}
  }, [action])

  const SetUpPagination = () => (
    <Pagination
      postPerPage={perPage}
      paginate={paginate}
      currentPage={currentPage}
      totalItems={totalItems}
    />
  )

  return {
    paginate,
    currentPage,
    totalItems,
    currentItems,
    itemsPerPage: perPage,
    Pagination: SetUpPagination,
  }
}

usePagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  action: PropTypes.oneOf(['RESET', '']),
}

usePagination.defaultProps = {
  perPage: 10,
}

export default usePagination
