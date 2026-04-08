import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Alert, Image, Pressable, FlatList } from 'react-native';
import { useUploadPrescriptionMutation } from '../redux/api';
import { useDispatch } from 'react-redux';
import { addPrescription } from '../redux/authSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableImage from '../components/TouchableImage';
import { appImages } from '../themes/appImages';
import { colors } from '../themes/colors';
import { topInset, width } from '../themes/spacing';
import Spacer from '../components/spacer';
import HomeHeader from '../components/HomeHeader';
import ButtonWithRightIcon from '../components/ButtonWithRightIcon';
import { fontFamily } from '../assets/fonts/fontFamily';
import fontSizes from '../themes/fontSizes';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import ServiceCard from '../components/ServiceCard';

export default function HomeScreen() {
  const buttonOptions = [
    {
      id: 1,
      title: "Questions",
      img: appImages.options
    },
    {
      id: 2,
      title: "Reminders",
      img: appImages.table
    },
    {
      id: 3,
      title: "Messages",
      img: appImages.think
    },
    {
      id: 4,
      title: "Calendar",
      img: appImages.cal
    },
  ]

  const serviceData = [
    {
      id: 1,
      title: "Get the Best Medical Service",
      description: "Rem illum facere quo corporis Quis in saepe itaque ut quos pariatur. Qui numquam rerum hic repudiandae rerum id amet tempore nam molestias omnis qui earum voluptatem!",
      image: appImages.doctor,
      type: "service",
    },
    {
      id: 2,
      title: "",
      description: "",
      image: appImages.medicines,
      type: "product",
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <HomeHeader
          onBurgerPress={() => console.log("Burger pressed")}
          onMicPress={() => console.log("Mic pressed")}
        />

        <Spacer height={width * 0.035} />

        <FlatList
          data={buttonOptions}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnStyle}
          ItemSeparatorComponent={() => <Spacer width={width * 0.025} />}
          renderItem={({ item }) => (
            <ButtonWithRightIcon
              title={item.title}
              onPress={() => console.log(item.title)}
              rightIcon={item?.img}
            />
          )}
        />

        <View style={styles.uploadContainer}>
          <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSizes.f17, color: colors.pText }}>UPLOAD PRESCRIPTION</Text>
          <Text style={{ fontFamily: fontFamily.semiBold, fontSize: fontSizes.f14 }}>Upload a Prescription and Tell Us What  you Need. We do the Rest. !</Text>
          <View style={styles.row}>
            <CustomText style={{ fontFamily: fontFamily.bold, fontSize: fontSizes.f14, color: colors.pText, width: width * 0.3, marginTop: 8 }} text="Flat 25% OFF ON MEDICINES" />
            <CustomButton title='Order Now' buttonStyle={{ width: width * 0.4, height: width * 0.12, backgroundColor: "#1C82DF" }} onPress={() => console.log("handleOrderNow")} textStyle={{ fontSize: fontSizes.f20 }} />
          </View>
        </View>
        <Spacer height={width * 0.035} />

        {
          serviceData?.map((item) => (
            <ServiceCard
              type={item?.type}
              title={item?.title}
              description={item?.description}
              image={item?.image}
            />
          ))
        }
      </View>
      <View style={{ height: width * 0.45, width: width * 0.6, backgroundColor: "#F5E1E9", borderRadius: 15, position: "absolute", left: -width * 0.175, bottom: width * 0.3, zIndex: 0 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: topInset,
    paddingHorizontal: width * 0.05
  },
  columnStyle: {
    justifyContent: "space-between",
    paddingVertical: 5
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: width * 0.1,
  },
  uploadContainer: {
    marginTop: width * 0.035,
  }
});
