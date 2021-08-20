import "./Button.scss";

function Button(props) {
  const {
    label = props.children,
    color = "primary",
    theme = "default",
    className = "",
    ...rest
  } = props;

  return (
    <button className={`btn btn-${theme}-${color} ${className}`} {...rest}>
      {label}
    </button>
  );
}

export { Button };
