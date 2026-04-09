import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import { colors } from "../themes/colors";
import { fontFamily } from "../assets/fonts/fontFamily";
import fontSizes from "../themes/fontSizes";

const { width, height } = Dimensions.get("window");

// scale values needed to cover full screen
const maxScaleX = width / 200;
const maxScaleY = height / 200;

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const textOpacity = useRef(new Animated.Value(1)).current;

  const circleScaleX = useRef(new Animated.Value(1)).current;
  const circleScaleY = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.sequence([
        // Fade out text
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),

        // Expand oval (different scaleX and scaleY)
        Animated.parallel([
          Animated.timing(circleScaleX, {
            toValue: maxScaleX * 3, // extra to cover fully
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(circleScaleY, {
            toValue: maxScaleY * 3, // extra to cover fully
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        onFinish();
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [
              { scaleX: circleScaleX },
              { scaleY: circleScaleY },
            ],
          },
        ]}
      >
        <Animated.Text style={[styles.logoText, { opacity: textOpacity }]}>
          Healthcare
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    fontSize: fontSizes.f24,
    fontFamily: fontFamily.medium,
    color: colors.white,
  },
});