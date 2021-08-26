import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchValue } from 'redux/actions'
import { findPeople } from 'redux/actionCreators'
import Button from 'components/layout/Button'
import { searchBox } from 'styles/SearchBox.module.scss'
import SearchIcon from 'components/svgs/SearchIcon'

const SearchBox = memo((props) => {
  const { search } = props

  const dispatch = useDispatch()

  const buttonControl = search === '' ? true : false

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
    <div className={`${searchBox} input-group me-sm-auto mb-5 mb-sm-0`}>
      <input
        type="text"
        name="search"
        id="input"
        placeholder="Search People Name"
        className="form-control border-0"
        value={search}
        onChange={(e) => {
          handleChange(e.target.value)
        }}
        aria-label="Search Box"
        aria-describedby="search-button"
      />
      <Button
        id="search-button"
        onClick={() => handleClick()}
        role="button"
        disabled={buttonControl}
      >
        <SearchIcon />
      </Button>
    </div>
  )
})

SearchBox.propTypes = {}

export default SearchBox
