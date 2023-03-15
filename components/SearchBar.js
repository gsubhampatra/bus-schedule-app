import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Text} from "react-native";

const SearchBar = ({ placeholder, suggestions}) => {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  const handleSelect = (item) => {
    setSearchText(item);
    setShowSuggestions(false);
    // onSelect(item);
  };
  const onSelect = (item)=>{
    return <Text>{item}  </Text>
  }
  const renderItem = ({ item }) => {
    return (
      <Text style={styles.suggestion} onPress={() => handleSelect(item)}>
        {item}
      </Text>
    );
  };

  return (
    <View className="w-48 p-2 bg-white border border-blue-600 rounded-md ">
      <TextInput
         className="text-[20px]"
        placeholder={placeholder}
        value={searchText}
        onChangeText={handleSearch}
      />
      {showSuggestions && (
        <FlatList
          style={styles.suggestionsContainer}
          data={suggestions.filter((s) =>
            s.toLowerCase().includes(searchText.toLowerCase())
          )}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
  },
  suggestionsContainer: {
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    backgroundColor: "white",
    maxHeight: 150,
  },
  suggestion: {
    padding: 10,
    fontSize: 16,
  },
});

export default SearchBar;
