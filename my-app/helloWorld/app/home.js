import { registerRootComponent } from "expo";
import React from "react";
import { SafeAreaView } from "react-native";
import { COLORS, icons } from "../constants";
import { ScreenHeaderBtn } from "../components";
import { Stack, useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen" // Add a unique name for the screen
          component={() => (
            // Your screen content goes here
            // You can use your existing code for header options
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: true,
                headerLeft: () => (
                  <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                  <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%" />
                ),
              }}
            />
          )}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

registerRootComponent(Home);
