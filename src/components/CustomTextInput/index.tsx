import React from "react";
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import fontSizes from "../../themes/fontSizes";
import { width } from "../../themes/spacing";
import { colors } from "../../themes/colors";
import { fontFamily } from "../../assets/fonts/fontFamily";

interface CustomTextInputProps extends TextInputProps {
  title?: string;
  leftIcon?: ImageSourcePropType;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  style,
  title,
  leftIcon,
  ...props
}) => {
  return (
    <View style={styles.wrapper}>
      {title ? <Text style={styles.title}>{title}</Text> : null}

      <View style={styles.inputContainer}>
        {leftIcon ? <Image source={leftIcon} resizeMode="contain" style={styles.iconContainer} /> : null}

        <TextInput
          style={[styles.input, style]}
          allowFontScaling={false}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginVertical: 10,
  },

  title: {
    position: 'absolute',
    left: width * 0.035,
    transform: [{ translateY: -10 }],
    fontSize: fontSizes.f13,
    fontFamily: fontFamily.medium,
    color: colors.black,
    backgroundColor: colors.white,
    zIndex: 1,
    paddingHorizontal: 10
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.black,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: width * 0.17,
  },

  iconContainer: {
    height: 20,
    width: 20,
    marginHorizontal: 10
  },

  input: {
    flex: 1,
    fontSize: fontSizes.f16,
    fontFamily: fontFamily.medium,
    color: colors.black,
  },
});

export default CustomTextInput;