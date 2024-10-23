import React from 'react';
import { SafeAreaView } from 'react-native';
import { SearchBar } from '../../../components';

const SearchBarScreen = () => {
  return (
    <SafeAreaView>
      <SearchBar location="Austin" />
    </SafeAreaView>
  );
};
export default SearchBarScreen;
