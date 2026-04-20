const ProductCard = ({ product }) => {
  const { name, category, price, stock, description } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>{description}</p>
          <p>{price}</p>
          <p>{stock}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
