import {
  LOADED_APP,
  LOADING_APP,
  FETCHED_ITEMS,
  FETCHING_ITEMS,
  SET_ITEMS,
  SET_SEARCH_VALUE,
  FINDING_PEOPLE,
  SET_ACTION,
  SET_FILTER_VALUE,
  SET_IS_SHOWING,
  RESET_SEARCH,
  SET_ITEM,
} from './constants'

export const loadingApp = () => ({
  type: LOADING_APP,
})

export const loadedApp = () => ({
  type: LOADED_APP,
})

export const fetchingItems = () => ({
  type: FETCHING_ITEMS,
})

export const fetchedItems = () => ({
  type: FETCHED_ITEMS,
})

export const setItems = (payload) => ({
  type: SET_ITEMS,
  payload: payload,
})

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
})

export const setAction = (value) => ({ type: SET_ACTION, payload: value })

export const findingPeople = () => ({
  type: FINDING_PEOPLE,
})

export const setFilterValue = (value) => ({
  type: SET_FILTER_VALUE,
  payload: value,
})

export const setIsShowing = (value) => ({
  type: SET_IS_SHOWING,
  payload: value,
})

export const resetSearch = () => ({
  type: RESET_SEARCH,
})

export const setItem = (payload) => ({
  type: SET_ITEM,
  payload: payload,
})
