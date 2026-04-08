import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageSourcePropType,
    TouchableOpacity,
} from "react-native";
import { colors } from "../../themes/colors";
import fontSizes from "../../themes/fontSizes";
import { fontFamily } from "../../assets/fonts/fontFamily";
import { width } from "../../themes/spacing";
import CustomText from "../CustomText";

interface ServiceCardProps {
    type: string;
    title: string;
    description?: string;
    image: ImageSourcePropType;
    buttonText?: string;
    onPressButton?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    type,
    title,
    description,
    image,
    buttonText = "SHOP NOW",
    onPressButton,
}) => {
    return (
        <View style={[styles.card, { backgroundColor: type === "product" ? "#D7D0FF" : "#C8F5C4" }]}>
            <View style={styles.leftContainer}>
                {
                    type === "service" ?
                        <>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.description}>{description}</Text>

                        </>
                        :
                        <>
                            <View style={{ flexDirection: 'row', flexShrink: 1 }}>
                                <CustomText text="UPTO" style={{ fontFamily: fontFamily.bold, fontSize: fontSizes.f20, transform: [{ rotate: '-90deg' }], color: colors.pText, alignSelf: 'center' }} />
                                <View>
                                    <CustomText text="80 %" style={{ fontFamily: fontFamily.bold, fontSize: fontSizes.f40, color: colors.pText, lineHeight: fontSizes.f40 }} />
                                    <CustomText text="offer" style={{ fontFamily: fontFamily.bold, fontSize: fontSizes.f20, color: colors.pText, lineHeight: fontSizes.f20 }} />
                                </View>
                            </View>
                            <CustomText text="On Health Products" style={{ fontFamily: fontFamily.bold, fontSize: fontSizes.f16, color: colors.pText, marginLeft: width * 0.08 }} />
                            <TouchableOpacity style={styles.button} onPress={onPressButton}>
                                <Text style={styles.buttonText}>{buttonText}</Text>
                            </TouchableOpacity>
                        </>
                }
            </View>
            <View style={styles.rightContainer}>
                <Image source={image} resizeMode="contain" style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        borderRadius: 15,
        padding: 12,
        alignItems: "center",
        marginVertical: 10,
        zIndex: 99

    },

    leftContainer: {
        flex: 0.75,
        paddingRight: 10,
    },

    rightContainer: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: fontSizes.f19,
        fontFamily: fontFamily.bold,
        marginBottom: 8,
        width: width * 0.4,
        color: colors.pText
    },

    description: {
        fontSize: fontSizes.f11,
        color: colors.pText,
        fontFamily: fontFamily.bold,
        textAlign: 'justify'
    },

    image: {
        width: 90,
        height: 157,
    },

    button: {
        marginTop: width * 0.025,
        backgroundColor: "#1C82DF",
        paddingVertical: 8,
        borderRadius: 10,
        alignSelf: "flex-start",
        marginLeft: width * 0.08,
        width: width * 0.35,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: colors.white,
        fontSize: fontSizes.f18,
        fontFamily: fontFamily.bold,
    },
});

export default ServiceCard;