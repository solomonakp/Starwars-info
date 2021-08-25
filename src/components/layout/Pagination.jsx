import { memo } from 'react'
import PropTypes from 'prop-types'

const Pagination = memo((props) => {
  const { postPerPage, totalItems, paginate, currentPage } = props

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / postPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="w-100">
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <li key={index} className="page-item">
            <a
              onClick={(e) => {
                e.preventDefault()

                paginate(number)
              }}
              href="!#"
              className="page-link"
              style={{ color: currentPage ? 'blue' : 'black' }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
})

Pagination.propTypes = {
  postPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default Pagination
