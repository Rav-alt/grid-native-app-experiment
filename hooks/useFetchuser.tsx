import { useState, useEffect } from "react";

export function useFetchuser() {
  const [userList, setUserlist] = useState([]);

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then ((res) => res.json())
    .then((json) => setUserlist(json));
  }, [])

  return {userList, setUserlist};
}