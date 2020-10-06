import React, { Fragment } from "react";
import { FlatList, Dimensions, StyleSheet, View } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { ProgressLoader, ListItem, CustomText } from ".";
import { Fonts, Colors } from "../Utils";

const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
	itemContainer: {
		height: 80,
		borderRadius: 16,
		marginVertical: 8,
		padding: 16,
	},
	titleStyle: {
		fontSize: Fonts.bigMedium,
		marginBottom: 8,
		color: Colors.pink,
	},
	subtitleStyle: {},
	rightText: {
		marginBottom: 8,
	},
});

type Props = {
	loading: boolean;
	items: Array<object>;
	onRefresh: () => void;
};

const CustomFlatList = ({ loading, items, onRefresh }: Props) => {
	const { dark, colors } = useTheme();

	const navigation = useNavigation();
	return (
		<Fragment>
			<ProgressLoader loading={loading} />
			<FlatList
				onScrollEndDrag={(e) => {
					if (e.nativeEvent.contentOffset.y < -100) {
						onRefresh();
					}
				}}
				data={Object.keys(items)}
				keyExtractor={(_, index) => index.toString()}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<ListItem
						onPress={() =>
							navigation.navigate("Detail", { title: item, item: items[item] })
						}
						title={item}
						titleStyle={styles.titleStyle}
						subtitle={`BTC ${items[item].BTC}`}
						subtitleStyle={styles.subtitleStyle}
						style={{
							...styles.itemContainer,
							borderWidth: 1,
							borderColor: dark ? Colors.pink : Colors.lightGray,
							backgroundColor: colors.background,
						}}
						right={
							<View style={{ flex: 1 }}>
								<CustomText
									semiBold={true}
									style={styles.rightText}
									text={`USD ${items[item].USD}`}
									size={Fonts.medium}
									color={dark ? "white" : "black"}
								/>
								<CustomText
									align="right"
									style={styles.rightText}
									text={`EUR ${items[item].EUR}`}
									color={dark ? "white" : "black"}
								/>
							</View>
						}
					/>
				)}
				removeClippedSubviews={true}
				windowSize={HEIGHT}
				getItemLayout={(_, index) => ({
					length: styles.itemContainer.height,
					offset: styles.itemContainer.height * index,
					index,
				})}
			/>
		</Fragment>
	);
};

export default CustomFlatList;
