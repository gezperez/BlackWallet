import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import HomeScreen from "../Screens/Home/HomeScreen";
import SlideUpAnimation from "./NavigationUtils";
import { HomeHeader, DetailHeader } from "./Headers";
import DetailScreen from "../Screens/Detail/DetailScreen";

type HomeStackParamsList = {
	Home: undefined;
	Detail: { title: string; item: { BTC: number; USD: number; EUR: number } };
};

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
	const { dark } = useTheme();
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ ...(SlideUpAnimation as any) }}
		>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={() => HomeHeader({ dark })}
			/>
			<Stack.Screen
				name="Detail"
				component={DetailScreen}
				options={({ route }) => DetailHeader({ route, dark })}
			/>
		</Stack.Navigator>
	);
};

export { HomeStackParamsList };

export default HomeStack;
