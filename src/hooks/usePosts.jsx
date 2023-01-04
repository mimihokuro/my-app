import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }
  const json = await res.json();
  return json;
};

export const usePosts = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  };
};
