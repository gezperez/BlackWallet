import React, { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import Container from "../../Components/Container";
import { InitialStackParamsList } from "../../Navigator/InitialStack";

type RegisterScreenNavigationProp = StackNavigationProp<
	InitialStackParamsList,
	"Register"
>;

type Props = {
	navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({ navigation }: Props) => {
	useEffect(() => {
		navigation.setParams({ title: "Registro" });
	}, []);

	return <Container></Container>;
};

export default RegisterScreen;
