import './ProductCard.scss';

function ProductCard(props) {
  const {data} = props
  const {image, name, price, avaliable_count} = data

  return (
    <button className="ProductCart">
      <img className="ProductCart__image" src={image} />
      <h3 className="ProductCart__title">{name}</h3>
      <div className="ProductCart__price">$ {price}</div>
      <div className="ProductCart__count">{avaliable_count} Bowls available</div>
    </button>
  )
}

export {ProductCard}