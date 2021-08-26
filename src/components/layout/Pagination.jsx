import { memo } from 'react'
import PropTypes from 'prop-types'

const Pagination = memo((props) => {
  const { postPerPage, totalItems, paginate, currentPage } = props

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / postPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="w-100 mb-4 pb-1">
      <div className="container">
        <ul className="pagination flex-wrap justify-content-left">
          {pageNumbers.map((number, index) => (
            <li
              key={index}
              className={`mb-2 mb-sm-0 page-item ${
                currentPage === number && 'active'
              }`}
            >
              <a
                onClick={(e) => {
                  e.preventDefault()

                  paginate(number)
                }}
                href="!#"
                className="page-link "
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
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
