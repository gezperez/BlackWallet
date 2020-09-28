import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

const styles = StyleSheet.create({
	dot: {
		borderRadius: 16,
		backgroundColor: "white",
	},
});

type DotProps = {
	style: object;
};

const config = {
	duration: 1500,
	useNativeDriver: true,
};

const Dot = ({ style }: DotProps) => {
	const translateY = useRef(new Animated.Value(300)).current;
	const translateX = useRef(new Animated.Value(300)).current;
	const spin = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.parallel([
			Animated.timing(translateY, { ...config, toValue: 0 }),
			Animated.timing(translateX, { ...config, toValue: 0 }),
			Animated.timing(spin, { ...config, toValue: 1 }),
		] as any).start();
	}, []);

	const rotate = spin.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "180deg"],
	});

	return (
		<Animated.View
			style={[
				styles.dot,
				style,
				{ transform: [{ translateY }, { rotate }, { translateX }] },
			]}
		/>
	);
};

export default Dot;
