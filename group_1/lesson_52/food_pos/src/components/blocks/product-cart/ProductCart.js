
function ProductCard(props) {
  const {data} = props
  const {image, name, price, avaliable_count} = data

  return (
    <div className="ProductCart">
      <img src={image} />
      <h3>{name}</h3>
      <div>{price}</div>
      <div>{avaliable_count}</div>
    </div>
  )
}

export {ProductCard}