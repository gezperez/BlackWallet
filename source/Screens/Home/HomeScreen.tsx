import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamsList } from "../../Navigator/HomeStack";
import { Container, CustomFlatList } from "../../Components";
import fetchCryptos from "../../store/actions/crypto";

type HomeScreenNavigationProp = StackNavigationProp<
	HomeStackParamsList,
	"Home"
>;

type Props = {
	navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
	const dispatch = useDispatch();

	const { loading, cryptos, error } = useSelector((state) => state.cryptos);

	useEffect(() => {
		dispatch(fetchCryptos());
	}, []);
	return (
		<Container scrollable={false}>
			<CustomFlatList
				loading={loading}
				items={cryptos}
				onRefresh={() => dispatch(fetchCryptos())}
			/>
		</Container>
	);
};

export default HomeScreen;
