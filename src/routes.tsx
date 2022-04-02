import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "./styles/colors";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "jost_400",
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.darkGray,
        activeTintColor: colors.primary,
      }}
    >
      <Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="tablet-dashboard"
                size={size}
                color={focused ? colors.primary : colors.darkGray}
              />
            );
          },
        }}
        component={Dashboard}
      />
      <Screen
        name="Transações"
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="swap-vertical"
                size={size}
                color={focused ? colors.primary : colors.darkGray}
              />
            );
          },
        }}
        component={Transactions}
      />
      <Screen
        name="Financeiro"
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <FontAwesome5
                name="chart-bar"
                size={size}
                color={focused ? colors.primary : colors.darkGray}
              />
            );
          },
        }}
        component={View}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
