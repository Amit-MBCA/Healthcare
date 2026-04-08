import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";
import fontSizes from "../../themes/fontSizes";
import { fontFamily } from "../../assets/fonts/fontFamily";
import { colors } from "../../themes/colors";
import { width } from "../../themes/spacing";

type Props = {
    name: string;
    image: ImageSourcePropType;
    distance: string;
    rating: string;
};

export default function PharmacyCard({
    name,
    image,
    distance,
    rating,
}: Props) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.distance}>{distance + " Away"}</Text>
                <Text style={styles.rating}>⭐ {rating}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: width * 0.45,
        paddingBottom: 12,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginRight: 12,
        borderWidth: 0.5,
        borderColor: colors.black,
    },

    image: {
        width: "100%",
        height: 109,
        marginBottom: 8,
    },

    content: {
        paddingHorizontal: 10
    },

    name: {
        fontSize: fontSizes.f16,
        fontFamily: fontFamily.medium,
        color: colors.black,
        marginBottom: 4,
    },

    distance: {
        fontSize: fontSizes.f13,
        color: "#453E3E",
        fontFamily: fontFamily.medium,
    },

    rating: {
        fontSize: fontSizes.f12,
        fontFamily: fontFamily.medium,
        color: "#453E3E"
    },
});