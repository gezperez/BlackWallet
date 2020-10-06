import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { AppTheme, DarkTheme } from "../Utils/Theme";
import InitialStack from "./InitialStack";
import HomeStack from "./HomeStack";
import SlideUpAnimation from "./NavigationUtils";

const Stack = createStackNavigator();

const Navigator = () => {
	const scheme = useColorScheme();

	return (
		<AppearanceProvider>
			<SafeAreaProvider>
				<NavigationContainer theme={scheme === "dark" ? DarkTheme : AppTheme}>
					<Stack.Navigator
						initialRouteName="InitialStack"
						screenOptions={{
							headerShown: false,
							...(SlideUpAnimation as any),
						}}
					>
						<Stack.Screen name="InitialStack" component={InitialStack} />
						<Stack.Screen name="HomeStack" component={HomeStack} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</AppearanceProvider>
	);
};

export default Navigator;
