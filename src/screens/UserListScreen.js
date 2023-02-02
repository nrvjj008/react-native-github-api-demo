import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import UserCard from "../components/UserListScreen/UserCard";
import { getFollowers, getFollowing } from "../services/ApiHandler";

//Uses the UserCard component to display the list of followers/following
const UserListScreen = ({ route, navigation }) => {
  // updates the title of screen (i.e following/followers)
  navigation.setOptions({ title: route.params.title });

  //gets the username from HomeScreen
  const username = route.params.username;

  //decides wether to fetch followers or following based on isFollowersFetch
  //if isFollowersFetch is true => getFollowers() else => getFollowing()
  const isFollowersFetch = route.params.isFollowersFetch;

  //list of all followers/following
  const [users, setUsers] = useState([]);

  const getUserFetchFunction = () => {
    return isFollowersFetch ? getFollowers(username) : getFollowing(username);
  };

  //handles click of an item (i.e which User was clicked from the list)
  const handleProfileClick = (username) => {
    navigation.push("ProfileScreen", {
      username: username,
    });
  };

  //to call the API only once
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUserFetchFunction();
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handleProfileClick(item.username);
              }}
            >
              <UserCard user={item} key={index}></UserCard>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
};

export default UserListScreen;
