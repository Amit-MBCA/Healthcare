import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import PharmacyCard from '../components/PharmacyCard';
import { appImages } from '../themes/appImages';
import { topInset, width } from '../themes/spacing';
import { colors } from '../themes/colors';
import { fontFamily } from '../assets/fonts/fontFamily';
import fontSizes from '../themes/fontSizes';
import Spacer from '../components/spacer';
import TouchableImage from '../components/TouchableImage';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import { goBack } from '../navigations/navigationServices';

export default function MessagesScreen() {
  const pharmacyData = [
    {
      id: "1",
      name: "Apollo Pharmacy",
      image: appImages.dummy,
      distance: "1.2 km",
      rating: "4.5 (120 reviews)",
    },
    {
      id: "2",
      name: "MedPlus",
      image: appImages.dummy,
      distance: "2.0 km",
      rating: "4.5 (120 reviews)",
    },
    {
      id: "3",
      name: "Wellness Pharmacy",
      image: appImages.dummy,
      distance: "800 m",
      rating: "4.5 (120 reviews)",
    },
  ];
  const uploadOptions = [
    {
      id: 1,
      title: "Upload Link",
      image: appImages.file
    },
    {
      id: 2,
      title: "Upload File",
      image: appImages.upload
    },
  ]
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableImage imageSource={appImages.back} imageStyle={{ height: 50, width: 50 }} onPress={() => goBack()} />
        <Image source={appImages.location} style={{ height: 26, width: 32, marginHorizontal: width * 0.04 }} resizeMode="contain" />
        <Text style={{ fontSize: fontSizes.f20, fontFamily: fontFamily.medium, color: colors.black }}>Mohali</Text>
      </View>
      <Spacer height={width * 0.03} />
      <Text style={{ fontSize: fontSizes.f24, fontFamily: fontFamily.semiBold, color: colors.black }}>Pharmacy Nearby</Text>
      <Spacer height={width * 0.03} />
      <View style={{ height: width * 0.5 }}>
        <FlatList
          data={pharmacyData}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={{ alignItems: 'center', alignSelf: 'flex-start' }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <PharmacyCard
              name={item.name}
              image={item.image}
              distance={item.distance}
              rating={item.rating}
            />
          )}
        />
      </View>
      <Spacer height={width * 0.075} />
      <Text style={{ fontSize: fontSizes.f31, fontFamily: fontFamily.medium, color: colors.black, textAlign: 'center' }}>Upload Prescription</Text>
      <Text style={{ fontSize: fontSizes.f18, fontFamily: fontFamily.regular, color: colors.black, textAlign: 'center', width: width * 0.9 }}>We will show the pharmacy that fits as per your prescription.</Text>
      <Spacer height={width * 0.03} />
      <View style={{ borderRadius: 20, borderWidth: 0.5, borderColor: colors.black, width: width * 0.9, padding: width * 0.075, flexDirection: 'row', justifyContent: 'space-between' }}>
        {
          uploadOptions?.map((item) => {
            return (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableImage imageSource={item?.image} imageStyle={{ height: 74, width: 74 }} />
                <CustomText style={{ fontFamily: fontFamily.medium, fontSize: fontSizes.f20, color: colors.black, marginTop: 8 }} text={item?.title} />
              </View>
            )
          })
        }
      </View>
      <CustomButton title='Continue' buttonStyle={{ backgroundColor: '#41B592', marginRight: width * 0.05, marginTop: width * 0.075 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: topInset,
    backgroundColor: colors.white,
    paddingLeft: width * 0.05
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    marginTop: 10,
  },
});
