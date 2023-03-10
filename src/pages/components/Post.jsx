import { usePost } from "src/hooks/usePost";

const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div> Created by {user.name}</div> : null}
    </div>
  );
};
export default Post;
