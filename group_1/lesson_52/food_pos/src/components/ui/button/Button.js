import './Button.scss'

function Button(props) {
    const {
        label = '',
        color = 'primary',
        theme = 'default',
        className = '',
        ...rest
    } = props

    return (
        <button className={`btn btn-${theme}-${color} ${className}`} {...rest}>
            {label}
        </button>
    )
}

export {Button}