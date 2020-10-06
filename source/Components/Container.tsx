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
	scrollable?: boolean;
};

const Container = ({ children, contentContainerStyle, scrollable }: Props) => {
	const insets = useSafeArea();
	const { colors, dark } = useTheme();

	const Component = scrollable ? ScrollView : View;

	return (
		<View
			style={{
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
				>
					<Component
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
					</Component>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</View>
	);
};

Container.defaultProps = {
	scrollable: true,
};

export default Container;
