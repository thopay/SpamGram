import { useState } from "react";
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    TextInput,
    Keyboard
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

function AuthScreen({ setAuthenticated, phone, setPhone }) {

	const navigation = useNavigation();

    return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#090909",
			}}
		>
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<View style={styles.headSection}>
					<Text style={styles.header}>Welcome to SpamGram!</Text>
				</View>
				<View>
					<TextInput
						value={phone}
						style={{
							padding: RFValue(24, 926),
							margin: RFValue(12, 926),
							backgroundColor: "#1D1E21",
							width: (399 / 428) * SCREEN_WIDTH,
							borderColor: "#FCCFFD",
							borderWidth: 1,
							borderRadius: 15,
							height: 75,
							fontSize: RFValue(28, 926),
							color: 'white'
						}}
						onChangeText={(newPhone) => {
							setPhone(newPhone)
							if (newPhone.length >= 10) {
								Keyboard.dismiss()
							}
						}}
						placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
						placeholder={"Phone Number"}
						keyboardType={'phone-pad'}
					/>
				</View>
				<View>
					<TouchableHighlight
						onPress={() => navigation.navigate("Verify", {
							setAuthenticated,
							phone
						})}
						style={[styles.menuOption,{
							opacity: phone.length >= 10 ? 1.0 : 0.5,
						}]}
						disabled={!(phone.length >= 10)}
						underlayColor={"#000"}
					>
						<Text style={styles.menuOptionText}>
							Continue
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        color: "white",
        fontSize: RFValue(60, 926),
        fontWeight: "bold",
    },
    subheader: {
        color: "white",
        fontSize: RFValue(30, 926),
        fontWeight: "200",
    },
    menuOption: {
        padding: RFValue(24, 926),
        margin: RFValue(12, 926),
        backgroundColor: "#1D1E21",
        width: (399 / 428) * SCREEN_WIDTH,
        borderColor: "#FCCFFD",
        borderWidth: 1,
        borderRadius: 15,
    },
    menuOptionText: {
        color: "white",
        fontSize: RFValue(32, 926),
        textAlign: "center",
    },
    headSection: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: RFValue(50, 926),
    },
})

export default AuthScreen;
