import Link from "next/link";
import { usePosts } from "src/hooks/usePosts";

const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>ローディング中...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データがありません</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ol>
  );
};
export default Posts;
