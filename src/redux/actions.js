import {
  LOADED_APP,
  LOADING_APP,
  FETCHED_ITEMS,
  FETCHING_ITEMS,
  SET_ITEMS,
  SET_SEARCH_VALUE,
  FINDING_PEOPLE,
  SET_ACTION,
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
