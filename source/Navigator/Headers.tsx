import React from "react";
import { View, Platform } from "react-native";
import { RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/dist/AntDesign";
import Fonts from "../Utils/Fonts";
import CustomText from "../Components/CustomText";
import Colors from "../Utils/Colors";
import { InitialStackParamsList } from "./InitialStack";

type ProfileScreenRouteProp = RouteProp<
	InitialStackParamsList,
	"Login" | "Register"
>;

type Props = {
	route: ProfileScreenRouteProp;
	dark: boolean;
};

const BackIcon = () => (
	<View style={{ marginLeft: Platform.OS === "ios" ? 16 : 0 }}>
		<Icon name={"arrowleft"} color={Colors.pink} size={26} />
	</View>
);

const Title = (title, dark) => (
	<CustomText
		semiBold={true}
		text={title}
		color={dark ? "white" : "black"}
		size={Fonts.small}
	/>
);

const LoginHeader = ({ route, dark }: Props) => {
	return {
		headerBackTitle: " ",
		headerTitleAlign: "center" as "center",
		headerStyle: {
			backgroundColor: dark ? "black" : "white",
			elevation: 0,
			borderBottomWidth: 0,
			shadowOpacity: 0,
		},
		headerBackImage: () => BackIcon(),
		headerTitle: () => Title(route?.params?.title, dark),
	};
};

const HomeHeader = ({ dark }: Props) => {
	return {
		headerStyle: {
			backgroundColor: dark ? "black" : "white",
			elevation: 0,
			borderBottomWidth: 0,
			shadowOpacity: 0,
		},
		headerTitle: () => {},
	};
};

export { LoginHeader, HomeHeader };
