import { useEffect, useState } from "react";
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    TextInput,
    Keyboard,
    ActivityIndicator,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

function VerifyScreen({ setAuthenticated, setUser, phone, getAddress }) {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Enable for SMS authentication
        // axios({
        // 	method: 'GET',
        // 	url: `https://spamgramotp.herokuapp.com/login?phonenumber=${phone}`,
        // })
    }, []);

    const checkCode = () => {
        setLoading(true);
        axios({
            method: "GET",
            url: `https://spamgram.herokuapp.com/api/signup?phonenumber=${phone}`,
        }).then((response) => {
            if (response.status == 200) {
                if (response.data.new_user == true) {
                    // TODO - Add new user screen
                }
                setUser({
                    id: response.data._id,
                    name: response.data.username,
                    color: `#${response.data.color}`,
                    emoji: response.data.emoji,
                });
                getAddress(response.data.username);
                setAuthenticated(true);
            }
        });
        // Enable for SMS authentication
        // axios({
        // 	method: 'GET',
        // 	url: `https://spamgramotp.herokuapp.com/verify?phonenumber=${phone}&code=${code}`,
        // }).then((response) => {
        // 	if (response.data.data.valid) {
        // 		axios({
        // 			method: 'GET',
        // 			url: `https://spamgram.herokuapp.com/api/signup?phonenumber=${phone}`,
        // 		}).then((response) => {
        // 			if (response.status == 200) {
        // 				if (response.data.new_user == true) {
        // 					console.log("New User!")
        // 				}
        // 				setUser({
        // 					id: response.data._id,
        // 					name: response.data.username,
        // 					color: `#${response.data.color}`,
        // 					emoji: response.data.emoji
        // 				})
        // 				getAddress(response.data.username)
        // 				setAuthenticated(true)
        // 			}
        // 		})

        // 	} else {
        // 		setLoading(false)
        // 	}
        // });
    };

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
                    <Text style={styles.header}>
                        Please enter the verification code sent to your phone.
                    </Text>
                </View>
                <View>
                    <TextInput
                        value={code}
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
                            color: "white",
                        }}
                        onChangeText={(newCode) => {
                            setCode(newCode);
                            if (newCode.length >= 6) {
                                Keyboard.dismiss();
                            }
                        }}
                        placeholderTextColor={"rgba(255, 255, 255, 0.5)"}
                        placeholder={"Verification Code"}
                        keyboardType={"number-pad"}
                    />
                </View>
                <View>
                    <TouchableHighlight
                        onPress={() => checkCode()}
                        style={[
                            styles.menuOption,
                            {
                                opacity: code.length >= 6 ? 1.0 : 0.5,
                            },
                        ]}
                        disabled={!(code.length >= 6)}
                        underlayColor={"#000"}
                    >
                        {loading ? (
                            <ActivityIndicator size="large" color="#fff" />
                        ) : (
                            <Text style={styles.menuOptionText}>Continue</Text>
                        )}
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        color: "white",
        fontSize: RFValue(45, 926),
        fontWeight: "bold",
        textAlign: "center",
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
        justifyContent: "center",
    },
    headSection: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: RFValue(50, 926),
    },
});

export default VerifyScreen;
