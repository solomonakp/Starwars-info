import React from 'react'
import {
  render,
  fireEvent,
  waitFor,
  act,
  getByTestId,
} from '@testing-library/react'
import { Provider as StoreProvider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import Axios from 'utils/axios'
import App from 'App'
import store from 'redux/store'
import { MockData } from 'utils/constants'

jest.mock('utils/axios')

const mockedAxios = Axios

const routingProps = {
  initialEntries: ['/', '/:category', '/:category/:id'],
  initialIndex: 0,
}

const setUpApp = (routerProps = routingProps) =>
  render(
    <StoreProvider store={store}>
      <MemoryRouter {...routerProps}>
        <App />
      </MemoryRouter>
    </StoreProvider>
  )

beforeEach(() => {
  jest.useFakeTimers()
})
afterEach(() => {
  jest.clearAllMocks()
})

describe('The app', () => {
  test('should have a home page showing two categories of items', async () => {
    const { queryByText } = setUpApp()

    const charactersCategory = queryByText(/characters/i)

    const planetCategory = queryByText(/planets/i)

    await charactersCategory

    expect(charactersCategory).toBeInTheDocument()

    await planetCategory

    expect(planetCategory).toBeInTheDocument()
  })

  test('should have a category page (with pagination) to show all of its items', async () => {
    mockedAxios.get.mockResolvedValue({ data: MockData })

    const { queryByText, debug, queryByTestId, findByTestId } = setUpApp()

    const charactersCategory = queryByText(/characters/i)

    expect(charactersCategory).toBeInTheDocument()

    await charactersCategory

    fireEvent.click(charactersCategory)

    expect(charactersCategory).not.toBeInTheDocument()

    const filter = queryByText(/filters/i)

    await filter

    expect(filter).toBeInTheDocument()
  })
})
