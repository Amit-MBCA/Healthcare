import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import RemindersScreen from "../screens/RemindersScreen";
import QuestionsScreen from "../screens/QuestionsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import CalendarScreen from "../screens/CalendarScreen";
import { appImages } from "../themes/appImages";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          let iconSource: any;

          if (route.name === "Home") {
            iconSource = focused ? appImages.home : appImages.darkHome;
          } else if (route.name === "File") {
            iconSource = focused ? appImages.darkFile : appImages.darkFile;
          } else if (route.name === "Messages") {
            iconSource = focused ? appImages.chat : appImages.darkChat;
          } else if (route.name === "Calendar") {
            iconSource = focused ? appImages.darkCal : appImages.darkCal;
          }

          return (
            <Image
              source={iconSource}
              style={{ width: 24, height: 24, marginTop: 24 }}
              resizeMode="contain"
            />
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#D9D9D9",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          alignItems: 'center',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="File" component={RemindersScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}