import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { noop } from "lodash";
import { useTheme } from "@react-navigation/native";
import Animated, { interpolate, Easing } from "react-native-reanimated";
import { interpolateColor, useTransition } from "react-native-redash";

const unactiveColor = "#7b7b7b";

const styles = StyleSheet.create({
	bullet: {
		width: 14,
		height: 14,
		borderRadius: 7,
		position: "absolute",
		margin: 4,
	},
	container: {
		borderRadius: 12,
		width: 44,
		height: 22,
		justifyContent: "center",
	},
});

type Props = {
	style: object;
	active: boolean;
	onToogle: () => void;
};

const Switch = ({ style, active, onToogle }: Props) => {
	const { colors } = useTheme();

	const state = useTransition(active, { easing: Easing.linear, duration: 200 });

	const translateX = interpolate(state, {
		inputRange: [0, 1],
		outputRange: [0, 22],
	});

	const bulletColor = interpolateColor(state, {
		inputRange: [0, 1],
		outputRange: [unactiveColor, colors.border],
	});

	return (
		<TouchableWithoutFeedback onPress={() => onToogle()}>
			<View style={[styles.container, style]}>
				<Animated.View
					style={[
						styles.container,
						{ opacity: 0.5, backgroundColor: bulletColor } as any,
					]}
				/>
				<Animated.View
					style={[
						styles.bullet,
						{ backgroundColor: bulletColor } as any,
						{ transform: [{ translateX }] },
					]}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

Switch.defaultProps = {
	style: {},
	active: false,
	onToogle: noop,
};

export default Switch;
