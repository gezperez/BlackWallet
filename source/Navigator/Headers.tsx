import React from "react";
import { View, Platform } from "react-native";
import { RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/dist/AntDesign";
import Fonts from "../Utils/Fonts";
import CustomText from "../Components/CustomText";
import Colors from "../Utils/Colors";
import { InitialStackParamsList } from "./InitialStack";
import { HomeStackParamsList } from "./HomeStack";

type InitialScreenRouteProp = RouteProp<
	InitialStackParamsList,
	"Login" | "Register"
>;

type DetailScreenRouteProp = RouteProp<HomeStackParamsList, "Detail">;

type DetailProps = {
	route: DetailScreenRouteProp;
	dark: boolean;
};

type InitialProps = {
	route: InitialScreenRouteProp;
	dark: boolean;
};

type HomeProps = {
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

const HomeTitle = (dark) => (
	<CustomText
		semiBold={true}
		text=""
		color={dark ? "white" : "black"}
		size={Fonts.medium}
	>
		{"Black "}
		<CustomText
			semiBold={true}
			text={"Wallet"}
			color={Colors.pink}
			size={Fonts.medium}
		/>
	</CustomText>
);

const LoginHeader = ({ route, dark }: InitialProps) => {
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

const DetailHeader = ({ route, dark }: DetailProps) => {
	return {
		headerBackTitle: " ",
		headerTitleAlign: "center" as "center",
		headerStyle: {
			backgroundColor: dark ? "black" : "white",
			elevation: 0,
			borderBottomWidth: 2,
			shadowOpacity: 0,
		},
		headerBackImage: () => BackIcon(),
		headerTitle: () => Title(route?.params?.title, dark),
	};
};

const HomeHeader = ({ dark }: HomeProps) => {
	return {
		headerStyle: {
			backgroundColor: dark ? "black" : "white",
			elevation: 0,
			borderBottomWidth: 0,
			shadowOpacity: 0,
		},
		headerTitle: () => HomeTitle(dark),
	};
};

export { LoginHeader, HomeHeader, DetailHeader };
