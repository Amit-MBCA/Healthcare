import React from "react";
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType, ViewStyle, ImageStyle } from "react-native";

interface TouchableImageProps {
    imageSource: ImageSourcePropType;
    onPress: () => void;
    imageStyle?: ImageStyle;
    containerStyle?: ViewStyle;
    activeOpacity?: number;
}

const TouchableImage: React.FC<TouchableImageProps> = ({
    imageSource,
    onPress,
    imageStyle,
    containerStyle,
    activeOpacity = 0.7,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={activeOpacity}
            style={containerStyle}
        >
            <Image source={imageSource} style={[styles.image, imageStyle]} resizeMode="contain" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
    },
});

export default TouchableImage;