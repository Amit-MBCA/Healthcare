import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
} from "react-native";
import { colors } from "../../themes/colors";
import { width } from "../../themes/spacing";
import fontSizes from "../../themes/fontSizes";
import { fontFamily } from "../../assets/fonts/fontFamily";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    isLoading = false,
    disabled = false,
    buttonStyle,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                buttonStyle,
                (disabled || isLoading) && styles.disabledButton,
            ]}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <ActivityIndicator color={colors.white} />
            ) : (
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primaryColor,
        height: width * 0.15,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: colors.white,
        fontSize: fontSizes.f31,
        fontFamily: fontFamily.medium
    },

    disabledButton: {
        opacity: 0.6,
    },
});

export default CustomButton;