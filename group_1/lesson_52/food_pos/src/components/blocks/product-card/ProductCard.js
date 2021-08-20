import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cart";
import "./ProductCard.scss";

function ProductCard(props) {
  const { data } = props;
  const { image, name, price, avaliable_count } = data;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart([data]));
  };

  return (
    <button className="ProductCart" onClick={handleClick}>
      <img className="ProductCart__image" src={image} alt="" />
      <h3 className="ProductCart__title">{name}</h3>
      <div className="ProductCart__price">$ {price}</div>
      <div className="ProductCart__count">
        {avaliable_count} Bowls available
      </div>
    </button>
  );
}

export { ProductCard };
