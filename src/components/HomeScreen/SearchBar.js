import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


const SearchBar = (props) => {
  // searchText contains the value of TextInput
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        onChangeText={(newText) => setSearchText(newText)}
      />
      <TouchableOpacity
        onPress={() => {
          props.searchUser(searchText);
        }}
      >
        <Icon name="search" size={25} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    elevation: 30,
    shadowColor: "darkgrey",
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
};

export default SearchBar;
