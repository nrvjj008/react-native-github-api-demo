import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

//Component that displays name, profile_picture ,description, follower count and following count
const UserProfile = ({ user, onFollowersPress, onFollowingPress }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{user.username}</Text>

        {/* display name and desciption only if they exist */}
        {user.name && <Text style={styles.name}>{user.name}</Text>}
        {user.description && (
          <Text style={styles.description}>{user.description}</Text>
        )}
        <View style={styles.followContainer}>
          {/* disabled if follower/following is 0 */}
          <TouchableOpacity
            disabled={user.followers === 0}
            onPress={onFollowersPress}
          >
            <Text
              style={styles.followers}
            >{`${user.followers} Followers`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={user.following === 0}
            onPress={onFollowingPress}
          >
            <Text
              style={styles.followers}
            >{`${user.following} Following`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    minHeight: 200,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
  username: {
    fontSize: 14,
    color: "gray",
  },
  name: {
    color: "dimgray",
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  followContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  followers: {
    fontSize: 16,
    color: "dodgerblue",
    marginRight: 10,
  },
};

export default UserProfile;
