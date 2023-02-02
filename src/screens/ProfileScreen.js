import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import UserProfile from "../components/HomeScreen/UserProfile";
import { searchUser } from "../services/ApiHandler";

//displays the UserProfile component
const ProfileScreen = ({ route, navigation }) => {
  const { username } = route.params;
  const [userData, setUserData] = useState(null);

  // callback function when followers is clicked on UserProfile
  const handleFollowersPress = () => {
    navigation.push("UserListScreen", {
      title: "Followers",
      username: userData.username,
      isFollowersFetch: true,
    });
  };

  // callback function when followeing is clicked on UserProfile
  const handleFollowingPress = () => {
    navigation.push("UserListScreen", {
      title: "Following",
      username: userData.username,
      isFollowersFetch: false,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await searchUser(username);
      setUserData(response);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.cardContainer}>
      {/* displays the UserProfile Component if user found, Text otherwise */}
      {userData ? (
        <UserProfile
          user={userData}
          onFollowersPress={handleFollowersPress}
          onFollowingPress={handleFollowingPress}
        />
      ) : (
        <Text>User Not Found</Text>
      )}
    </View>
  );
};

const styles = {
  cardContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    minHeight: 200,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
    elevation: 50,
  },
};

export default ProfileScreen;
