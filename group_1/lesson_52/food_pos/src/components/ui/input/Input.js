import "./Input.scss";

function Input(props) {
  const {
    type = 'text',
    className = '',
    icon = null,
    ...rest
  } = props

  return (
    <label className={`Input ${icon ? 'with-icon' : ''} ${className}`}>
      <input
        className="form-control"
        type={type}
        {...rest}
        />
        {icon && <i className={`icon-${icon}`} />}
    </label>
  )
}

export { Input }