import Button from 'components/layout/Button'
import SliderIcon from 'components/svgs/SliderIcon'
import { useEffect, useRef, useCallback, memo } from 'react'
import { useDispatch } from 'react-redux'
import { findPeople } from 'redux/actionCreators'
import { setFilterValue, setIsShowing } from 'redux/actions'
import GenderFilter from './GenderFilter'
import PropTypes from 'prop-types'
import useOutsideClick from 'hooks/useOutsideClick'

const Filter = memo((props) => {
  const { filter, visible } = props

  const dispatch = useDispatch()

  const isMounted = useRef(false)

  const filterContainer = useRef(null)

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value

      const inFilter = filter.find((category) => category === value)

      if (inFilter) {
        const newFilter = filter.filter((category) => category !== value)
        dispatch(setFilterValue(newFilter))
      } else {
        const newFilter = [...filter, value]
        dispatch(setFilterValue(newFilter))
      }
    },
    [dispatch, filter]
  )

  const filterPeople = useCallback(() => {
    dispatch(findPeople())
  }, [dispatch])

  const handleToggle = useCallback(
    (value) => {
      dispatch(setIsShowing(value))
    },
    [dispatch]
  )

  useEffect(() => {
    if (isMounted.current) {
      filterPeople()
    } else {
      isMounted.current = true
    }

    return
  }, [filter, dispatch])

  useOutsideClick(filterContainer, () => {
    if (visible) {
      handleToggle(false)
    }
  })

  return (
    <div className="position-relative" ref={filterContainer}>
      <Button onClick={() => handleToggle(!visible)}>
        Filters <SliderIcon />{' '}
      </Button>
      {visible ? <GenderFilter handleChange={handleChange} /> : null}
    </div>
  )
})

Filter.propTypes = {
  filter: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default Filter
