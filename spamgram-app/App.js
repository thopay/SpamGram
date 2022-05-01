import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import PostScreen from "./screens/PostScreen";
import NewPostScreen from "./screens/NewPostScreen";
import AuthScreen from "./screens/AuthScreen";
import { useEffect, useState } from "react";
import VerifyScreen from "./screens/VerifyScreen";
import axios from "axios";

const Stack = createNativeStackNavigator();
const authStack = createNativeStackNavigator();

export default function App() {
    const getAddress = async (username) => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            alert("Location permissions denied!");
            return;
        }

        let userLocation = null;
        try {
            userLocation = await Location.getCurrentPositionAsync({});
        } catch (e) {
            await new Promise((r) => setTimeout(r, 5000));
            userLocation = await Location.getCurrentPositionAsync({});
        }

        setLoadingData(false);
        fetchPosts(userLocation.coords.latitude, userLocation.coords.longitude, username);
        setLocation(userLocation);

        let userAdress = null
        try {
            userAdress = await Location.reverseGeocodeAsync({
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude,
            });
        } catch (e) {
            await new Promise((r) => setTimeout(r, 5000));
            userAdress = await Location.reverseGeocodeAsync({
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude,
            });
        }
        setAddress(userAdress[0]);
    };

    const fetchPosts = (latitude = null, longitude = null, username = null) => {
        try {
            if (username == null) {
                username = user.name
            }
            axios({
                method: "GET",
                url: `https://spamgram.herokuapp.com/api/post?lat=${
                    latitude == null ? location.coords.latitude : latitude
                }&long=${
                    longitude == null ? location.coords.longitude : longitude
                }`,
            }).then((response) => {
                if (response.status == 200) {
                    let posts = [];
                    response.data.forEach((post) => {
                        if (post.likedBy.includes(username)) {
                            posts.push({
                                id: post._id,
                                text: post.message,
                                author: post.creator,
                                timestamp: post.createdAt,
                                authorColor: post.creatorColor,
                                authorEmoji: post.creatorEmoji,
                                votes: post.likeCount,
                                comments: post.comments,
                                rating: 1,
                            });
                        } else if (post.dislikedBy.includes(username)) {
                            posts.push({
                                id: post._id,
                                text: post.message,
                                author: post.creator,
                                timestamp: post.createdAt,
                                authorColor: post.creatorColor,
                                authorEmoji: post.creatorEmoji,
                                votes: post.likeCount,
                                comments: post.comments,
                                rating: 0,
                            });
                        } else {
                            posts.push({
                                id: post._id,
                                text: post.message,
                                author: post.creator,
                                timestamp: post.createdAt,
                                authorColor: post.creatorColor,
                                authorEmoji: post.creatorEmoji,
                                votes: post.likeCount,
                                comments: post.comments,
                                rating: -1,
                            });
                        }
                    });
                    setPosts(posts);
                    return;
                }
            });
        } catch (e) {
            console.log(e);
            return;
        }
    };

    const addPost = (message) => {
        let newPost = {
            message,
            creator: user.name,
            userid: user.id,
            long: location.coords.longitude,
            lat: location.coords.latitude,
            creatorEmoji: user.emoji,
            creatorColor: user.color,
            createdAt: Date.now(),
            comments: 0
        };
        const encodeGetParams = (p) =>
            Object.entries(p)
                .map((kv) => kv.map(encodeURIComponent).join("="))
                .join("&");
        axios
            .post(
                `https://spamgram.herokuapp.com/api/post?` +
                    encodeGetParams(newPost)
            )
            .then((response) => {
                if (response.status == 200) {
                    setPosts([
                        ...posts,
                        {
                            id: response.data._id,
                            text: response.data.message,
                            author: response.data.creator,
                            timestamp: response.data.createdAt,
                            authorColor: response.data.creatorColor,
                            authorEmoji: response.data.creatorEmoji,
                            votes: response.data.likeCount,
                            comments: response.data.comments,
                            rating: -1,
                        },
                    ]);
                    return;
                }
            });
    };

    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const [location, setLocation] = useState({});
    const [address, setAddress] = useState([]);
    const [phone, setPhone] = useState("");
    const [loadingData, setLoadingData] = useState(true);

    const [posts, setPosts] = useState([]);

    if (authenticated == true) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        options={{
                            headerShown: false,
                        }}
                    >
                        {() => (
                            <HomeScreen
                                posts={posts}
                                addPost={addPost}
                                address={address}
                                user={user}
                                fetchPosts={fetchPosts}
                                loadingData={loadingData}
                            />
                        )}
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
                        {() => (
                            <NewPostScreen
                                posts={posts}
                                addPost={addPost}
                                user={user}
                            />
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <NavigationContainer>
                <authStack.Navigator>
                    <authStack.Screen
                        name="AuthScreen"
                        options={{
                            headerShown: false,
                        }}
                    >
                        {() => (
                            <AuthScreen
                                setAuthenticated={setAuthenticated}
                                phone={phone}
                                setPhone={setPhone}
                                getAddress={getAddress}
                            />
                        )}
                    </authStack.Screen>
                    <authStack.Screen
                        name="Verify"
                        options={{
                            headerShown: false,
                        }}
                    >
                        {() => (
                            <VerifyScreen
                                setAuthenticated={setAuthenticated}
                                setUser={setUser}
                                phone={phone}
                                getAddress={getAddress}
                            />
                        )}
                    </authStack.Screen>
                </authStack.Navigator>
            </NavigationContainer>
        );
    }
}
