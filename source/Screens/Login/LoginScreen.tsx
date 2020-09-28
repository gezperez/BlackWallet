import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
	Container,
	BottomButton,
	CustomInput,
	ErrorView,
	SwitchItem,
} from "../../Components";
import { version } from "../../../package.json";
import AppTitle from "./components/AppTitle";
import { InitialStackParamsList } from "../../Navigator/InitialStack";
import { validateInput } from "../../Utils/Utils";

type LoginScreenNavigationProp = StackNavigationProp<
	InitialStackParamsList,
	"Login"
>;

type Props = {
	navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [inputError, setInputError] = useState(undefined);
	const [rememberUser, setRememberUser] = useState(false);

	const validateUser = () => {
		const validatedUser = validateInput({
			name: "Usuario",
			text: user,
			length: 8,
		});
		if (validatedUser) {
			setInputError(validatedUser);
			return false;
		}
		return true;
	};

	const validatePassword = () => {
		const validatedPassword = validateInput({
			name: "Contraseña",
			text: password,
			length: 6,
		});
		if (validatedPassword) {
			setInputError(validatedPassword);
			return false;
		}
		return true;
	};

	const handleButton = () => {
		if (validateUser() && validatePassword()) {
			navigation.reset({
				index: 0,
				routes: [{ name: "HomeStack" }],
			});
		}
	};

	useEffect(() => {
		navigation.setParams({ title: version });
	}, []);

	return (
		<Container>
			<AppTitle />
			<View>
				<CustomInput
					placeholder={"Usuario"}
					value={user}
					onChangeText={(text) => setUser(text)}
					onFocus={() => setInputError(undefined)}
				/>
				<CustomInput
					placeholder={"Contraseña"}
					value={password}
					onChangeText={(text) => setPassword(text)}
					onFocus={() => setInputError(undefined)}
				/>
				<ErrorView text={inputError} />
				<SwitchItem
					title={"Recordar usuario"}
					onToogle={() => setRememberUser(!rememberUser)}
					active={rememberUser}
					style={{ width: "50%", marginTop: hp("2.5%") }}
				/>
			</View>
			<BottomButton
				disabled={inputError}
				label={"Continuar"}
				onPress={() => handleButton()}
			/>
		</Container>
	);
};

export default LoginScreen;
