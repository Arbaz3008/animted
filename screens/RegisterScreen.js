import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const RegisterScreen = ({ navigation }) => {
  const [bgColor, setBgColor] = useState(new Animated.Value(0)); // Background animation
  const [formBgColor, setFormBgColor] = useState(new Animated.Value(0)); // Form background animation
  const [buttonColor, setButtonColor] = useState(new Animated.Value(0)); // Button animation

  useEffect(() => {
    // Background animation loop
    Animated.loop(
      Animated.timing(bgColor, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false,
      })
    ).start();

    // Form background animation loop
    Animated.loop(
      Animated.timing(formBgColor, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false,
      })
    ).start();

    // Button animation loop
    Animated.loop(
      Animated.timing(buttonColor, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const backgroundColor = bgColor.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ["#ff9a9e", "#fad0c4", "#fbc2eb", "#a1c4fd", "#84fab0"],
  });

  const formBackgroundColor = formBgColor.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ["#fbc2eb", "#ffdde1", "#a1c4fd", "#fad0c4", "#84fab0"],
  });

  const registerButtonColor = buttonColor.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#6a11cb", "#2575fc", "#ff6b81"],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Animated.View style={[styles.card, { backgroundColor: formBackgroundColor }]}>
        <Text style={styles.title}>Register</Text>

        <View style={styles.inputContainer}>
          <TextInput placeholder="Name" style={styles.input} placeholderTextColor="#aaa" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#aaa" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            placeholderTextColor="#aaa"
          />
        </View>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate("Login")}
        >
          <Animated.Text style={[styles.buttonText, { color: registerButtonColor }]}>
            Register
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width * 0.85,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    borderWidth: 0,
    color: "#333",
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
