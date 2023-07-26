import { Link } from "react-router-dom";
import "./index.css";

const ProductCard = (props) => {
  const { Product } = props;
  const { title, imageUrl, price, id } = Product;
  return (
    <Link className="link" to={`product/${id}`}>
      <li className="li">
        <div>
          <img className="product-list-img" src={imageUrl} alt={title} />
          <h1 className="product-list-title">{title}</h1>
          <p className="product-list-price">{`Rs${price}`}</p>
        </div>
      </li>
    </Link>
  );
};

export default ProductCard;
