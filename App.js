import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const RegisterScreen = () => {
  const [bgColor, setBgColor] = useState(new Animated.Value(0)); // Background animation
  const [borderAnimation, setBorderAnimation] = useState(new Animated.Value(0)); // Border animation

  useEffect(() => {
    // Looping background animation
    Animated.loop(
      Animated.timing(bgColor, {
        toValue: 1,
        duration: 4000, // Smooth animation for 4 seconds
        useNativeDriver: false,
      })
    ).start();

    // Looping border animation
    Animated.loop(
      Animated.timing(borderAnimation, {
        toValue: 1,
        duration: 2000, // Border animation speed
        useNativeDriver: false,
      })
    ).start();
  }, []);

  // Interpolate animated colors for background
  const backgroundColor = bgColor.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [
      "#ff9a9e", // Light pink
      "#fad0c4", // Peach
      "#fbc2eb", // Soft purple
      "#a1c4fd", // Light blue
      "#84fab0", // Mint green
    ],
  });

  // Interpolate animated colors for borders
  const borderColor = borderAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#fbc2eb", "#ff6b81", "#c2e9fb"],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Animated.View style={[styles.card, { borderColor }]}>
        <Text style={styles.title}>Register</Text>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            style={styles.input}
            placeholderTextColor="white"
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="white"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            placeholderTextColor="white"
          />
        </View>
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
    borderWidth: 3, // Animated border
    borderRadius: 15,
    backgroundColor: "white", // Form card background
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10, // Shadow for Android
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333", // Static title color
  },
  inputContainer: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden", // Ensure the white input background stays within the border
  },
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: "gray", // Static white background for inputs
    borderWidth: 1, // No border for inputs
    color: "#333", // Input text color
  },
});

export default RegisterScreen;
