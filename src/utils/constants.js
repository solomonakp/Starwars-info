import Category from 'components/elements/category/Category'
import Details from 'components/elements/details/Details'
import Home from 'components/elements/home/Home'
import NotFound from 'components/layout/NotFound'

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/:category',
    component: Category,
    exact: true,
  },
  {
    path: '/:category/:id',
    component: Details,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
    exact: false,
  },
]
