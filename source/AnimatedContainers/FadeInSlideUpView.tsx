import React, { useEffect, useRef, ReactNode } from "react";
import { Animated } from "react-native";

type Props = {
	style?: object;
	children: ReactNode;
};

const config = {
	duration: 500,
	useNativeDriver: true,
};

const FadeInSlideUpView = ({ style, children }: Props) => {
	const translateY = useRef(new Animated.Value(30)).current;
	const opacity = useRef(new Animated.Value(0)).current;
	const scaleX = useRef(new Animated.Value(0.95)).current;
	const scaleY = useRef(new Animated.Value(0.95)).current;

	useEffect(() => {
		Animated.parallel([
			Animated.timing(opacity, { ...config, toValue: 1 }),
			Animated.timing(scaleX, { ...config, toValue: 1 }),
			Animated.timing(scaleY, { ...config, toValue: 1 }),
			Animated.timing(translateY, {
				...config,
				toValue: 0,
			} as any),
		] as any).start();
	}, []);

	return (
		<Animated.View
			style={{
				...style,
				opacity,
				transform: [{ translateY }, { scaleX }, { scaleY }],
			}}
		>
			{children}
		</Animated.View>
	);
};

export default FadeInSlideUpView;
