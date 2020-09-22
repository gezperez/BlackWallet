import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Container from "../../Components/Container";
import BottomButton from "../../Components/BottomButton";
import { version } from "../../../package.json";
import AppTitle from "./components/AppTitle";
import { InitialStackParamsList } from "../../Navigator/InitialStack";

type LoginScreenNavigationProp = StackNavigationProp<
	InitialStackParamsList,
	"Login"
>;

type Props = {
	navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
	const handleButton = () => navigation.navigate("Register");

	useEffect(() => {
		navigation.setParams({ title: version });
	}, []);

	return (
		<Container>
			<ScrollView
				contentContainerStyle={{
					justifyContent: "space-between",
					flexGrow: 1,
				}}
			>
				<AppTitle />
				<BottomButton
					label={"Continuar"}
					onPress={() => handleButton()}
					style={{ margin: 24 }}
				/>
			</ScrollView>
		</Container>
	);
};

export default LoginScreen;
