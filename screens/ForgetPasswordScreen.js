import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AnimatedBackground from "../components/AnimatedBackground";

const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AnimatedBackground
        colors={[
          ["#ff512f", "#dd2476"], // Top to bottom gradient
          ["#1e3c72", "#2a5298"], // Diagonal
          ["#8e44ad", "#c0392b"], // Bottom to top
        ]}
      />
      <View style={styles.card}>
        <Text style={styles.title}>Forget Password</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 10,
        padding: 20,
        width: "85%",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
      },
      button: {
        backgroundColor: "#6200ee",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
      },
      buttonText: {
        color: "#fff",
        fontWeight: "bold",
      },
      link: {
        color: "#6200ee",
        textAlign: "center",
        marginTop: 10,
      },
});
