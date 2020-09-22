import React, { ReactNode } from "react";
import {
	View,
	Dimensions,
	ScrollView,
	TouchableWithoutFeedback,
	TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "@react-navigation/native";
import { useSafeArea } from "react-native-safe-area-context";
import Colors from "../Utils/Colors";

type Props = {
	visible: boolean;
	children: ReactNode;
	handleCancel: () => void;
};

const BottomModal = ({ visible, children, handleCancel }: Props) => {
	const { colors, dark } = useTheme();
	const insets = useSafeArea();
	return (
		<Modal
			isVisible={visible}
			onBackButtonPress={() => handleCancel()}
			onBackdropPress={() => handleCancel()}
			style={{ margin: 0, padding: 0, justifyContent: "flex-end" }}
			useNativeDriver={true}
			backdropTransitionOutTiming={0}
		>
			<ScrollView
				contentContainerStyle={{ justifyContent: "flex-end", flexGrow: 1 }}
			>
				<TouchableWithoutFeedback onPress={() => handleCancel()}>
					<View
						style={{
							height: Dimensions.get("screen").height * 0.35,
							flex: 1,
						}}
					/>
				</TouchableWithoutFeedback>
				<View
					style={{
						backgroundColor: dark ? Colors.gray : "white",
						borderTopStartRadius: 8,
						borderTopEndRadius: 8,
						paddingBottom: insets.bottom,
					}}
				>
					<TouchableOpacity
						style={{
							justifyContent: "center",
							alignItems: "center",
							height: 40,
							borderTopStartRadius: 8,
							borderTopEndRadius: 8,
						}}
					>
						<View
							style={{
								width: 38,
								height: 8,
								borderRadius: 100,
								backgroundColor: colors.border,
							}}
						/>
					</TouchableOpacity>
					{children}
				</View>
			</ScrollView>
		</Modal>
	);
};

BottomModal.defaultProps = {
	handleCancel: () => {},
};

export default BottomModal;
