import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { LoginContext } from "../context/LoginContext";

const Profile = ({ navigation }: any) => {
  const { userName, setUserName } = useContext(LoginContext);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.username}>Username: {userName}</Text>


      <TextInput style={styles.input}
      placeholder="change username?"
      onChangeText={(text) => setUserName(text)}
      />      
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

      <View style={styles.button}>
        <Button
          title="List of Image"
          color="#000000"
          onPress={() => navigation.navigate("Image")}
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
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
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
