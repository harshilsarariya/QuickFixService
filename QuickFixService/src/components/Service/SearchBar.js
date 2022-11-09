import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      className="bg-white rounded-lg m-2"
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
