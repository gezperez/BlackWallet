import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "./CustomText";
import Colors from "../Utils/Colors";

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		padding: 8,
		height: 40,
	},
});

type Props = {
	label: string;
	onPress: () => void;
	disabled?: boolean;
	style?: object;
};

const BottomButton = ({ label, onPress, disabled, style }: Props) => {
	const [preventDoubleTap, setPreventDoubleTap] = useState(false);

	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={() => {
				if (!preventDoubleTap) {
					setPreventDoubleTap(true);
					onPress();
					setTimeout(() => setPreventDoubleTap(false), 300);
				}
			}}
		>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={[Colors.lightPink, Colors.pink]}
				style={[styles.container, style]}
			>
				<CustomText
					semiBold={true}
					align="center"
					color={"white"}
					text={label}
					size={16}
				/>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default BottomButton;
