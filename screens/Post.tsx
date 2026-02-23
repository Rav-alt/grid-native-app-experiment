import React, { useState, useEffect, useCallback, } from "react";
import { ScrollView, Text, StyleSheet, View, TextInput, Button } from "react-native";
import { useFetchpost } from "../hooks/useFetchpost";

const Post = () => {
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


  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>

        <TextInput style={styles.item}
        placeholder="Add Title Post"
        value={newPost}
        onChangeText={setNewpost}
        />
        <TextInput style={styles.item}
        placeholder="Add post"
        value={newPostbody}
        onChangeText={setNewpostbody}
        />
        
        <View style={styles.button}>
        <Button 
        title="Add"
        onPress={addPost}/>
        </View>
      </View>

      <View>
      {[...postList].reverse().map((item: any) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      ))}
      </View>
      

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 20,
  },
  header: {
    fontSize: 30,
    textAlign: "center"
  },
  body: {
    fontSize: 15,
    textAlign: "center"
  },
  button: {
    backgroundColor: "#8f8f8f",
    borderRadius: 10,
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ddd",
  },
});

export default Post;
