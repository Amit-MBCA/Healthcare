import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';
import { AppConstants } from '../utils/appConstants';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import LogoutModal from '../components/LogoutModal';

export default function HomeScreen() {
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    setLogoutModalVisible(false);
    dispatch(logout());
  };
  const buttonOptions = [
    {
      id: 1,
      title: AppConstants.home.questions,
      img: appImages.options
    },
    {
      id: 2,
      title: AppConstants.home.reminders,
      img: appImages.table
    },
    {
      id: 3,
      title: AppConstants.home.messages,
      img: appImages.think
    },
    {
      id: 4,
      title: AppConstants.home.calendar,
      img: appImages.cal
    },
  ];

  const serviceData = [
    {
      id: 1,
      title: AppConstants.home.bestService,
      description: AppConstants.home.bestServiceDesc,
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
  ];

  return (
    <View style={styles.container}>
      <HomeHeader
        onBurgerPress={() => setLogoutModalVisible(true)}
        onMicPress={() => {}}
      />

      <Spacer height={width * 0.035} />

      <Animated.View entering={FadeIn.duration(1100)}>
        <FlatList
          data={buttonOptions}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnStyle}
          ItemSeparatorComponent={() => <Spacer width={width * 0.025} />}
          renderItem={({ item }) => (
            <ButtonWithRightIcon
              title={item.title}
              onPress={() => {}}
              rightIcon={item?.img}
            />
          )}
        />
      </Animated.View>

      <View style={styles.uploadContainer}>
        <Text style={styles.uploadTitle}>{AppConstants.home.uploadPrescription}</Text>
        <Text style={styles.uploadSubtitle}>{AppConstants.home.uploadDesc}</Text>
        <View style={styles.row}>
          <CustomText style={styles.discountText} text={AppConstants.home.discount} />
          <CustomButton 
            title={AppConstants.home.orderNow} 
            buttonStyle={styles.orderButton} 
            onPress={() => {}} 
            textStyle={styles.orderButtonText} 
          />
        </View>
      </View>
      <Spacer height={width * 0.035} />

      {
        serviceData?.map((item, index) => (
          <Animated.View key={item.id.toString()} entering={index === 0 ? FadeIn.duration(1100) : SlideInRight.duration(1100)} style={styles.serviceItem}>
            <ServiceCard
              type={item?.type}
              title={item?.title}
              description={item?.description}
              image={item?.image}
            />
          </Animated.View>
        ))
      }
      <View style={styles.backgroundShape} />
      <LogoutModal 
        visible={isLogoutModalVisible}
        onClose={() => setLogoutModalVisible(false)}
        onConfirm={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: topInset,
    paddingHorizontal: width * 0.05,
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
  },
  uploadTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSizes.f17,
    color: colors.pText
  },
  uploadSubtitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSizes.f14
  },
  discountText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSizes.f14,
    color: colors.pText,
    width: width * 0.3,
    marginTop: 8
  },
  orderButton: {
    width: width * 0.4,
    height: width * 0.12,
    backgroundColor: colors.primaryButton
  },
  orderButtonText: {
    fontSize: fontSizes.f20
  },
  serviceItem: {
    zIndex: 1
  },
  backgroundShape: {
    height: width * 0.45,
    width: width * 0.6,
    backgroundColor: colors.pinkBg,
    borderRadius: 15,
    position: "absolute",
    left: -width * 0.175,
    bottom: width * 0.3,
    zIndex: 0
  }
});
