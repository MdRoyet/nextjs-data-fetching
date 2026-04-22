const BookLoading = () => {
  return (
    <div className="flex justify-center items-center">
      <h2>Book Informations is fetching:</h2>
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
};

export default BookLoading;
