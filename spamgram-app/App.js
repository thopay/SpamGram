import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Pressable,
    Button,
    Dimensions,
    Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RFValue } from "react-native-responsive-fontsize";
import * as Location from "expo-location";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import PostScreen from "./screens/PostScreen";
import NewPostScreen from "./screens/NewPostScreen";
import { useEffect, useState } from "react";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const Stack = createNativeStackNavigator();

export default function App() {

    const getAddress = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== "granted") {
          alert("Location permissions denied!")
          return
      }

      const userLocation = await Location.getCurrentPositionAsync({})
      setLocation(userLocation)

      let userAdress = await Location.reverseGeocodeAsync({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
      })
      setAddress(userAdress[0])
      console.log(`City: ${address.city} - State: ${address.region}`)
    }

    useEffect(async () => {
      getAddress()
    }, []);

    const [location, setLocation] = useState([])
    const [address, setAddress] = useState([])

    const [posts, setPosts] = useState([
        {
            id: 0,
            text: "I'm in love with Chris Evans",
            author: "RedRat19",
            authorColor: "#FDCFCF",
            authorEmoji: "🐭",
            timestamp: 1648776191534,
            votes: 0,
        },
        {
            id: 1,
            text: "oh yeah oh yeah oh yeah oh yeah oh yeah oh yehjf ljfsflkjlkjff",
            author: "BlueFox78",
            authorColor: "#CFE1FD",
            authorEmoji: "🦊",
            timestamp: 1648776191534,
            votes: 0,
        },
        {
            id: 2,
            text: "Who tryna meet in Beardshear rn??",
            author: "GreenGorilla9",
            authorColor: "#D0FDCF",
            authorEmoji: "🦍",
            timestamp: 1648776191534,
            votes: 0,
        },
        {
            id: 3,
            text: "I wanna get hit by cyride.",
            author: "You",
            authorColor: "#FCCFFD",
            authorEmoji: "🐼",
            timestamp: 1648776191534,
            votes: 0,
        },
    ]);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    options={{
                        headerShown: false,
                    }}
                >
                    {() => <HomeScreen posts={posts} setPosts={setPosts} />}
                </Stack.Screen>
                <Stack.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Post"
                    component={PostScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="NewPost"
                    options={{
                        headerShown: false,
                        presentation: "transparentModal",
                        cardOverlayEnabled: true,
                        gestureEnabled: true,
                        gestureDirection: "vertical",
                    }}
                >
                    {() => <NewPostScreen posts={posts} setPosts={setPosts} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
