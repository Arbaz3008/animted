import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

const AnimatedBackground = ({ colors }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const interpolateColors = colors.map((colorSet) =>
    animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: colorSet,
    })
  );

  return (
    <Animated.View style={StyleSheet.absoluteFill}>
      <LinearGradient
        colors={[
          interpolateColors[0],
          interpolateColors[1],
          interpolateColors[2],
        ]}
        style={{ width, height }}
      />
    </Animated.View>
  );
};

export default AnimatedBackground;
