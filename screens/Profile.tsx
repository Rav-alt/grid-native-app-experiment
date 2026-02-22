import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { LoginContext } from "../context/LoginContext";

const Profile = ({ navigation }: any) => {
  const { userName } = useContext(LoginContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.username}>Username: {userName}</Text>

      <View style={styles.button}>
        <Button
          title="List of Users"
          color="#000000"
          onPress={() => navigation.navigate("User")}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="List of Posts"
          color="#000000"
          onPress={() => navigation.navigate("Post")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8fc0ee",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  username: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
    color: "#555",
  },
  button: {
    backgroundColor: "#888888",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
});

export default Profile;
