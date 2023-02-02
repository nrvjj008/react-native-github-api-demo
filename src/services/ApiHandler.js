import axios from "axios";

//Manages APIs

//User model to map the response of APIs(searchUser, getFollowers, getFollowing)
class User {
  constructor(username, name, description, followers, following, avatar) {
    this.username = username;
    this.name = name;
    this.description = description;
    this.followers = followers;
    this.following = following;
    this.avatar = avatar;
  }
}

const API_BASE_URL = "https://api.github.com/users/";

//API to search for a user
//Param: userName
//Response: User class
export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${username}`);
    const { login, name, followers, following, avatar_url, bio } =
      response.data;
    return new User(login, name, bio, followers, following, avatar_url);
  } catch (error) {
    console.error(error);
  }
};

//API to get list of followers
//Param: userName
//Response: List of User class

//Note: the response only contains username and profile picture fields 

export const getFollowers = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${username}/followers`);
    return response.data.map(
      // login is username 
      ({ login, avatar_url }) => new User(login, "", "", "", "", avatar_url)
    );
  } catch (error) {
    console.error(error);
  }
};

//API to get list of following
//Param: userName
//Response: List of User class

//Note: the response only contains username and profile picture fields
export const getFollowing = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${username}/following`);
    return response.data.map(
      // login is username 
      ({ login, avatar_url }) => new User(login, "", "", "", "", avatar_url)
    );
  } catch (error) {
    console.error(error);
  }
};
