import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { times } from "lodash";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "./CustomText";
import Colors from "../Utils/Colors";

const numberDots = times(12);
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-end",
		alignItems: "flex-end",
		height: 200,
		width: width - 32,
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
	dot: {
		borderRadius: 16,
		backgroundColor: "white",
	},
	logoDot: {
		position: "absolute",
		width: 40,
		height: 12,
		bottom: 16,
	},
});

type DotProps = {
	style: object;
};

const Dot = ({ style }: DotProps) => <View style={[styles.dot, style]} />;

const WalletCard = () => {
	return (
		<View>
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
				<CustomText
					bold={true}
					text={"Black"}
					style={{
						marginRight: 16,
					}}
					size={40}
				/>
				<CustomText
					bold={true}
					text={"Wallet"}
					color={"white"}
					style={{ marginRight: 16, marginBottom: 8 }}
					size={40}
				/>
			</LinearGradient>
		</View>
	);
};

export default WalletCard;
