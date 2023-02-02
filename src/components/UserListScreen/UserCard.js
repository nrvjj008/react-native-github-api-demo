import React from 'react';
import { View, Text, Image } from 'react-native';

//This component is being used in UserListScreen to display the list of followers/following
const UserCard = ({ user}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </View>
  );
};

const styles ={
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
    margin: 8,
    borderRadius:10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  name: {
    fontSize: 14,
    color: 'gray',
  },
};

export default UserCard;
