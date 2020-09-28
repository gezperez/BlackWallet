import React from "react";
import { StyleSheet, View } from "react-native";

import WalletCard from "../../../Components/WalletCard";

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
});

const AppTitle = () => (
	<View style={styles.container}>
		<WalletCard />
	</View>
);

export default AppTitle;
