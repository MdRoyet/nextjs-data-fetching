export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();
  return books.map((book) => ({ bookId: book.id }));
};

const BooksDetailPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const { title, author, price } = await res.json();
  return (
    <div>
      <h2>Book Detail:{bookId}</h2>
      <h3>{title}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default BooksDetailPage;
