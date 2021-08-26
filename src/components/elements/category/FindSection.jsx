import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './Filter'
import SearchBox from './SearchBox'

const FindSection = () => {
  const { search, filter, isShowing } = useSelector((state) => state.app)

  return (
    <section className="filter-section">
      <div className="container">
        <div className="d-flex flex-column flex-sm-row">
          <SearchBox search={search} />
          <Filter filter={filter} visible={isShowing} />
        </div>
      </div>
    </section>
  )
}

export default FindSection
