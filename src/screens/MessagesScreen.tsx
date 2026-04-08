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
import { AppConstants } from '../utils/appConstants';

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
      title: AppConstants.messages.uploadLink,
      image: appImages.file
    },
    {
      id: 2,
      title: AppConstants.messages.uploadFile,
      image: appImages.upload
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableImage imageSource={appImages.back} imageStyle={styles.backImage} onPress={() => goBack()} />
        <Image source={appImages.location} style={styles.locationImage} resizeMode="contain" />
        <Text style={styles.locationText}>{AppConstants.messages.location}</Text>
      </View>
      <Spacer height={width * 0.03} />
      <Text style={styles.pharmacyTitle}>{AppConstants.messages.pharmacyNearby}</Text>
      <Spacer height={width * 0.03} />
      <View style={styles.pharmacyListContainer}>
        <FlatList
          data={pharmacyData}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={styles.pharmacyListContent}
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
      <Text style={styles.uploadTitle}>{AppConstants.messages.uploadPrescription}</Text>
      <Text style={styles.uploadSubtitle}>{AppConstants.messages.uploadDesc}</Text>
      <Spacer height={width * 0.03} />
      <View style={styles.optionsContainer}>
        {
          uploadOptions?.map((item) => {
            return (
              <View key={item.id} style={styles.optionItem}>
                <TouchableImage imageSource={item?.image} imageStyle={styles.optionImage} onPress={() => {}} />
                <CustomText style={styles.optionText} text={item?.title} />
              </View>
            )
          })
        }
      </View>
      <CustomButton title={AppConstants.messages.continue} buttonStyle={styles.continueBtn} onPress={() => {}} />
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backImage: {
    height: 50,
    width: 50
  },
  locationImage: {
    height: 26,
    width: 32,
    marginHorizontal: width * 0.04
  },
  locationText: {
    fontSize: fontSizes.f20,
    fontFamily: fontFamily.medium,
    color: colors.black
  },
  pharmacyTitle: {
    fontSize: fontSizes.f24,
    fontFamily: fontFamily.semiBold,
    color: colors.black
  },
  pharmacyListContainer: {
    height: width * 0.5
  },
  pharmacyListContent: {
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  uploadTitle: {
    fontSize: fontSizes.f31,
    fontFamily: fontFamily.medium,
    color: colors.black,
    textAlign: 'center'
  },
  uploadSubtitle: {
    fontSize: fontSizes.f18,
    fontFamily: fontFamily.regular,
    color: colors.black,
    textAlign: 'center',
    width: width * 0.9
  },
  optionsContainer: {
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: colors.black,
    width: width * 0.9,
    padding: width * 0.075,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  optionItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionImage: {
    height: 74,
    width: 74
  },
  optionText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSizes.f20,
    color: colors.black,
    marginTop: 8
  },
  continueBtn: {
    backgroundColor: colors.greenButton,
    marginRight: width * 0.05,
    marginTop: width * 0.075
  }
});
