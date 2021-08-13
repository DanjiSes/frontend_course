import "./Select.scss";

/**
 * TODO:
 * 1. Гибкость (чтобы можно было передавать опции селекта)
 * 2. При клике на опцию менялся value
 * 3. Чтобы опции открывались при клике на селект и закрывались при клике на любое свободное пространство
 */

function Select(props) {
  const {
    className = '',
    ...rest
  } = props

  return (
    <div className={`Select ${className}`} {...rest}>
      <div className="Select__value form-control">
        <i className="icon-Arrow---Down" />
        <span>Delivery</span>
      </div>

      <div className="Select__dropdown">
        <div className="Select__option Select__option_disable">Dine in</div>
        <div className="Select__option">To Go</div>
        <div className="Select__option Select__option_active">Delivery</div>
      </div>
    </div>
  )
}

export { Select }