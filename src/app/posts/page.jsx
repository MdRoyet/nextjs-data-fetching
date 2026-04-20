const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const PostPage = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  //   console.log("Present", posts);

  const posts = await getPost();

  return (
    <div>
      <h2>Posts are coming soon: {posts.length}</h2>
    </div>
  );
};

export default PostPage;
