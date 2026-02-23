import { useState, useEffect } from "react";


export function useFetchpost () {
  interface Post {
  id: number;
  title: string;
  body: string;
}
  const [postList, setPostlist] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json: Post[]) => setPostlist(json));
  }, [])
  return {postList, setPostlist}
}