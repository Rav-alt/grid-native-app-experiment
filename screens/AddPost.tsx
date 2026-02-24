import React, { useState, useEffect, useCallback, } from "react";
import { ScrollView, Text, StyleSheet, View, TextInput, Button } from "react-native";
import { useFetchpost } from "../hooks/useFetchpost";
import { useAddPost } from "../hooks/useAddPost";

const AddPost = () => {
    
    const {newPost, newPostbody, postList, setPostlist, setNewpostbody, setNewpost, addPost} = useAddPost();
    

    return (
        <>
        <View>
            <Text>Add Post</Text>
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
        </>
    )
    
}

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


export default AddPost;