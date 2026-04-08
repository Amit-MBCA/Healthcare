import React from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";
import { appImages } from "../../themes/appImages";
import { width } from "../../themes/spacing";
import TouchableImage from "../TouchableImage";

interface HomeHeaderProps {
    onBurgerPress?: () => void;
    onMicPress?: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ onBurgerPress, onMicPress }) => {
    return (
        <View style={styles.header}>
            <TouchableImage
                imageSource={appImages.burgerBar}
                imageStyle={styles.icon}
                onPress={onBurgerPress || (() => {})}
            />

            <View style={styles.spacer} />

            <Image source={appImages.appLogo} style={styles.icon} />

            <View style={styles.flexSpace} />

            <Pressable
                style={styles.micContainer}
                onPress={onMicPress}
            >
                <Image resizeMode="contain" source={appImages.mic} style={styles.micIcon} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        height: 33,
        width: 33,
    },
    spacer: {
        width: width * 0.05
    },
    flexSpace: {
        flex: 1
    },
    micContainer: {
        height: 54,
        width: 54,
        borderRadius: 27,
        borderColor: "#5F5B5B",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    micIcon: {
        height: 23,
        width: 23,
    },
});

export default HomeHeader;