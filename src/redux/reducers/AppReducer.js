import {
  FETCHING_ITEMS,
  FETCHED_ITEMS,
  SET_ITEMS,
  SET_ACTION,
  FINDING_PEOPLE,
  SET_SEARCH_VALUE,
  SET_FILTER_VALUE,
  SET_IS_SHOWING,
  RESET_SEARCH,
  SET_ITEM,
} from 'redux/constants'

const initialState = {
  appLoading: false,
  isLoading: false,
  categoryItems: [],
  filter: [],
  search: '',
  items: [],
  action: '',
  isShowing: false,
  item: {},
}

const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_ITEMS:
      return {
        ...state,
        isLoading: true,
      }
    case FETCHED_ITEMS:
      return {
        ...state,
        isLoading: false,
      }

    case SET_ITEMS:
      return {
        ...state,
        categoryItems: [...payload],
        items: [...payload],
      }
    case SET_ITEM:
      return {
        ...state,
        item: payload,
      }
    case SET_ACTION:
      return {
        ...state,
        action: payload,
      }

    case SET_SEARCH_VALUE:
      return {
        ...state,
        search: payload,
      }

    case SET_FILTER_VALUE:
      return {
        ...state,
        filter: payload,
      }

    case SET_IS_SHOWING:
      return {
        ...state,
        isShowing: payload,
      }
    case RESET_SEARCH:
      return {
        ...state,
        items: [...state.categoryItems],
      }
    case FINDING_PEOPLE:
      const { search, filter, categoryItems } = state

      let items = []

      // only search value
      if (search !== '' && filter.length === 0) {
        const searchResult = categoryItems.filter(({ name }) => {
          return name.toLowerCase().includes(search.toLowerCase())
        })

        items = [...searchResult]
      }

      // only filter value
      if (filter.length > 0 && search === '') {
        const filteredResult = categoryItems.filter(({ gender }) => {
          return filter.includes(gender)
        })
        items = [...filteredResult]
      }

      // using both search and filter value
      if (filter.length > 0 && search !== '') {
        const filteredAndSearchedResult = categoryItems.filter(
          ({ gender, name }) => {
            return (
              filter.includes(gender) &&
              name.toLowerCase().includes(search.toLowerCase())
            )
          }
        )

        items = [...filteredAndSearchedResult]
      }

      // both values are empty
      if (filter.length === 0 && search === '') {
        items = [...categoryItems]
      }

      return {
        ...state,
        action: 'RESET',
        items,
      }

    default:
      return state
  }
}

export default AppReducer
