import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	TextInputProps,
	KeyboardTypeOptions,
	Dimensions,
	View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import Animated, { Easing, interpolate } from "react-native-reanimated";
import { interpolateColor, useTransition } from "react-native-redash";
import FadeInSlideUpView from "../AnimatedContainers/FadeInSlideUpView";
import { Fonts, Colors } from "../Utils";
import { fonts } from "./CustomText";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
		alignSelf: "stretch",
		alignItems: "stretch",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	dot: {
		width: 16,
		height: 6,
		marginLeft: 16,
		borderRadius: 3,
		backgroundColor: Colors.pink,
	},
	textInput: {
		flex: 1,
		fontSize: Fonts.smallMedium,
		fontFamily: fonts.semiBold,
		fontWeight: "normal",
		padding: 16,
		paddingHorizontal: 16,
	},
});

interface InputProps extends TextInputProps {
	containerStyle?: object;
	autoFocus?: boolean;
	textAlign?: "center" | "left" | "right";
	disabled?: boolean;
	value: string;
	keyboardType?: KeyboardTypeOptions;
	autoCapitalize?: "none" | "sentences" | "words" | "characters";
	placeholder: string;
	placeholderTextColor?: string;
	maxLength?: number;
	onChangeText: (text: string) => void;
	onFocus?: () => void;
	onBlur?: () => void;
}

const CustomInput = ({
	containerStyle,
	autoFocus,
	textAlign,
	disabled,
	value,
	keyboardType,
	autoCapitalize,
	placeholder,
	placeholderTextColor,
	maxLength,
	onChangeText,
	onFocus,
	onBlur,
}: InputProps) => {
	const [focused, setFocused] = useState(false);
	const { dark, colors } = useTheme();
	const textColor = dark ? "white" : "black";

	const progress = useTransition(focused, {
		easing: Easing.linear,
		duration: 300,
	});

	const lineColor = interpolateColor(progress, {
		inputRange: [0, 1],
		outputRange: [colors.background, Colors.pink],
	});

	const lineWidth = interpolate(progress, {
		inputRange: [0, 1],
		outputRange: [0, width - 48],
	});

	const handleFocus = () => {
		setFocused(true);
		onFocus();
	};

	const handleBlur = () => {
		setFocused(false);
		onBlur();
	};

	return (
		<FadeInSlideUpView style={{ ...styles.container, containerStyle }}>
			<View style={styles.inputContainer}>
				<View style={styles.dot} />
				<TextInput
					selectionColor={Colors.pink}
					autoFocus={autoFocus}
					style={{
						...styles.textInput,
						textAlign,
						color: disabled ? Colors.gray : textColor,
					}}
					editable={!disabled}
					value={value}
					returnKeyType="done"
					keyboardType={keyboardType}
					maxLength={maxLength}
					autoCapitalize={autoCapitalize}
					placeholder={placeholder}
					placeholderTextColor={
						placeholderTextColor || disabled ? Colors.gray : textColor
					}
					onChangeText={(text) => onChangeText(text)}
					onFocus={() => handleFocus()}
					onBlur={() => handleBlur()}
				/>
			</View>
			<Animated.View
				style={
					{
						alignSelf: "center",
						width: lineWidth,
						height: 2,
						backgroundColor: lineColor,
					} as any
				}
			/>
		</FadeInSlideUpView>
	);
};

CustomInput.defaultProps = {
	onFocus: () => {},
	onBlur: () => {},
};

export default CustomInput;
