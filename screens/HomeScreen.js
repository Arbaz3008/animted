import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Expo vector icons

const { width } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const [bgColor, setBgColor] = useState(new Animated.Value(0)); // Background animation

  useEffect(() => {
    // Background animation loop
    Animated.loop(
      Animated.timing(bgColor, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const backgroundColor = bgColor.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ["#ff9a9e", "#fad0c4", "#a1c4fd", "#84fab0", "#fbc2eb"],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      {/* Back Button Icon */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>
      <View style={styles.circle}>
        <Text style={[styles.circleText, { color: "#FF6F61" }]}>I</Text>
        <Text style={[styles.circleText, { color: "#6A5ACD" }]}>Love</Text>
        <Text style={[styles.circleText, { color: "#20B2AA" }]}>You</Text>
      </View>

      {/* Intro Section */}
      <View style={styles.introContainer}>
        <Text style={[styles.introText, { color: "#FF6F61" }]}>
          Arbaz Malik is here
        </Text>
        <Text style={[styles.introText, { color: "#6A5ACD" }]}>
          Software Engineer
        </Text>
        <Text style={[styles.introText, { color: "#20B2AA" }]}>
          Application Developer
        </Text>
        <Text style={[styles.introText, { color: "#FF4500" }]}>
          Websites Developer
        </Text>
        <Text style={[styles.introText, { color: "#2E8B57" }]}>
          Contact me 
        </Text>
        <Text style={[styles.introText, { color: "gray" }]}>
          arbazmalik27229@gmail.com
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: 20,
  },
  circleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  introContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    width: width * 0.9,
  },
  introText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default HomeScreen;
