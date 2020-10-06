import React, { useRef, useEffect } from "react";
import { StyleSheet, Animated } from "react-native";
import { Colors, Fonts } from "../Utils";
import { CustomText } from ".";
import SpringView from "../AnimatedContainers/SpringView";

const styles = StyleSheet.create({
	container: {
		width: 30,
		height: 30,
		borderRadius: 8,
		justifyContent: "center",
		alignSelf: "center",
		backgroundColor: Colors.pink,
		marginVertical: 8,
	},
});

type Props = {
	loading: boolean;
};

const config = {
	toValue: 1,
	duration: 1000,
	useNativeDriver: true,
	isInteraction: false,
};

const ProgressLoader = ({ loading }: Props) => {
	const clock = useRef(new Animated.Value(0)).current;
	const animation = useRef(Animated.loop(Animated.timing(clock, config)))
		.current;

	const translateY = clock.interpolate({
		inputRange: [0, 0.5, 1],
		outputRange: [0, 10, 0],
		extrapolate: "clamp",
	});

	const rotate = clock.interpolate({
		inputRange: [0, 0.5, 1],
		outputRange: [0, Math.PI, Math.PI * 2],
		extrapolate: "clamp",
	});

	useEffect(() => {
		if (loading) {
			animation.start();
		} else {
			animation.stop();
			clock.setValue(0);
		}

		return () => animation.stop();
	}, [loading, animation]);

	return (
		<SpringView show={loading} style={{ paddingBottom: 10 }}>
			<Animated.View
				style={
					{
						...styles.container,
						transform: [{ translateY }, { rotate }],
					} as any
				}
			>
				<CustomText
					align="center"
					text={"B"}
					color={"white"}
					size={Fonts.medium}
					semiBold={true}
				/>
			</Animated.View>
		</SpringView>
	);
};

export default ProgressLoader;
