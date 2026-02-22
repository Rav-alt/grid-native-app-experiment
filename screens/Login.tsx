import React, { useContext } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { LoginContext } from "../context/LoginContext";

const Login = ({ navigation }: any) => {
  const { setUserName } = useContext(LoginContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        onChangeText={(text) => setUserName(text)}
      />
      <View style={styles.button}>
        <Button
          title="Set Username"
          color="#000000"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
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

export default Login;
