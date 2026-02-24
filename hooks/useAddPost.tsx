import { useState, useEffect, useCallback } from "react";
import { useFetchpost } from "./useFetchpost";

export function useAddPost () {
    const [newPost, setNewpost] = useState("");
      const [newPostbody, setNewpostbody] = useState("")
      const {postList, setPostlist} = useFetchpost();
    
      
      
      const addPost = useCallback(() => {
        if (newPost.trim() === "" || newPostbody.trim() === "") return;
        const newItem = {
          id: Date.now(),
          title: newPost,
          body: newPostbody
        };
        setPostlist((prev) => [...prev, newItem]);
        setNewpost("")
        setNewpostbody("")
      }, [newPost, newPostbody, setPostlist]
    );

    return {newPost, newPostbody, setPostlist, setNewpostbody, setNewpost, addPost, postList}
}