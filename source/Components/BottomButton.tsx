import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import CustomText from "./CustomText";
import Colors from "../Utils/Colors";
import FadeInSlideUpView from "../AnimatedContainers/FadeInSlideUpView";

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		padding: 8,
		height: 40,
		margin: wp("5%"),
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
		<FadeInSlideUpView>
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
					colors={
						disabled
							? [Colors.lightGray, Colors.lightGray]
							: [Colors.lightPink, Colors.pink]
					}
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
		</FadeInSlideUpView>
	);
};

export default BottomButton;
