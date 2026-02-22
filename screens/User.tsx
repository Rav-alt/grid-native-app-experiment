import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const User = () => {
  const [userList, setUserlist] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUserlist(json));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {userList.map((item: any) => (
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
});

export default User;
