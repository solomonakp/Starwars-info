import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchValue } from 'redux/actions'
import { findPeople } from 'redux/actionCreators'

const SearchBox = memo((props) => {
  const { search } = props

  const dispatch = useDispatch()

  const handleChange = useCallback(
    (value) => {
      dispatch(setSearchValue(value))
    },
    [dispatch]
  )

  const handleClick = useCallback(() => {
    dispatch(findPeople())
  }, [dispatch])

  return (
    <section>
      <div className="d-flex">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search People Name"
          className="me-1"
          value={search}
          onChange={(e) => {
            handleChange(e.target.value)
          }}
        />
        <button onClick={() => handleClick()}>Search</button>
      </div>
    </section>
  )
})

SearchBox.propTypes = {}

export default SearchBox
