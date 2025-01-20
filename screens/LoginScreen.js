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

const LoginScreen = ({ navigation }) => {
  const [bgColor, setBgColor] = useState(new Animated.Value(0));
  const [formBgColor, setFormBgColor] = useState(new Animated.Value(0));
  const [buttonColor, setButtonColor] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(bgColor, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false,
      })
    ).start();

    Animated.loop(
      Animated.timing(formBgColor, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false,
      })
    ).start();

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
    outputRange: ["#6dd5ed", "#2193b0", "#cc2b5e", "#753a88", "#1e3c72"],
  });

  const formBackgroundColor = formBgColor.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ["#ffdde1", "#84fab0", "#a1c4fd", "#6a11cb", "#fbc2eb"],
  });

  const loginButtonColor = buttonColor.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#ff6b81", "#6a11cb", "#2575fc"],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Animated.View style={[styles.card, { backgroundColor: formBackgroundColor }]}>
        <Text style={styles.title}>Login</Text>

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
          onPress={() => navigation.navigate("Home")}
        >
          <Animated.Text style={[styles.buttonText, { color: loginButtonColor }]}>
            Login
          </Animated.Text>
        </TouchableOpacity>

        {/* Forgot Password Link */}
        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
          <Text style={{ color: "#888", textAlign: "center", marginTop: 10 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Register Link */}
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "#6a11cb", textAlign: "center", marginTop: 20 }}>
            Don't have an account? Register here.
          </Text>
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

export default LoginScreen;
