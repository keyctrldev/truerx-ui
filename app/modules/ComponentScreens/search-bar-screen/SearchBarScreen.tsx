import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { SearchBar } from '../../../components';

const SearchBarScreen = () => {
  const [search, setSearch] = useState<string>('');

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <SafeAreaView>
      <SearchBar placeHolder="Search For Pharmacy" value={search} onChangeText={updateSearch} />
    </SafeAreaView>
  );
};
export default SearchBarScreen;
