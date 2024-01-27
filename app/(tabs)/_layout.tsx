import React from "react";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import TabBarImage from "@/components/TabBarImage";

// Tab Bar Images
import HomeImg from "@/assets/images/tab_icons/home.svg";
import BetsImg from "@/assets/images/tab_icons/bets.svg";
import PredictionsImg from "@/assets/images/tab_icons/predictions.svg";
import MatchesImg from "@/assets/images/tab_icons/matches.svg";
import FavouritesImg from "@/assets/images/tab_icons/favourites.svg";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="dashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
        tabBarLabelStyle: { fontFamily: "PoppinsMedium", fontSize: 12 },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: TabBarImage(HomeImg),
        }}
      />
      <Tabs.Screen
        name="bets"
        options={{
          title: "Bets",
          tabBarIcon: TabBarImage(BetsImg),
        }}
      />
      <Tabs.Screen
        name="predictions"
        options={{
          title: "Predictions",
          tabBarIcon: TabBarImage(PredictionsImg),
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: "Matches",
          tabBarIcon: TabBarImage(MatchesImg),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          tabBarIcon: TabBarImage(FavouritesImg),
        }}
      />
    </Tabs>
  );
}
