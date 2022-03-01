import { Text, View, TouchableHighlight, Image, StyleSheet, Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
  } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
    return (
        <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#262626",
            }}>
            <View style={styles.headSection}>
                <Text style={styles.header}>Welcome PurplePanda3!</Text>
                <Image source={require("../assets/star.png")} style={{
					margin: RFValue(10, 926)
				}}/>
                <Text style={styles.subheader}>Pick a room to begin!</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => navigation.navigate("Chat")}
                    style={styles.menuOption}
                    underlayColor={"#000"}>
                    <Text style={styles.menuOptionText}>
                        Iowa State University
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate("Details")}
                    style={styles.menuOption}
                    underlayColor={"#000"}>
                    <Text style={styles.menuOptionText}>Ames</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate("Details")}
                    style={styles.menuOption}
                    underlayColor={"#000"}>
                    <Text style={styles.menuOptionText}>Iowa</Text>
                </TouchableHighlight>
            </View>
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