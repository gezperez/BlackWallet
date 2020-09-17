import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
	AppearanceProvider,
	useColorScheme,
	Appearance,
} from "react-native-appearance";
import HomeScreen from "../Screens/Home/HomeScreen";
import LoginScreen from "../Screens/Login/LoginScreen";
import { AppTheme, DarkTheme } from "../Themes/Theme";

const Stack = createStackNavigator();
Appearance.getColorScheme();

const Navigator = () => {
	const scheme = useColorScheme() as String;
	return (
		<AppearanceProvider>
			<SafeAreaProvider>
				<NavigationContainer theme={scheme === "dark" ? DarkTheme : AppTheme}>
					<Stack.Navigator
						initialRouteName="Login"
						screenOptions={{ headerShown: false }}
					>
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Home" component={HomeScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</AppearanceProvider>
	);
};

export default Navigator;
