import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { times } from "lodash";
import LinearGradient from "react-native-linear-gradient";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomText from "./CustomText";
import Colors from "../Utils/Colors";
import FadeInSlideUpView from "../AnimatedContainers/FadeInSlideUpView";
import Dot from "./Dot";

const numberDots = times(12);

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-end",
		alignItems: "flex-end",
		height: hp("22%"),
		width: wp("92%"),
		borderRadius: 16,
	},
	numberContainer: {
		position: "absolute",
		top: 16,
		left: 8,
		width: "100%",
		height: 30,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	logoDot: {
		position: "absolute",
		width: 40,
		height: 12,
		bottom: 16,
	},
});

const config = {
	duration: 1500,
	useNativeDriver: true,
};

const WalletCard = () => {
	const translateY = useRef(new Animated.Value(300)).current;

	useEffect(() => {
		Animated.timing(translateY, { ...config, toValue: 0 }).start();
	}, []);

	return (
		<FadeInSlideUpView>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={[Colors.lightPink, Colors.pink]}
				style={[styles.container]}
			>
				<View style={styles.numberContainer}>
					{numberDots.map((_, index) => {
						const style = {
							width: 16,
							height: 8,
							marginHorizontal: 4,

							marginRight: index === 3 || index === 7 ? 12 : 2,
						};
						return <Dot key={index} style={style} />;
					})}
				</View>
				<Dot style={[styles.logoDot, { left: 16 }]} />
				<Dot style={[styles.logoDot, { left: 64 }]} />
				<Dot style={[styles.logoDot, { bottom: 72, width: 60, left: 16 }]} />
				<Dot style={[styles.logoDot, { bottom: 72, width: 60, left: 88 }]} />
				<Animated.View
					style={{
						marginRight: 16,
						transform: [{ translateY }],
					}}
				>
					<CustomText bold={true} text={"Black"} size={40} />
				</Animated.View>
				<Animated.View
					style={{
						marginRight: 16,
						marginBottom: 8,
						transform: [{ translateY }],
					}}
				>
					<CustomText bold={true} text={"Wallet"} color={"white"} size={40} />
				</Animated.View>
			</LinearGradient>
		</FadeInSlideUpView>
	);
};

export default WalletCard;
