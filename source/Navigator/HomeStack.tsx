import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Home/HomeScreen";

type HomeStackParamsList = {
	Home: undefined;
};

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default HomeStack;
