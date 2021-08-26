import { Link } from 'react-router-dom'
import Styles from 'styles/Category.module.scss'

const CategoryCard = (props) => {
  const { to, name, description, src } = props

  return (
    <div
      className={`${Styles.col} col-12 col-lg d-flex justify-content-center mb-3 mb-lg-0 `}
    >
      <Link
        to={to}
        className={`${Styles.category} border rounded position-relative overflow-hidden w-100`}
      >
        <img src={src} alt="" className="img-fluid" />
        <div
          className={`${Styles.category__text} category__text position-absolute text-left px-3`}
        >
          <h2>{name}</h2>
          <p className="text-light">{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default CategoryCard
