import Axios from 'utils/axios'
import {
  setItems,
  fetchingItems,
  fetchedItems,
  findingPeople,
  setAction,
  setItem,
} from './actions'

export const getCategoryItems = (category) => {
  // create route
  let items = []
  const endpoint = category + '/'
  let pageCalls = 0

  return (dispatch) => {
    // get items from a page
    dispatch(fetchingItems())

    const getPage = (url) => {
      Axios.get(url).then((res) => {
        const { next, results, count } = res.data

        // get total number of pages
        const totalPages = Math.ceil(count / 10)

        // if not last page
        if (pageCalls <= totalPages) {
          // add new items
          items = [...items, ...results]

          //   increment page call
          pageCalls++

          // //  try fetching more
          getPage(next)
        } else {
          dispatch(setItems(items))

          setTimeout(() => {
            dispatch(fetchedItems())
          }, 500)
        }
        return res
      })
    }

    getPage(endpoint)
  }
}

export const findPeople = () => {
  return (dispatch) => {
    // get items from a page
    dispatch(fetchingItems())

    dispatch(findingPeople())

    setTimeout(() => {
      dispatch(setAction(''))
      dispatch(fetchedItems())
    }, 500)
  }
}

export const getItemDetails = (path) => {
  return (dispatch) => {
    dispatch(fetchingItems())

    Axios.get(path)
      .then((res) => {
        const { data } = res

        dispatch(setItem(data))
      })
      .then(() => {
        setTimeout(() => {
          dispatch(fetchedItems())
        }, 500)
      })
  }
}
