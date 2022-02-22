import { StyleSheet, Text, View, Pressable, Button, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window');

function HomeScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#262626'
    }}>
      <View style={styles.headSection}>
        <Text style={styles.header}>Welcome PurplePanda3!</Text>
        <Image source={require('./assets/star.png')} />
        <Text style={styles.subheader}>Pick a room to begin!</Text>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate('Details')} style={styles.menuOption}>
          <Text style={styles.menuOptionText}>Iowa State University</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Details')} style={styles.menuOption}>
          <Text style={styles.menuOptionText}>Ames</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Details')} style={styles.menuOption}>
          <Text style={styles.menuOptionText}>Iowa</Text>
        </Pressable>
      </View>
    </View>
  )
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#262626'
    }}>
      <Text>Details Screen</Text>
      <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Overview'
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
});
