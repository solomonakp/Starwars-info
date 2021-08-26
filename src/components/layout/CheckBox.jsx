import { memo } from 'react'

const CheckBox = memo((props) => {
  const { id, value = '', onChange, label } = props

  return (
    <div className="form-check mb-3">
      <input
        className="form-check-input me-3"
        type="checkbox"
        value={value}
        id={id}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
})

export default CheckBox
