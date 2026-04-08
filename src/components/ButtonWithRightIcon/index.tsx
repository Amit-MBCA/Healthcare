import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    Image,
} from "react-native";
import { colors } from "../../themes/colors";
import { width } from "../../themes/spacing";
import fontSizes from "../../themes/fontSizes";
import { fontFamily } from "../../assets/fonts/fontFamily";

interface ButtonWithRightIconProps {
    title: string;
    onPress: () => void;
    rightIcon?: React.ReactNode;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

const ButtonWithRightIcon: React.FC<ButtonWithRightIconProps> = ({
    title,
    onPress,
    rightIcon,
    buttonStyle,
    textStyle,
    disabled = false,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle, disabled && styles.disabledButton]}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled}
        >
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            <Image source={rightIcon} style={styles.icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: width * 0.13,
        borderRadius: 10,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        borderColor: "#6C6060",
        borderWidth: 1,
        width: width * 0.41
    },

    buttonText: {
        fontSize: fontSizes.f16,
        fontFamily: fontFamily.medium,
        color: "#6C6060",
    },

    icon: {
        height: 34,
        width: 34
    },

    disabledButton: {
        opacity: 0.6,
    },
});

export default ButtonWithRightIcon;