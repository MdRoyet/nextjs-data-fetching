import BooksCard from "@/components/BooksCard";

const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books", {
    next: { revalidate: 20 },
  });
  const books = await res.json();

  return (
    <div>
      <h2>Here is my all books informations: {books.length}</h2>
      <div className="grid grid-cols-3 gap-4 m-6">
        {books.map((book) => (
          <BooksCard key={book.id} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
