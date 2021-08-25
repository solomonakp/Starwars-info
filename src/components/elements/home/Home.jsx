import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/people">People</Link>
      <Link to="/planets">Planets</Link>
    </div>
  )
}

export default Home
