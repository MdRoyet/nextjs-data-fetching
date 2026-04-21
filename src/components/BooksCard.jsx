const BooksCard = ({ book }) => {
  const { title, author, publishedYear, genre, price } = book;
  return (
    <div>
      <h2>Books Care Are here</h2>
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{author}</p>
          <p>{publishedYear}</p>
          <p>{genre}</p>
          <p>{price}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
