import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, Text, StyleSheet, TextInput, Button, View , } from "react-native";
import { useFetchuser } from "../hooks/useFetchuser";

const User = () => {
  const {userList, setUserlist} = useFetchuser();
  const [newUser, setNewuser] = useState("");

  const addUser = useCallback(() => {
    if (newUser.trim() === "") return;

    const newItem = {
      id: Date.now(),
      name: newUser
    };
    setUserlist([...userList, newItem]);
    setNewuser("")

  }, [newUser, setUserlist]
);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <TextInput  style={styles.input}
      placeholder="Add User"
      value={newUser}
      onChangeText={setNewuser}
      />
      <View style={styles.button}>
        <Button 
        title="Add"
        onPress={addUser}
        />
      </View>
      </View>
      {[...userList].reverse().map((item: any) => (
        <Text key={item.id} style={styles.item}>
          {item.name}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 20,
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
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#8f8f8f",
    borderRadius: 10,
  },
});

export default User;
