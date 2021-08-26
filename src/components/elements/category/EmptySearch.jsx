import React, { useCallback } from 'react'
import Button from 'components/layout/Button'
import { useDispatch } from 'react-redux'
import { resetSearch } from 'redux/actions'

const EmptySearch = (props) => {
  const dispatch = useDispatch()

  const handleClick = useCallback(() => {
    dispatch(resetSearch())
  }, [dispatch])

  return (
    <div className="text-center">
      <p className="mb-5">
        {' '}
        <strong>Oops !! Couldn't Find What You were Looking for.</strong>
      </p>
      <Button
        onClick={() => {
          handleClick()
        }}
      >
        {' '}
        Back{' '}
      </Button>
    </div>
  )
}

export default EmptySearch
