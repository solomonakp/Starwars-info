import Layout from 'components/layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from 'utils/constants'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map(({ component, exact, path }, index) => (
            <Route
              path={path}
              component={component}
              exact={exact}
              key={index}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
