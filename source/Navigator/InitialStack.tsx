import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import LoginScreen from "../Screens/Login/LoginScreen";
import { LoginHeader } from "./Headers";
import RegisterScreen from "../Screens/Register/RegisterScreen";
import { SlideUpAnimation } from "./NavigationUtils";

type InitialStackParamsList = {
	Login: { title: string };
	Register: { title: string };
};

const Stack = createStackNavigator<InitialStackParamsList>();

const InitialStack = () => {
	const { dark } = useTheme();
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{ ...(SlideUpAnimation as any) }}
		>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={({ route }) => LoginHeader({ route, dark })}
			/>
			<Stack.Screen
				name="Register"
				component={RegisterScreen}
				options={({ route }) => LoginHeader({ route, dark })}
			/>
		</Stack.Navigator>
	);
};

export { InitialStackParamsList };

export default InitialStack;
