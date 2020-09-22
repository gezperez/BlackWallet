import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import WalletCard from "../../../Components/WalletCard";

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 16,
	},
});

const AppTitle = () => (
	<Animated.View style={styles.container}>
		<WalletCard />
	</Animated.View>
);

export default AppTitle;
