import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useTheme } from "@react-navigation/native";
import { HomeStackParamsList } from "../../Navigator/HomeStack";
import { Container, CustomText } from "../../Components";
import { Fonts } from "../../Utils";

type DetailScreenNavigationProp = StackNavigationProp<
	HomeStackParamsList,
	"Detail"
>;

type DetailScreenRouteProp = RouteProp<HomeStackParamsList, "Detail">;

type Props = {
	navigation: DetailScreenNavigationProp;
	route: DetailScreenRouteProp;
};

const DetailScreen = ({ route }: Props) => {
	const { dark } = useTheme();
	const { BTC, USD, EUR } = route.params?.item;
	return (
		<Container>
			<View>
				<CustomText
					semiBold={true}
					text={`BTC ${BTC}`}
					color={dark ? "white" : "black"}
					align="center"
					size={Fonts.big}
					style={{ marginTop: 48 }}
				/>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 48,
						marginHorizontal: 24,
					}}
				>
					<CustomText
						semiBold={true}
						text={`USD ${USD}`}
						color={dark ? "white" : "black"}
						size={Fonts.bigMedium}
						align="center"
					/>
					<CustomText
						semiBold={true}
						text={`EUR ${EUR}`}
						color={dark ? "white" : "black"}
						size={Fonts.bigMedium}
						align="center"
					/>
				</View>
			</View>
		</Container>
	);
};

export default DetailScreen;
