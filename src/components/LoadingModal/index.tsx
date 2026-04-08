import React from "react";
import { Modal, View, StyleSheet, Image } from "react-native";
import { colors } from "../../themes/colors";
import { appImages } from "../../themes/appImages";

interface LoadingModalProps {
    visible: boolean;
    gifSource: any; // require("path/to/gif.gif")
}

const LoadingModal: React.FC<LoadingModalProps> = ({ visible, gifSource = appImages.animation }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <View style={styles.overlay}>
                <View style={styles.content}>
                    <Image source={gifSource} style={styles.gif} resizeMode="contain" />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: colors.white, // semi-white overlay
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    gif: {
        width: 120,
        height: 120,
    },
});

export default LoadingModal;