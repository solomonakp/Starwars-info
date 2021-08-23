import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from 'utils/constants'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map(({ component, exact, path }) => (
            <Route path={path} component={component} exact={exact} />
          ))}
        </Switch>
      </div>
    </Router>
  )
}

export default App
