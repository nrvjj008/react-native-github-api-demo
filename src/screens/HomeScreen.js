import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/HomeScreen/SearchBar";
import UserProfile from "../components/HomeScreen/UserProfile";
import { searchUser } from "../services/ApiHandler";

// First Screen that will be displayed
// Contains two components,
//  1)SearchBar : to get the Github Username
//  2)UserProfile : to display the Github User info

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  // callback function when the search icon is clicked on SearcBar
  const handleSearch = async (searchText) => {
    try {
      const data = await searchUser(searchText);
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // callback function when followers is clicked on UserProfile
  const handleFollowersPress = () => {
    navigation.navigate("UserListScreen", {
      title: "Followers",
      username: userData.username,
      isFollowersFetch: true,
    });
  };

  // callback function when following is clicked on UserProfile
  const handleFollowingPress = () => {
    navigation.navigate("UserListScreen", {
      title: "Following",
      username: userData.username,
      isFollowersFetch: false,
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar placeholder="Github Username" searchUser={handleSearch} />

      {/* displays the UserProfile Component if user found, Text otherwise */}
      {userData ? (
        <UserProfile
          user={userData}
          onFollowersPress={handleFollowersPress}
          onFollowingPress={handleFollowingPress}
        />
      ) : (
        <Text style={styles.noUser}>No User Found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  noUser: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60%",
    fontSize: 22,
    color: "gray",
  },
});
export default HomeScreen;
