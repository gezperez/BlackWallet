import React, { ReactNode } from "react";
import { useSafeArea } from "react-native-safe-area-context";
import {
	ScrollView,
	Platform,
	View,
	StatusBar,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { useTheme } from "@react-navigation/native";

type Props = {
	children: ReactNode;
	contentContainerStyle?: object;
};

const Container = ({ children, contentContainerStyle }: Props) => {
	const insets = useSafeArea();
	const { colors, dark } = useTheme();
	return (
		<View
			style={{
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
				flex: 1,
			}}
		>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<KeyboardAvoidingView
					style={{
						flex: 1,
					}}
					behavior={Platform.OS == "ios" ? "padding" : null}
					keyboardVerticalOffset={100}
				>
					<ScrollView
						contentContainerStyle={[
							{
								justifyContent: "space-between",
								flexGrow: 1,
							},
							contentContainerStyle,
						]}
						keyboardShouldPersistTaps="always"
					>
						<StatusBar
							barStyle={dark ? "light-content" : "dark-content"}
							backgroundColor={colors.background}
						/>

						{children}
					</ScrollView>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</View>
	);
};
export default Container;
