import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
	View,
	TouchableHighlight,
	Text,
	TextInput
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function PostScreen(props) {

	const posts = props.posts
    const setPosts = props.setPosts
	const user = props.user

	const [backPressed, setBackPressed] = useState(false);
    const [sendPressed, setSendPressed] = useState(false);
	const navigation = useNavigation();

	const [text, setText] = useState();

    function sendPost() {
        if (text != "" && text != null) {
            setPosts([
                ...posts,
                {
                    id: posts.length + 1,
                    text,
                    author: user.name,
                    timestamp: Date.now(),
					authorColor: user.color,
					authorEmoji: user.emoji,
					votes: 0,
					comments: 0
                },
            ]);
            setText();
			navigation.goBack()
        }
    }

    return (
        <SafeAreaView style={{
			flex: 1,
			justifyContent: 'flex-end'
		}}>
			<View style={{
				position: 'absolute',
				bottom: -10,
				left: 0,
				right: 0,
				top: RFValue(150, 926),
				backgroundColor: '#090909',
				paddingLeft: 10,
				paddingRight: 10
			}}>
				<View
					style={{
						flex: 1,
						backgroundColor: "rgba(48, 49, 51, 0.8)",
						borderRadius: 15,
						marginBottom: 10,
						marginTop: 10,
					}}
				>
					<View
						style={{
							flex: 1,
							backgroundColor: "#1D1E21",
							borderTopLeftRadius: 15,
							borderTopRightRadius: 15,
						}}
					>
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								marginLeft: 10,
								marginRight: 10,
								maxHeight: 55,
							}}
						>
							<View
								style={{
									flex: 1,
								}}
							>
								<TouchableHighlight
									onPressIn={() => setBackPressed(true)}
									onPressOut={() => setBackPressed(false)}
									onPress={() => navigation.goBack()}
									style={{
										backgroundColor: "#000000",
										width: 55,
										height: 55,
										borderBottomLeftRadius: 15,
										borderBottomRightRadius: 15,
										justifyContent: "center",
										alignItems: "center",
										position: "absolute",
									}}
									underlayColor={"#454545"}
								>
									<AntDesign
										name="arrowleft"
										size={36}
										color={backPressed ? "black" : "white"}
									/>
								</TouchableHighlight>
							</View>
							<View
								style={{
									flex: 1,
									justifyContent: 'center',
									alignItems: 'center',
									minWidth: 100,
								}}
							>
								<Text style={{
									fontSize: RFValue(48, 926),
									fontWeight: '700',
									color: 'white',
								}}>New Post</Text>
							</View>
							<View
								style={{
									flex: 1,
									alignItems: "flex-end",
								}}
							>
								<TouchableHighlight
									onPressIn={() => setSendPressed(true)}
									onPressOut={() => setSendPressed(false)}
									onPress={() => sendPost()}
									style={{
										backgroundColor: "#000000",
										width: 55,
										height: 55,
										borderBottomLeftRadius: 15,
										borderBottomRightRadius: 15,
										justifyContent: "center",
										alignItems: "center",
										position: "absolute",
									}}
									underlayColor={"#454545"}
								>
									<Feather name="send" size={36} color={sendPressed ? "black" : "white"} />
								</TouchableHighlight>
							</View>
						</View>
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								marginLeft: 10,
								marginRight: 10,
								marginTop: 10,
								padding: 15
							}}
						>
							<View style={{
								width: '100%'
							}}>
								<TextInput 
									multiline={true}
									value={text}
									style={{
										backgroundColor: '#000',
										width: '100%',
										height: RFValue(300, 926),
										color: '#fff',
										fontSize: 20,
										borderRadius: 15,
										padding: 15,
										paddingTop: 15
									}}
									onChangeText={(newText) => setText(newText)}
									placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
									autoFocus={true}
									placeholder="Something super interesting!"
								/>
							</View>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
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
        fontSize: RFValue(30, 926),
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
        backgroundColor: "#0F0F10",
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
});
