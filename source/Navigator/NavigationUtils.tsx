import Colors from "../Utils/Colors";

const config = {
	animation: "timing",
	config: {
		duration: 600,
	},
};

const SlideUpAnimation = {
	cardOverlayEnabled: true,
	transitionSpec: {
		open: config,
		close: config,
	},
	gestureDirection: "vertical",
	cardStyleInterpolator: ({ current, next, layouts }) => {
		return {
			cardStyle: {
				transform: [
					{
						translateY: current.progress.interpolate({
							inputRange: [0, 1],
							outputRange: [layouts.screen.height, 0],
						}),
					},
					{
						scale: next
							? next.progress.interpolate({
									inputRange: [0, 1],
									outputRange: [1, 0.8],
							  })
							: 1,
					},
				],
			},
			overlayStyle: {
				backgroundColor: Colors.pink,
				opacity: current.progress.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 0.5],
				}),
			},
		};
	},
};

export default SlideUpAnimation;
