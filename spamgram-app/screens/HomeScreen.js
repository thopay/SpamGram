import { useState } from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet, Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import HomeFooter from '../components/Footer/HomeFooter';
import HomeHeader from '../components/Header/HomeHeader';
import PostList from '../components/PostList';

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
  } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {

	const [posts, setPosts] = useState([
		{
			id: 0,
			text: 'I\'m in love with Chris Evans',
			author: 'RedRat19',
			authorColor: '#FDCFCF',
			authorEmoji: '🐭',
			timestamp: 1648776191534
		},
		{
			id: 1,
			text: 'oh yeah oh yeah oh yeah oh yeah oh yeah oh yehjf ljfsflkjlkjff',
			author: 'BlueFox78',
			authorColor: '#CFE1FD',
			authorEmoji: '🦊',
			timestamp: 1648776191534
		},
		{
			id: 2,
			text: 'Who tryna meet in Beardshear rn??',
			author: 'GreenGorilla9',
			authorColor: '#D0FDCF',
			authorEmoji: '🦍',
			timestamp: 1648776191534
		},
		{
			id: 3,
			text: 'I wanna get hit by cyride.',
			author: 'You',
			authorColor: '#FCCFFD',
			authorEmoji: '🐼',
			timestamp: 1648776191534
		}
	])

    return (
        <View style={{
                flex: 1,
                backgroundColor: "#090909",
            }}>
			<HomeHeader />
			<View style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}>
				
				{/* <View style={styles.headSection}>
					<Text style={styles.header}>Welcome PurplePanda3!</Text>
					<Image source={require("../assets/star.png")} style={{
						margin: RFValue(10, 926)
					}}/>
					<Text style={styles.subheader}>Where would you like to go?</Text>
				</View> */}
				<PostList posts={posts} setPosts={setPosts} navigation={navigation} />
				{/* <PostCard data={{
					text: 'bruh',
					author: 'BlueFox78',
					authorColor: '#CFE1FD',
					authorEmoji: '🦊',
					timestamp: 1648593082395
				}}/> */}
				{/* <View>
					<TouchableHighlight onPress={() => navigation.navigate("Chat")}
						style={styles.menuOption}
						underlayColor={"#000"}>
						<Text style={styles.menuOptionText}>
							Chats
						</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => navigation.navigate("Details")}
						style={styles.menuOption}
						underlayColor={"#000"}>
						<Text style={styles.menuOptionText}>Posts</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => navigation.navigate("Details")}
						style={styles.menuOption}
						underlayColor={"#000"}>
						<Text style={styles.menuOptionText}>Iowa</Text>
					</TouchableHighlight>
				</View> */}
			</View>
			<HomeFooter />
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#262626',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	header: {
	  color: 'white',
	  fontSize: RFValue(30, 926),
	  fontWeight: 'bold'
	},
	subheader: {
	  color: 'white',
	  fontSize: RFValue(30, 926),
	  fontWeight: '200'
	},
	menuOption: {
	  padding: RFValue(24, 926),
	  margin: RFValue(12, 926),
	  backgroundColor: '#0F0F10',
	  width: (399 / 428) * SCREEN_WIDTH,
	  borderColor: '#FCCFFD',
	  borderWidth: 1,
	  borderRadius: 15,
	},
	menuOptionText: {
	  color: 'white',
	  fontSize: RFValue(32, 926),
	  textAlign: 'center',
	},
	headSection: {
	  justifyContent: 'center',
	  alignItems: 'center',
	  paddingBottom: RFValue(50, 926)
	}
})