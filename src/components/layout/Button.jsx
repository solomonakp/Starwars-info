import { button } from 'styles/Button.module.scss'

const Button = ({ children, id, fullWidth, className, ...props }) => {
  return (
    <button
      className={`${className} ${button} btn`}
      id={id}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
