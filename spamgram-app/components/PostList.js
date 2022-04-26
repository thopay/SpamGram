import { useState } from "react";
import {
    Dimensions,
    SafeAreaView,
    FlatList,
    RefreshControl
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from "./PostCard";

function PostList({ posts, setPosts, navigation, voteUtils, user }) {

    const [refreshing, setRefreshing] = useState(false)

    const _onRefresh = () => {
        setRefreshing(true)
        setTimeout(function() {
            setRefreshing(false)
        }, 1000)
    }

    return (
        <SafeAreaView style={{}}>
            <FlatList
                data={posts.sort((a, b) => {
                    return b.timestamp - a.timestamp
                })}
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing} 
                        onRefresh={_onRefresh}
                        tintColor="#fff"/>
                }
                renderItem={(post) => {
                    return (
                        <PostCard
                            key={post.item.id}
                            data={post.item}
                            navigation={navigation}
                            voteUtils={voteUtils}
                            user={user}
                        />
                    );
                }}
                keyExtractor={(post) => post.id}
                style={{
                    paddingLeft: 15,
                    paddingRight: 15,
                    marginTop: RFValue(95, 926),
                    marginBottom: RFValue(65, 926),
                }}
                contentContainerStyle={{
                    justifyContent: "flex-end",
                    flexGrow: 1,
                }}
            />
        </SafeAreaView>
    );
}

export default PostList;
